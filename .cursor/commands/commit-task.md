# /commit-task — 規約準拠コミット（改行保持）

このコマンドは、タスク完了時にコミットメッセージをテンプレに差し込み、プレビューの上で改行を保持して安全にコミットします。

参照（正本）:
- @docs/engineering/guidelines/commit-convention.md
- @docs/templates/commit-message-template.md

## 入力
- type: feat | fix | docs | refactor | test | chore | build | ci | perf | style | revert
- scope: 任意（kebab-case）
- summary: 命令形・<= 50 文字・末尾に句点なし
- why: 箇条書き（1〜3 行）
- changes (What/How): 箇条書き（1〜5 行、ファイル名だけでなく具体的な作業内容を含める）
- footer（任意）: Refs / Closes / Co-authored-by / BREAKING CHANGE

## フロー
1. 入力値が足りない場合は対話で補完し、テンプレへ差し込む。
2. プレビューを表示（summary / body / footer を空行で区切り、本文は ~72 桁で折り返し）。
3. 承認後、改行を保持するため一時ファイルに書き出して `git commit -F` を実行する。

## 実行手順（内部で実行）
```bash
git add -A
cat > .git/COMMIT_MSG <<'MSG'
<type>(<scope>)!: <summary>

Why:
- <why line 1>
- <why line 2>

What/How:
- <created/updated/removed> <what> to <purpose>
- <how it was done / important details not obvious from diff>

Refs: <links>
# Closes: <issue IDs>
# Co-authored-by: Name <email>
# BREAKING CHANGE: <impact and migration>
MSG

git commit -F .git/COMMIT_MSG && rm .git/COMMIT_MSG
```

## 注意事項
- summary / body / footer の間には必ず空行を入れること。
- 本文は「Why を先に、次に What/How」を推奨。可読性のため ~72 桁で改行。

