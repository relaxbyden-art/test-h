# HashHedge Site Instructions

- GitHub `origin/main` is the single source of truth for active work. Local files are only a temporary cache.
- At the start of every task, run `git fetch origin`.
- If the user provides a commit hash as the latest version, start from that exact commit before editing. If no hash is provided, start from `origin/main`.
- Ignore local uncommitted or untracked files unless the user explicitly says to preserve or use them. Do not treat local dirty files as the latest version.
- Every completed change must be committed and pushed to `origin/main`. A change that is not pushed is only a draft and should not be treated as the next source of truth.
- Report the final pushed commit hash to the user.

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
