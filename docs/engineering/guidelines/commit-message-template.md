# <type>(<scope>)!: <summary (<=50 chars, imperative, no period)>

## Body (wrap at ~72 cols)
Why:
- <why this change is needed>

What/How:
- <created/updated/removed> <what> to <purpose>
- <how it was done> (e.g., referential rules via @docs/..., removed duplication)
- <details that are not obvious from the diff: structure, naming, decisions>

## Footer (optional)
Refs: <links or issue IDs>
Closes: <issue IDs>
Co-authored-by: Name <email>
BREAKING CHANGE: <impact and migration>

---
Types: feat | fix | docs | style | refactor | perf | test | build | ci | chore | revert
Notes:
- Use imperative for summary (e.g., "add", "fix") and keep it <= 50 chars.
- Separate summary / body / footer with blank lines; wrap body lines at ~72 chars.
- Prefer explaining "why" before "what"; list key changes as bullets with concrete actions.
- Go beyond filenames: mention intent, structure, and important details not obvious from the diff.
