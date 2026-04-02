"""
setup_auth.py — one-time OAuth2 setup script.

Run this locally once to get a refresh token, then store the output
values as GitHub repository secrets.

Usage:
    1. Go to Google Cloud Console → Create a project → Enable Gmail API
    2. Create OAuth 2.0 credentials (Desktop app type)
    3. Download the credentials JSON file
    4. Run: python inbox-updater/setup_auth.py path/to/credentials.json
    5. Copy the printed values into GitHub secrets (Settings → Secrets)
"""

import json
import sys

from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]


def main():
    if len(sys.argv) < 2:
        print("Usage: python setup_auth.py path/to/credentials.json")
        sys.exit(1)

    creds_path = sys.argv[1]
    flow = InstalledAppFlow.from_client_secrets_file(creds_path, SCOPES)
    creds = flow.run_local_server(port=0)

    with open(creds_path) as f:
        client_info = json.load(f)

    print("\n" + "=" * 60)
    print("Copy these values into your GitHub repository secrets:")
    print("=" * 60)
    print(f"\nGMAIL_CLIENT_CREDENTIALS\n{json.dumps(client_info)}\n")
    print(f"GMAIL_REFRESH_TOKEN\n{creds.refresh_token}\n")
    print("=" * 60)
    print("Also add:")
    print("  SLACK_WEBHOOK_URL   — your Slack incoming webhook URL")
    print("  ANTHROPIC_API_KEY   — your Anthropic API key")


if __name__ == "__main__":
    main()
