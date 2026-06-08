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

## CRITICAL: push verification rule (added 2026-06-08)

Some agent sandboxes (Claude Code in particular) have GitHub blocked at the proxy layer:
`HTTP 403 — X-Proxy-Error: blocked-by-allowlist`. In that case `git push origin main` silently fails — the local commit is created but never reaches `origin/main`. This caused several "white screen" incidents where the user got a Tilda snippet pointing to a SHA that didn't exist on GitHub.

Rules going forward:

1. **Never claim the push succeeded** just because `git push` returned without an explicit error message. The exit code alone is not proof of success in sandboxes.
2. **Before giving any Tilda snippet, verify the SHA is reachable** on both GitHub and jsDelivr:
   - `https://raw.githubusercontent.com/relaxbyden-art/hash-hedge/<SHA>/hashhedge-react-loader-affiliate-ru.js` must return 200 with content
   - `https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@<SHA>/hashhedge-react-loader-affiliate-ru.js` must return 200 with content
   - Verify via the `mcp__workspace__web_fetch` tool (it has network access where bare `git push` does not).
3. **If push from the sandbox is blocked**, finish the report with this exact wording instead of "запушил":
   > Я сделал локальные коммиты, но не могу пушить из-за GitHub 403 в песочнице. Попроси Codex запушить main и дать финальный Tilda snippet с актуальным SHA.
4. **Codex has working push** (via `git -c http.postBuffer=157286400 push https://<user>:<PAT>@github.com/relaxbyden-art/hash-hedge.git main`). When push is needed, defer to Codex.
5. **Never put the user's PAT into any file or commit.** Use only the in-memory inline form when documenting the command.
