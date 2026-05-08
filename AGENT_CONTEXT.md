# HashHedge — Agent Context

Crypto prop trading landing page. React app compiled into a single JS bundle, served via jsDelivr CDN and embedded in Tilda via `<script>` tag.

---

## Repo

```
https://github.com/relaxbyden-art/hash-hedge
```

PAT (for git push):
```
YOUR_GITHUB_PAT_HERE
```

Push with PAT:
```bash
git remote set-url origin https://relaxbyden-art:YOUR_GITHUB_PAT_HERE@github.com/relaxbyden-art/hash-hedge.git
git push origin main
```

---

## Key Files

| File | Purpose |
|------|---------|
| `hashhedge-react-app.js` | Main compiled React bundle (~350 KB). All component logic here. |
| `hashhedge-react.css` | Global CSS overrides. Uses `!important` to override React inline styles. |

**No JSX runtime** — it's raw compiled output. Edit with Python string replacements, not by hand.

---

## Rules

- Work from latest GitHub `main` first: `git fetch origin` + fast-forward before edits.
- **English bundle only** — `hashhedge-react-app.js`. Do NOT touch the Russian bundle.
- **Desktop only** — no mobile layout changes.
- After push, jsDelivr CDN updates in ~5 minutes.

---

## Architecture Notes

### Hook aliases in compiled bundle
```
__useS   = useState   (most components)
_useS    = useState   (some components)
____useS = useState   (FAQ component)
__useE   = useEffect
```

### CSS approach
React inline styles can't be overridden by normal CSS. Use attribute selectors with !important:
```css
[style*="some-property: value"] { override: value !important; }
```

---

## Time-seeded counters

All stats are deterministic (same value for all visitors at the same moment), seeded from fixed dates.

### Payouts / Volume
```js
const BASE_MS = 1704067200000; // 2024-01-01 UTC
const PAYOUT_PER_SEC = 2000 / 86400; // $2,000/day max growth
const secElapsed = (Date.now() - BASE_MS) / 1000;
// base payout: 10_750_000
```

### Trader count (unified across ALL sections)
```js
const _TBASE_MS = 1743465600000; // 2026-04-01 UTC
const TRADERS_PER_SEC = 10 / 86400; // 10 traders/day
const tradersTotal = Math.round(4_750 + Math.max(0, (Date.now() - _TBASE_MS) / 1000) * TRADERS_PER_SEC);
// approx 5,120 on 2026-05-08
```

**Important:** This formula must be identical in all three places:
1. `LivePayoutsTable` (~line 700)
2. `CosmicStatsPanel` (~line 553)
3. `TradingTerminal` (~line 940)

The hero metrics section (`hh-hero-metrics`, ~line 1543) uses a hardcoded `v: 5120` — update manually when formula value drifts significantly.

---

## Completed Work (as of 2026-05-08, commit 1ccf69a)

### Batch 1
- $200,000 replaced with $150,000 everywhere
- Payouts animation: time-seeded, only goes UP, max $2,000/day
- Trader counter: time-seeded, only goes UP, max 10/day
- CSS: section subheading alignment, HowItWorks 3rd block, WhyUs art centering, ArtTickers fade, blur between sections

### Batch 2
- Sparklines: strictly ascending arrays (no drops)
- Trader count unified across all sections (seed: 2026-04-01)
- Telegram community: hardcoded 926 members (was 651)
- Section headers: align-items end (description bottom-aligned with heading)
- WhyUs art: ArtCoins, ArtInfinity, ArtClock, ArtStages — position absolute, centered via translate(-50%,-50%)
- "Where funded traders actually hang out" — "actually" now on same line as "traders"
- EventsTournaments "We show up": 2-column grid layout (heading left, description right)
- PayoutShowcase labels: raised 10px higher; UAE label right-aligned above its dot (textAnchor end)

### Earlier GitHub-only updates now in `main`
- Promo popup added: countdown, backdrop/swipe close, compact mobile state.
- Popup art/title/timer refined; profit split art border restored, internal rect layers removed.
- Mobile fixes touched hero chart, FAQ spacing, footer, stats, section gaps.

### 2026-05-08 follow-up
- Desktop WhyUs art scenes centered by overriding `.hh-why-art-stage` inset to `0` and glow top to `50%`.
- Desktop section edges softened globally with inset blend shadows on top-level sections.

---

## Pending / Known Issues

Nothing currently tracked. Ask the user what to work on next.

---

## Typical Workflow

```bash
# 1. Clone fresh
git clone https://relaxbyden-art:PAT@github.com/relaxbyden-art/hash-hedge.git /tmp/gh-push
cd /tmp/gh-push

# 2. Edit with Python
python3 << 'EOF'
content = open('hashhedge-react-app.js').read()
content = content.replace('OLD', 'NEW')
open('hashhedge-react-app.js', 'w').write(content)
EOF

# 3. Verify
python3 -c "
content = open('hashhedge-react-app.js').read()
print('OK' if 'NEW' in content else 'MISSING')
"

# 4. Deploy
git add hashhedge-react-app.js hashhedge-react.css
git commit -m "describe change"
git push origin main
```
