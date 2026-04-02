#!/bin/bash
# Usage: ./slack-send.sh "message text"
# Requires SLACK_WEBHOOK_URL to be set in environment or .env.local

WEBHOOK_URL="${SLACK_WEBHOOK_URL}"

if [ -z "$WEBHOOK_URL" ]; then
  # Try reading from .env.local
  if [ -f ".env.local" ]; then
    WEBHOOK_URL=$(grep SLACK_WEBHOOK_URL .env.local | cut -d '=' -f2)
  fi
fi

if [ -z "$WEBHOOK_URL" ]; then
  echo "ERROR: SLACK_WEBHOOK_URL not set. Add it to .env.local or export it."
  exit 1
fi

MESSAGE="$1"

curl -s -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{\"text\": $(echo "$MESSAGE" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')}" \
  && echo "Sent to Slack" || echo "Failed to send to Slack"
