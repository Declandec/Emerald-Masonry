# Keyword data — SemRush exports go here

Drop SemRush CSV exports into this folder, then run:

```bash
node scripts/keyword-engine.mjs
```

That writes `../keyword-queue.json` — a fast-rank backlog sorted by keyword
difficulty (lowest first). The SEO skill works it top-down, so we always attack
the easiest-to-rank local long-tail keywords first (the play the SemRush data proves).

## What to export
Two exports give the best coverage (add as many CSVs as you like — all are merged):

1. **Keyword Magic Tool** — search a seed like `tuckpointing` (and `brick repair`,
   `chimney repair`, `masonry restoration`), then **Export → CSV**. This is the
   universe of related keywords with Volume + KD %.
2. **Organic Positions of a competitor** (Domain Overview → Organic Research →
   Positions → Export). E.g. a top-ranking local mason. Shows what already ranks
   at low difficulty in our market.

## Columns the engine reads (header names are auto-matched, case-insensitive)
`Keyword`, `Intent`, `Volume` (or `Search Volume`), `Keyword Difficulty` (or `KD %`),
`CPC`, `Position`, `URL`. Extra columns are ignored. Missing KD is treated as hard (50).

Keywords already in `content-registry.json` → `coveredKeywords` are filtered out of
the queue automatically, so you never target the same term twice.
