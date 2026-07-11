#!/usr/bin/env node
// keyword-engine.mjs — SemRush CSV → prioritized fast-rank keyword queue.
//
// WHY: the SemRush data shows the winners rank on low-difficulty local long-tail
// (KD < 20, [service] + [modifier] + [city / "near me"]). This turns raw SemRush
// exports into a ranked backlog the SEO skill works top-down — always attacking the
// lowest-difficulty uncovered keyword first, which is the fastest path onto page 1.
//
// USAGE:  node scripts/keyword-engine.mjs
// INPUT:  content/SEO-BLOG/keyword-data/*.csv   (SemRush Keyword Magic Tool and/or
//         Organic Positions exports — drop as many as you like)
// OUTPUT: content/SEO-BLOG/keyword-queue.json   (ranked; Tier A first)
//
// The engine is repo-agnostic: it reads service slugs from src/data/services.ts and
// the already-covered keywords/cities from content/SEO-BLOG/content-registry.json,
// so the identical file works for Paul Lally's Masonry and Emerald Masonry.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = path.join(ROOT, "content/SEO-BLOG/keyword-data");
const REGISTRY = path.join(ROOT, "content/SEO-BLOG/content-registry.json");
const SERVICES_TS = path.join(ROOT, "src/data/services.ts");
const OUT = path.join(ROOT, "content/SEO-BLOG/keyword-queue.json");

// Broad Chicagoland suburb list for city detection (shared metro for both masonry
// brands). Longest match wins so "Orland Park" beats "Orland". Extend freely.
const CHICAGOLAND_CITIES = [
  "Chicago", "Palos Heights", "Palos Park", "Palos Hills", "Oak Lawn", "Oak Forest",
  "Orland Park", "Orland Hills", "Tinley Park", "Homer Glen", "Evergreen Park",
  "Hickory Hills", "Burbank", "Bridgeview", "Chicago Ridge", "Worth", "Mokena",
  "New Lenox", "Frankfort", "Lemont", "Hinsdale", "La Grange", "Downers Grove",
  "Naperville", "Oak Brook", "Elmhurst", "Berwyn", "Cicero", "Oak Park", "Riverside",
  "Brookfield", "Countryside", "Willow Springs", "Justice", "Summit", "Alsip",
  "Blue Island", "Crestwood", "Midlothian", "Oak Lawn", "Beverly", "Mount Greenwood",
  "Mt Greenwood", "Morgan Park", "Lockport", "Joliet", "Plainfield", "Bolingbrook",
  "Woodridge", "Lisle", "Westmont", "Clarendon Hills", "Western Springs", "Lombard",
  "Villa Park", "Wheaton", "Glen Ellyn", "Tinley", "Palos", "Lansing", "Homewood",
  "Flossmoor", "Olympia Fields", "Park Forest", "Matteson", "Country Club Hills",
  "Hazel Crest", "Markham", "Harvey", "Dolton", "Riverdale", "Calumet City",
].filter((v, i, a) => a.indexOf(v) === i);

// ---- tiny robust CSV parser (handles quotes, embedded commas/newlines) ----
function parseCSV(text) {
  // auto-detect delimiter from the header line
  const firstLine = text.slice(0, text.indexOf("\n"));
  const delim = (firstLine.match(/;/g) || []).length > (firstLine.match(/,/g) || []).length ? ";" : ",";
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === delim) { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      if (field !== "" || row.length) { row.push(field); rows.push(row); row = []; field = ""; }
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// map varied SemRush header names → canonical keys
function headerIndex(header) {
  const idx = {};
  header.forEach((h, i) => {
    const k = h.trim().toLowerCase();
    if (k === "keyword" || k === "keywords") idx.keyword ??= i;
    else if (k.startsWith("intent")) idx.intent ??= i;
    else if (k === "volume" || k === "search volume") idx.volume ??= i;
    else if (k.includes("difficulty") || k === "kd" || k === "kd %" || k === "kd%") idx.kd ??= i;
    else if (k === "cpc" || k.startsWith("cpc")) idx.cpc ??= i;
    else if (k === "position" || k === "pos") idx.position ??= i;
    else if (k === "url") idx.url ??= i;
    else if (k.startsWith("serp")) idx.serp ??= i;
  });
  return idx;
}

function num(v) {
  if (v == null) return null;
  const n = parseFloat(String(v).replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(n) ? n : null;
}
function norm(s) { return String(s || "").toLowerCase().replace(/\s+/g, " ").trim(); }

// intent priority for tie-breaking: commercial/transactional convert → rank them first
const INTENT_RANK = { commercial: 0, transactional: 1, c: 0, t: 1, navigational: 2, n: 2, informational: 3, i: 3 };
function intentScore(intent) {
  const k = norm(intent).split(/[,;/]/)[0].trim();
  return INTENT_RANK[k] ?? 2.5;
}

// ---- load repo context (services + already-covered keywords) ----
function loadServices() {
  const out = [];
  if (!fs.existsSync(SERVICES_TS)) return out;
  const src = fs.readFileSync(SERVICES_TS, "utf8");
  const re = /slug:\s*"([^"]+)"[\s\S]{0,400}?(?:title|name):\s*"([^"]+)"/g;
  let m;
  const seen = new Set();
  while ((m = re.exec(src))) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    out.push({ slug: m[1], name: m[2] });
  }
  return out;
}

function loadCovered() {
  if (!fs.existsSync(REGISTRY)) return new Set();
  try {
    const r = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
    return new Set((r.coveredKeywords || []).map(norm));
  } catch { return new Set(); }
}

function detectCity(keyword) {
  const kw = " " + keyword.toLowerCase() + " ";
  let best = "";
  for (const c of CHICAGOLAND_CITIES) {
    const re = new RegExp("\\b" + c.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b");
    if (re.test(kw) && c.length > best.length) best = c;
  }
  return best;
}

// derive service tokens from slug words + a few masonry synonyms
function buildServiceMatchers(services) {
  const SYN = {
    tuckpointing: ["tuckpointing", "tuck pointing", "repointing", "mortar joint", "mortar repair"],
    "brick-repair": ["brick repair", "brick repointing", "brickwork"],
    "brick-replacement": ["brick replacement", "replace brick"],
    "chimney-repair": ["chimney repair", "chimney rebuild", "chimney"],
    "lintel-replacement": ["lintel"],
    "lintel-repair": ["lintel"],
    "parapet-wall-repair": ["parapet"],
    "foundation-masonry-repair": ["foundation"],
    "limestone-sill-repair": ["limestone", "sill"],
    caulking: ["caulking", "sealant", "joint seal"],
    waterproofing: ["waterproofing", "sealing", "efflorescence"],
    "masonry-sealing": ["sealing", "masonry seal"],
    "masonry-restoration": ["masonry restoration", "restoration"],
    "commercial-masonry-restoration": ["commercial masonry", "commercial restoration"],
    "residential-masonry-restoration": ["residential masonry"],
    "historic-masonry-restoration": ["historic"],
    commercial: ["commercial masonry", "commercial"],
    "cmu-block-repair": ["cmu", "block repair", "concrete block"],
  };
  return services.map((s) => {
    const tokens = new Set([
      ...(SYN[s.slug] || []),
      s.slug.replace(/-/g, " "),
      ...s.name.toLowerCase().replace(/&/g, " ").split(/\s+/).filter((w) => w.length > 3),
    ]);
    return { slug: s.slug, name: s.name, tokens: [...tokens] };
  });
}

function detectService(keyword, matchers) {
  const kw = keyword.toLowerCase();
  let best = null, bestLen = 0;
  for (const m of matchers) {
    for (const t of m.tokens) {
      if (t && kw.includes(t) && t.length > bestLen) { best = m; bestLen = t.length; }
    }
  }
  return best; // {slug, name} or null
}

function detectPageType(keyword) {
  const k = keyword.toLowerCase();
  if (/\b(vs|versus|or)\b/.test(k)) return "comparison";
  if (/^(how|what|why|when|should|do|does|is|are|can)\b/.test(k) || /\bcost|price|estimate\b/.test(k)) return "decision";
  return "location";
}

// ---- main ----
function main() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    console.log(`Created ${path.relative(ROOT, DATA_DIR)}. Drop SemRush CSV exports here and re-run.`);
    return;
  }
  const csvFiles = fs.readdirSync(DATA_DIR).filter((f) => f.toLowerCase().endsWith(".csv"));
  if (!csvFiles.length) {
    console.log(`No CSVs in ${path.relative(ROOT, DATA_DIR)}. Export SemRush keywords there and re-run.`);
    return;
  }

  const services = loadServices();
  const matchers = buildServiceMatchers(services);
  const covered = loadCovered();

  const byKeyword = new Map(); // dedupe across files, keep richest row
  for (const file of csvFiles) {
    const text = fs.readFileSync(path.join(DATA_DIR, file), "utf8");
    const rows = parseCSV(text);
    if (rows.length < 2) continue;
    const idx = headerIndex(rows[0]);
    if (idx.keyword == null) { console.warn(`Skipping ${file}: no Keyword column`); continue; }
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      const keyword = (row[idx.keyword] || "").trim();
      if (!keyword) continue;
      const key = norm(keyword);
      const rec = {
        keyword,
        kd: idx.kd != null ? num(row[idx.kd]) : null,
        volume: idx.volume != null ? num(row[idx.volume]) : null,
        intent: idx.intent != null ? (row[idx.intent] || "").trim() : "",
        cpc: idx.cpc != null ? num(row[idx.cpc]) : null,
        position: idx.position != null ? num(row[idx.position]) : null,
        source: file,
      };
      const prev = byKeyword.get(key);
      // prefer the row that actually carries a KD value, else the first seen
      if (!prev || (prev.kd == null && rec.kd != null)) byKeyword.set(key, rec);
    }
  }

  const entries = [];
  for (const rec of byKeyword.values()) {
    const isCovered = covered.has(norm(rec.keyword));
    const kd = rec.kd == null ? 50 : rec.kd; // unknown difficulty treated as mid/hard
    const tier = kd < 20 ? "A" : kd <= 40 ? "B" : "C";
    const svc = detectService(rec.keyword, matchers);
    const city = detectCity(rec.keyword);
    entries.push({
      keyword: rec.keyword,
      kd: rec.kd,
      volume: rec.volume,
      intent: rec.intent,
      tier,
      covered: isCovered,
      service: svc ? svc.name : "",
      serviceSlug: svc ? svc.slug : "",
      city: city ? `${city}, IL` : "",
      pageType: detectPageType(rec.keyword),
      // fast-rank score: KD asc dominates, then higher volume, then better intent
      _score: kd * 1000 - Math.min(rec.volume ?? 0, 5000) / 10 + intentScore(rec.intent),
    });
  }

  entries.sort((a, b) => a._score - b._score);
  entries.forEach((e) => delete e._score);

  const uncovered = entries.filter((e) => !e.covered);
  const out = {
    generatedAt: new Date().toISOString().slice(0, 10),
    sources: csvFiles,
    totals: {
      keywords: entries.length,
      uncovered: uncovered.length,
      tierA_uncovered: uncovered.filter((e) => e.tier === "A").length,
      tierB_uncovered: uncovered.filter((e) => e.tier === "B").length,
      tierC_uncovered: uncovered.filter((e) => e.tier === "C").length,
    },
    // the skill consumes `queue` top-down; already-covered kept in `covered` for audit
    queue: uncovered,
    covered: entries.filter((e) => e.covered),
  };
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(
    `Wrote ${path.relative(ROOT, OUT)} — ${out.totals.keywords} keywords, ` +
    `${out.totals.uncovered} uncovered (Tier A ${out.totals.tierA_uncovered}, ` +
    `B ${out.totals.tierB_uncovered}, C ${out.totals.tierC_uncovered}). Attack Tier A first.`
  );
}

main();
