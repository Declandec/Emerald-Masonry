# Emerald Masonry Task Manager - PRD

## 1. Objective

Build a simple, fast, mobile-first task management app for Emerald Masonry to manage:

- Daily tasks
- Weekly planning
- Job-related work
- Follow-ups and estimates

The system must be extremely simple, fast to use in the field, and visually clean.

---

## 2. Core Principles

- Mobile-first (primary usage is phone)
- Minimal clicks (everything fast)
- Clear visibility (no clutter)
- Real-world workflow (jobs, clients, follow-ups)

---

## 3. Core Features

### Feature 1: Task Creation (MVP - START HERE)

User can create a task with:
- Title (required)
- Description (optional)
- Category: Job, Estimate, Follow-up, Admin
- Priority: High, Medium, Low
- Due Date (default: today)

UI:
- Input bar at top
- Placeholder: "Add new task..."
- Green "Add Task" button
- Clears after submit

Validation:
- Title required

---

### Feature 2: Daily Task View

- Show tasks due today
- Sorted by priority then time
- Clean list with checkbox

---

### Feature 3: Task Completion

- Mark complete
- Moves to completed section
- Faded + strikethrough

---

### Feature 4: Weekly View

- Tasks grouped Mon–Sun
- Simple stacked layout

---

### Feature 5: Job / Client Association

Optional fields:
- Job Name
- Client Name
- Location

---

### Feature 6: Recurring Tasks

- Daily / Weekly repeat
- Auto-generate future tasks

---

### Feature 7: Notes

- Add notes to each task
- Editable updates

---

## 4. Tech Stack

- Next.js (React)
- Supabase or SQLite
- Vercel hosting

---

## 5. Testing

- Task creation works and persists
- Daily view accurate
- Completion works
- Weekly grouping correct
- Recurring tasks function

---

## 6. Build Order

1. Task Creation
2. Daily View
3. Task Completion
4. Weekly View
5. Job Association
6. Recurring Tasks
7. Notes

---

## 7. Done When

- Tasks added in <5 seconds
- Works on mobile
- No data loss
