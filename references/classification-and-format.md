# Classification and Format Reference

This file defines the classification rubric and Slack message format used by the Gmail Slack Inbox Updater automation.

---

## Classification Rubric

Each unread email is assigned to exactly one bucket. When signals conflict, choose the more urgent non-spam bucket.

### `needs response now`

Assign here if **any** of the following are true:

- Subject or body contains urgent language: "urgent", "ASAP", "emergency", "time-sensitive", "deadline today", "respond by [today's date]"
- Sender is a known client, lead, or business contact asking a direct question
- Email is a reply in an ongoing thread that requires action to unblock someone
- Contains a meeting or appointment that starts within 24 hours
- Legal, financial, or compliance matter with an imminent deadline
- A paying customer reporting a service failure or complaint

### `respond today`

Assign here if **any** of the following are true:

- A client, lead, or vendor sent a question or request with no extreme urgency signal
- A follow-up from someone waiting on information
- A quote request, estimate inquiry, or job scheduling request
- A business partner or supplier requiring a decision or confirmation
- An invoice or payment notice requiring acknowledgement
- An email from a known contact that was sent more than 24 hours ago with no response yet

### `respond`

Assign here if:

- Email requires a response but has no urgency or time-pressure signal
- General professional correspondence that can wait more than a day
- Informational emails from contacts that still warrant acknowledgment
- Job applications, vendor pitches, or partnership inquiries worth reviewing later
- Newsletters or digests from professional contacts (not mass-marketing)

### `spam`

Assign here if:

- Mass marketing, promotional, or advertising email
- Cold sales outreach from unknown senders with no personal relevance
- Automated system notifications that require no action (receipts, confirmations, alerts you didn't request)
- Social media notifications
- Newsletters from brands or publications (not personal contacts)
- Any email that a reasonable person would delete or archive without replying

---

## Conflict Resolution

| Situation | Rule |
|---|---|
| Urgent language but unknown sender | `needs response now` — urgency wins |
| Known client but no urgency signals | `respond today` |
| Promotional email with "urgent" in subject | `spam` — promotional overrides fake urgency |
| Automated receipt from a client transaction | `spam` — no action needed |
| Reply from known contact in ongoing thread | Bucket determined by urgency of their message |

---

## Slack Message Format

### Standard summary (unread emails exist)

```
📬 *Inbox Update — [TIME] CT*
Window: Since 8:00 PM yesterday

*[N] unread emails*
• 🔴 Needs response now: [N]
• 🟠 Respond today: [N]
• 🟡 Respond: [N]
• ⚫ Spam: [N]

*Priority items:*
🔴 *[Subject line]* — [sender@email.com]
   [1-sentence summary of what they want or why it matters]

🔴 *[Subject line]* — [sender@email.com]
   [1-sentence summary]

🟠 *[Subject line]* — [sender@email.com]
   [1-sentence summary]
```

**Rules:**
- Show all `needs response now` items, up to 5
- Show up to 3 `respond today` items
- Omit `respond` and `spam` from bullet list — counts only
- If a bucket has 0 emails, show the count line but omit bullets for that bucket
- Keep each bullet summary to one sentence, plain language — no jargon
- Always include sender email address on every bullet item
- Time shown in Central Time (CT)

### All-clear message (no unread emails in window)

```
✅ *Inbox Update — [TIME] CT*
Window: Since 8:00 PM yesterday

No unread emails. You're all caught up.
```

---

## Timezone

All times displayed and scheduled in **Central Time (CT)**.

- CDT (Daylight): UTC−5 (approximately April–October)
- CST (Standard): UTC−6 (approximately November–March)

GitHub Actions cron schedules are in UTC. See `.github/workflows/inbox-updater.yml` for the UTC cron values and a note on the active offset.

---

## Example Output

```
📬 *Inbox Update — 11:00 AM CT*
Window: Since 8:00 PM yesterday

*7 unread emails*
• 🔴 Needs response now: 2
• 🟠 Respond today: 3
• 🟡 Respond: 1
• ⚫ Spam: 1

*Priority items:*
🔴 *Re: Chimney repair estimate — when can you start?* — mike.jones@gmail.com
   Mike is following up on the estimate sent last week and asking for a start date.

🔴 *URGENT: Water coming in around flashing* — sarah.k@hotmail.com
   Sarah reports active water intrusion around the chimney flashing and needs someone out this week.

🟠 *Tuckpointing quote request — commercial building downtown* — facilities@downtownlofts.com
   Facilities manager requesting a quote for tuckpointing on a 4-story commercial building.

🟠 *Invoice #1047 — please confirm receipt* — billing@supplierco.com
   Supplier requesting confirmation that invoice #1047 was received.

🟠 *Job inquiry — brick steps repair* — t.williams@yahoo.com
   Homeowner asking about repairing cracked brick front steps.
```
