"""
Classifier — uses Claude to assign each email to an urgency bucket.

Buckets (in descending priority):
    needs response now | respond today | respond | spam

When signals conflict, choose the more urgent non-spam bucket.
"""

import os
import json
from typing import Literal

import anthropic

Bucket = Literal["needs response now", "respond today", "respond", "spam"]

_SYSTEM_PROMPT = """You are an email triage assistant. Your job is to classify each email into exactly one of these four buckets:

- needs response now: Truly urgent. Active problems, emergencies, deadlines today, messages that block someone waiting on you, paying clients with complaints or active issues.
- respond today: Important but not an emergency. Client questions, job inquiries, vendor requests, anything from a known contact that warrants a same-day reply.
- respond: Should reply eventually but no time pressure. General professional correspondence, informational exchanges, vendor pitches worth reviewing later.
- spam: Mass marketing, cold sales, automated notifications that need no action, social media alerts, newsletters.

Conflict rules:
- Urgent language from unknown sender → needs response now (urgency wins)
- Known client, no urgency signals → respond today
- Promotional email with "urgent" in subject → spam (promotional overrides fake urgency)
- Automated receipt from a client transaction → spam

You will receive a JSON object with: subject, sender_name, sender_email, snippet.
Respond with a JSON object: {"bucket": "<bucket name>", "summary": "<one sentence explaining what the sender wants or why it matters>"}
Only output the JSON. No explanation outside the JSON."""


def classify_messages(messages: list[dict]) -> list[dict]:
    """
    Add 'bucket' and 'summary' keys to each message dict in-place.
    Returns the same list with those keys populated.
    Uses a single batched prompt where possible; falls back to per-message calls.
    """
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

    for msg in messages:
        payload = {
            "subject": msg["subject"],
            "sender_name": msg["sender_name"],
            "sender_email": msg["sender_email"],
            "snippet": msg["snippet"][:400],  # keep tokens bounded
        }
        response = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=256,
            system=_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": json.dumps(payload)}],
        )
        raw = response.content[0].text.strip()
        try:
            result = json.loads(raw)
            msg["bucket"] = result.get("bucket", "respond")
            msg["summary"] = result.get("summary", "")
        except (json.JSONDecodeError, KeyError):
            # Safe fallback: treat as needing a response rather than losing the email
            msg["bucket"] = "respond"
            msg["summary"] = msg["snippet"][:120]

    return messages


def group_by_bucket(messages: list[dict]) -> dict[str, list[dict]]:
    """Return messages grouped by bucket, in priority order."""
    buckets: dict[str, list[dict]] = {
        "needs response now": [],
        "respond today": [],
        "respond": [],
        "spam": [],
    }
    for msg in messages:
        bucket = msg.get("bucket", "respond")
        if bucket in buckets:
            buckets[bucket].append(msg)
        else:
            buckets["respond"].append(msg)
    return buckets
