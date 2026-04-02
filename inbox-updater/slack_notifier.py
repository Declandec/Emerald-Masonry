"""
Slack notifier — builds and posts the inbox summary message.
Uses an incoming webhook URL; no Slack SDK dependency required.
"""

import os
from datetime import datetime

import pytz
import requests

BUCKET_EMOJI = {
    "needs response now": "🔴",
    "respond today": "🟠",
    "respond": "🟡",
    "spam": "⚫",
}

# Max bullet items shown per bucket
MAX_BULLETS = {
    "needs response now": 5,
    "respond today": 3,
}


def _format_time(dt: datetime, tz_name: str) -> str:
    tz = pytz.timezone(tz_name)
    local = dt.astimezone(tz)
    return local.strftime("%-I:%M %p CT")


def build_message(
    grouped: dict[str, list[dict]],
    run_time: datetime,
    tz_name: str = "America/Chicago",
) -> str:
    total = sum(len(v) for v in grouped.values())
    time_str = _format_time(run_time, tz_name)

    if total == 0:
        return (
            f"✅ *Inbox Update — {time_str}*\n"
            "Window: Since 8:00 PM yesterday\n\n"
            "No unread emails. You're all caught up."
        )

    lines = [
        f"📬 *Inbox Update — {time_str}*",
        "Window: Since 8:00 PM yesterday",
        "",
        f"*{total} unread email{'s' if total != 1 else ''}*",
    ]

    for bucket, emoji in BUCKET_EMOJI.items():
        count = len(grouped.get(bucket, []))
        lines.append(f"• {emoji} {bucket.title()}: {count}")

    # High-priority bullets
    priority_lines = []
    for bucket in ("needs response now", "respond today"):
        items = grouped.get(bucket, [])
        limit = MAX_BULLETS[bucket]
        for msg in items[:limit]:
            emoji = BUCKET_EMOJI[bucket]
            summary = msg.get("summary", msg.get("snippet", "")[:120])
            priority_lines.append(
                f"{emoji} *{msg['subject']}* — {msg['sender_email']}\n"
                f"   {summary}"
            )

    if priority_lines:
        lines.append("")
        lines.append("*Priority items:*")
        lines.extend(priority_lines)

    return "\n".join(lines)


def post_to_slack(text: str, webhook_url: str | None = None) -> None:
    url = webhook_url or os.environ["SLACK_WEBHOOK_URL"]
    resp = requests.post(url, json={"text": text}, timeout=10)
    resp.raise_for_status()
