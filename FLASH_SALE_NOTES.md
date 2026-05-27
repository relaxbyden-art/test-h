# Flash Sale Playbook

This file is the handoff note for future agents working on HashHedge promos.

## Current Promo Snapshot

- Promo type: Flash Sale
- Discount: 25%
- Promo code: `8472XPQ1`
- Timer end: May 29, 2026, 23:59 Dubai time (UTC+4)
- Promo account sizes: `$100,000`, `$150,000`, `$200,000`
- Pre-promo rollback tag: `pre-flash-sale-2026-05-27`
- Pre-promo commit: `0683683`

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
