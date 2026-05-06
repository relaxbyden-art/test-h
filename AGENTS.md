# HashHedge Site Instructions

- The visual source of truth is the Tilda page at `https://headliners.cc/hashhedge-en`.
- That page embeds the GitHub export with:
  `https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@256aa88/hashhedge-react-loader.js`.
- The working local preview is `preview-local.html` in this folder. Do not use old `dist/` previews from archived folders.
- The active files for page changes are:
  - `hashhedge-react-loader.js`
  - `hashhedge-react-app.js`
  - `hashhedge-react.css`
- The `old/` folder is an archive of outdated local versions. Do not edit or use it as source.
- After pushing changes, update the Tilda embed commit hash if the page still points to a fixed `@<commit>`.
