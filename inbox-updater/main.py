"""
inbox-updater/main.py — orchestrator

Usage:
    python inbox-updater/main.py

Env vars required (see .env.example):
    GMAIL_CLIENT_CREDENTIALS
    GMAIL_REFRESH_TOKEN
    SLACK_WEBHOOK_URL
    ANTHROPIC_API_KEY

Optional overrides:
    INBOX_TIMEZONE        (default: America/Chicago)
    INBOX_WINDOW_START_HOUR  (default: 20 — i.e. 8:00 PM previous day)
"""

import os
import sys
from datetime import datetime, timedelta, timezone

import pytz
from dotenv import load_dotenv

from gmail_client import fetch_unread_since
from classifier import classify_messages, group_by_bucket
from slack_notifier import build_message, post_to_slack

load_dotenv()


def _window_start(tz_name: str, start_hour: int) -> datetime:
    """
    Return the start of the reporting window: start_hour on the previous
    calendar day (or today if the current local time is before start_hour).
    """
    tz = pytz.timezone(tz_name)
    now_local = datetime.now(tz)

    candidate = now_local.replace(hour=start_hour, minute=0, second=0, microsecond=0)
    if now_local <= candidate:
        # We haven't passed today's start_hour yet — use yesterday
        candidate -= timedelta(days=1)

    return candidate


def main() -> None:
    tz_name = os.getenv("INBOX_TIMEZONE", "America/Chicago")
    start_hour = int(os.getenv("INBOX_WINDOW_START_HOUR", "20"))

    now = datetime.now(timezone.utc)
    window_start = _window_start(tz_name, start_hour)

    print(f"Fetching unread inbox mail since {window_start.isoformat()} ...")
    try:
        messages = fetch_unread_since(window_start)
    except Exception as exc:
        print(f"ERROR: Gmail fetch failed — {exc}", file=sys.stderr)
        sys.exit(1)

    print(f"  {len(messages)} unread message(s) found.")

    if messages:
        print("Classifying messages ...")
        try:
            classify_messages(messages)
        except Exception as exc:
            print(f"ERROR: Classification failed — {exc}", file=sys.stderr)
            sys.exit(1)

    grouped = group_by_bucket(messages)
    slack_text = build_message(grouped, run_time=now, tz_name=tz_name)

    print("Posting to Slack ...")
    try:
        post_to_slack(slack_text)
    except Exception as exc:
        print(f"ERROR: Slack post failed — {exc}", file=sys.stderr)
        sys.exit(1)

    print("Done.")


if __name__ == "__main__":
    main()
