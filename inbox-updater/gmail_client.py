"""
Gmail client — fetches unread inbox messages within the configured time window.
Reads only; never modifies mailbox state.
"""

import json
import os
import base64
import email.utils
from datetime import datetime, timezone
from typing import Optional

import pytz
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build


SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]


def _build_service():
    client_creds_raw = os.environ["GMAIL_CLIENT_CREDENTIALS"].strip()
    refresh_token = os.environ["GMAIL_REFRESH_TOKEN"].strip()

    # Remove any control characters that may be introduced by secret managers
    import re
    client_creds_raw = re.sub(r'[\x00-\x1f\x7f]', '', client_creds_raw)

    client_info = json.loads(client_creds_raw)
    # Support both "installed" and "web" app credential shapes
    app_info = client_info.get("installed") or client_info.get("web", {})

    creds = Credentials(
        token=None,
        refresh_token=refresh_token,
        token_uri="https://oauth2.googleapis.com/token",
        client_id=app_info["client_id"],
        client_secret=app_info["client_secret"],
        scopes=SCOPES,
    )
    creds.refresh(Request())
    return build("gmail", "v1", credentials=creds, cache_discovery=False)


def _parse_sender(headers: list[dict]) -> tuple[str, str]:
    """Return (display_name, email_address) from message headers."""
    for h in headers:
        if h["name"].lower() == "from":
            parsed = email.utils.parseaddr(h["value"])
            display_name = parsed[0] or parsed[1]
            addr = parsed[1]
            return display_name, addr
    return ("Unknown", "unknown@unknown.com")


def _get_header(headers: list[dict], name: str) -> str:
    for h in headers:
        if h["name"].lower() == name.lower():
            return h["value"]
    return ""


def fetch_unread_since(window_start: datetime) -> list[dict]:
    """
    Return a list of message dicts for all unread inbox emails
    received on or after `window_start` (timezone-aware datetime).

    Each dict contains:
        subject, sender_name, sender_email, received_at (datetime),
        snippet, message_id, thread_id
    """
    service = _build_service()

    # Gmail query: unread, inbox only, after the window start (epoch seconds)
    after_ts = int(window_start.astimezone(timezone.utc).timestamp())
    query = f"is:unread in:inbox after:{after_ts}"

    messages_raw = []
    page_token: Optional[str] = None

    while True:
        kwargs = {"userId": "me", "q": query, "maxResults": 100}
        if page_token:
            kwargs["pageToken"] = page_token
        result = service.users().messages().list(**kwargs).execute()
        messages_raw.extend(result.get("messages", []))
        page_token = result.get("nextPageToken")
        if not page_token:
            break

    messages = []
    for m in messages_raw:
        full = (
            service.users()
            .messages()
            .get(userId="me", id=m["id"], format="metadata",
                 metadataHeaders=["From", "Subject", "Date"])
            .execute()
        )
        headers = full.get("payload", {}).get("headers", [])
        sender_name, sender_email = _parse_sender(headers)
        subject = _get_header(headers, "Subject") or "(no subject)"
        date_str = _get_header(headers, "Date")

        # Parse received timestamp; fall back to internalDate (ms since epoch)
        try:
            received_at = email.utils.parsedate_to_datetime(date_str)
        except Exception:
            internal_ms = int(full.get("internalDate", 0))
            received_at = datetime.fromtimestamp(internal_ms / 1000, tz=timezone.utc)

        messages.append({
            "subject": subject,
            "sender_name": sender_name,
            "sender_email": sender_email,
            "received_at": received_at,
            "snippet": full.get("snippet", ""),
            "message_id": full["id"],
            "thread_id": full.get("threadId", ""),
        })

    return messages
