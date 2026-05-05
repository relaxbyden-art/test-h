# HashHedge Tilda export

## Best deployment path

Upload the whole `dist` folder to a static host with stable HTTPS:

- GitHub Pages: simplest free option, fine for this site size.
- Cloudflare Pages: also simple, usually faster globally.
- Bunny CDN / Cloudflare R2: better if traffic grows and image delivery matters.

After upload, put this into Tilda T123 / HTML element:

```html
<div id="hashhedge-root"></div>
<script src="https://YOUR_GITHUB_PAGES_URL/hashhedge-loader.js"></script>
```

Replace `https://YOUR_GITHUB_PAGES_URL/` with the public URL where this `dist` folder is hosted.

## Files

- `hashhedge-loader.js` injects the static page markup and automatically loads `hashhedge.css`.
- `hashhedge.css` contains all visual styles and responsive rules.
- `assets/`, `img/`, `uploads/` contain images used by the page.
- `hashhedge-static.html` is a local full-page preview.
- `tilda-snippet.html` is the fully inline version. Use it only if Tilda accepts a large paste.
- `tilda-loader-snippet.html` is the tiny production snippet.

## Rebuild

From the project root:

```bash
node scripts/export-static.cjs
```

To generate inline HTML with absolute asset URLs:

```bash
ASSET_BASE_URL="https://example.com/hashhedge" node scripts/export-static.cjs
```
