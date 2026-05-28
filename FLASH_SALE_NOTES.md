# Flash Sale Playbook

This file is the handoff note for future agents working on HashHedge promos.

## Current Promo Snapshot

- Promo name: **Flash Sale 200K**
- Promo type: Flash Sale
- Discount: 25%
- Promo code: `8472XPQ1`
- Timer end: May 29, 2026, 23:59 Dubai time (UTC+4)
- Promo account sizes: `$100,000`, `$150,000`, `$200,000`
- Pre-promo rollback tag: `pre-flash-sale-2026-05-27`
- Pre-promo commit (last good landing before any Flash Sale work): `8bb24df`
  - Parent of `bd55dc6 Add K plan + Flash Sale badges to pricing table` (first promo commit).
  - Note: `0683683` in older notes pointed mid-way through the promo — keep `8bb24df` as the canonical rollback reference for this landing iteration.

The rollback tag is pushed to GitHub. Use it as the clean reference for the site before this promo.

## Active Files

- `hashhedge-react-app.js` — English page app, pricing, popup.
- `hashhedge-react-app-ru.js` — Russian page app, pricing, popup.
- `hashhedge-react.css` — shared popup/timer/card styling.

Do not edit `old/`. Do not use archived previews as source.

## What The Promo Changes

Pricing:

- Adds `$200,000` account size.
- Marks `$100,000`, `$150,000`, `$200,000` as `FLASH SALE`.
- Shows original price with strikethrough.
- Shows discounted price at 25% off.
- Uses discounted price in the summary calculation per `$1,000` capital.
- Removes the normal `POPULAR` / `ПОПУЛЯРНЫЙ` treatment from promo cards.

Popup:

- Replaces the normal dashboard popup with a Flash Sale popup.
- Shows badge `FLASH SALE`.
- Shows promo title, timer, promo code, and three promo cards.
- Uses shared CSS classes: `.hh-popup-*`, `.hh-fs-*`, `.hh-mobile-sale-price`.

## Current English Popup Text

Title:

```text
25% OFF Hash Hedge Challenges
```

Subtitle:

```text
Only 200 vouchers. Limited offer.
```

Timer label:

```text
Sale ends in:
```

Promo code label:

```text
Promo code:
```

Bottom disclaimer:

```text
The promotion ends when the timer runs out or when all vouchers are gone.
```

## Current Russian Popup Text

Title:

```text
Скидка 25% на челленджи Hash Hedge
```

Subtitle:

```text
Только 200 ваучеров. Предложение ограничено.
```

Timer label:

```text
До конца акции:
```

Promo code label:

```text
Промокод:
```

Bottom disclaimer:

```text
Акция останавливается, когда истекает таймер или заканчиваются все ваучеры.
```

## How To Modify This Promo

1. Start from `origin/main`.
2. Edit the active app file for the needed language:
   - EN: `hashhedge-react-app.js`
   - RU: `hashhedge-react-app-ru.js`
3. Search for `function Pricing()` and `function PromoPopup()`.
4. Update only the promo fields needed:
   - `flashSizes`
   - `pricing`
   - `paymentLinks`
   - popup `cards`
   - popup title/subtitle/disclaimer
   - timer `END`
5. Run:

```bash
node --check hashhedge-react-app.js
node --check hashhedge-react-app-ru.js
git diff --check
```

Run only the relevant `node --check` if you changed one app file.

## How To End The Promo

Preferred approach:

1. Use `pre-flash-sale-2026-05-27` as the exact pre-promo reference.
2. Revert promo changes from active files by comparing current `main` with that tag.
3. Preserve unrelated changes made after the promo started.

Useful commands:

```bash
git diff pre-flash-sale-2026-05-27 -- hashhedge-react-app.js hashhedge-react-app-ru.js hashhedge-react.css
```

Then manually remove only promo-specific changes. Do not blindly reset the repo unless the user explicitly asks for a full rollback.

Fast full rollback reference, only if explicitly requested:

```bash
git checkout pre-flash-sale-2026-05-27 -- hashhedge-react-app.js hashhedge-react-app-ru.js hashhedge-react.css
```

After rollback or promo edits, commit and push to `origin/main`.

## How To Reuse Promo Changes Later

If a future promo needs to start from the current flash-sale structure:

1. Search for `FLASH SALE` in EN/RU app files.
2. Copy the current `Pricing()` promo pieces and `PromoPopup()` structure.
3. Change only copy, dates, discount, product links, and affected account sizes.
4. Create a new pre-promo tag before the new campaign starts, for example:

```bash
git tag pre-summer-sale-2026 <current-clean-commit>
git push origin pre-summer-sale-2026
```

That tag becomes the rollback point for that new campaign.


## Recent Work Log — Flash Sale 200K iteration

Below is a log of work done on top of `bd55dc6` (first Flash Sale commit) during the Flash Sale 200K campaign rollout.

### Promo content changes

- Added `$200,000` plan (price `$1,293`, 25% off → sale `$969.75`).
- Specific payment-form URL for `$200,000` plan (RU+EN, pricing card + popup):
  - EN: `https://app.hashhedge.com/en/app/payment-form/982b97fd-4431-456e-99b0-7dfb1ec4d68b`
  - RU: `https://app.hashhedge.com/ru/app/payment-form/982b97fd-4431-456e-99b0-7dfb1ec4d68b`
- Landing copy: replaced `$150K` / `$150,000` references with `$200K` / `$200,000` in marketing copy across hero, HowItWorks, WhyUs intro, BlueprintSection, footer (RU+EN). Certificates and Flash Sale popup card data were **not** touched.

### Mobile-layout fixes

- Markets/assets slider on mobile (PromoBanner with `data-mobile-h-scroll`) was broken by the global `grid-template-columns: repeat(4,1fr)` rule introduced for Pricing tab pickers. Scoped the rule to `#pricing [data-mobile-h-scroll]` so the markets rail keeps `display: flex; overflow-x: auto`.
- Hero subtitle accent spans (`160+ криптопар`, `10+ TradFi-активов`) were overflowing mobile viewport because of inline `whiteSpace: nowrap`. Added `className: hh-hero-num` and CSS override:
  ```css
  @media (max-width: 640px) { .hh-hero-num { white-space: normal !important; } }
  ```
- Reviews-section `h2.h1 br` was hidden on mobile, causing "фондирование" + "Отзывы на Trustpilot" to glue together. Changed to `display: block !important`.
- Hid featured event prize badge (`hh-event-prize-badge`) on mobile — prize amount is already in the blurb below the photo.
- Mobile certificates marquee: collapsed two rows into one (`MobileCertMarquee` now renders all certs in a single ribbon).
- Hid the "Выборка из 17,800+ payouts" sample caption (`.hh-payout-sample`) on mobile.

### Lots of copy edits (RU)

Hero, HowItWorks (eyebrows/titles/descriptions), Pricing tagline + 6 rule tooltips, WhyUs intro + all 8 cards, Payouts texts, "Выплачено за" → "география выплат", certificates rendered in Russian (`Счёт` label, abbreviated Russian month names), Reviews heading/disclaimer/Trustpilot button, YouTube intro, Events intro with yellow Telegram link, Support cards/intro/stat, BigCTA eyebrow + subtitle removal, Pricing mobile `accountNotes` removed, `Разовая плата за челлендж` → `Стоимость`. See git log of commits `3b18f8b…f13b409` for the precise diff list.

### Critical CSS rule we added (do not delete)

Global override that lets inline accent-coloured links beat the `a { color: inherit !important; }` rule in the cascade:

```css
#hashhedge-root .tilda-html-hashhedge a[style*="--accent"] { color: var(--accent) !important; }
```

Without this rule, every `style={{ color: "var(--accent)" }}` on `<a>` tags in the React app silently falls back to inherited colour (white-ish) on the Tilda site.

### Snippet pinning

`tilda-react-snippet.html` and `tilda-react-snippet-ru.html` always contain the deployed SHA in two places:

1. `<link rel="preload" ... href=".../hash-hedge@<SHA>/..." >` — purely a hint, does not control loading.
2. `var HH_COMMIT = "<SHA>"` inside the inline `<script>` — **this is the actual SHA used at runtime**.

When bumping the snippet, both must update. The runtime `HH_COMMIT` is the one that matters; if only the preload line is changed, the site keeps loading the old SHA.

Most recent pinned SHA at the time of writing: `f13b409`.
