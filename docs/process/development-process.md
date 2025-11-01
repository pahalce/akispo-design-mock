# 開発プロセス

## 規約の継続改善（Conventions Improvement Loop）

1. 実装終了 → 言語別レビュー: 対象言語のルール（例: `review-typescript`）を読み込み、
   共通 + 言語別チェックリストでレビューする。
2. 不足・曖昧な点をタスク化: `docs/tasks/backlog/` にチケットを追加（`task-template.md` 使用）。
3. 規約更新の実装: `docs/engineering/conventions/...` を PR で更新。影響が大きい場合は ADR も追加。
4. 運用文書更新: 必要に応じて `docs/howto/review.md` を更新し、レビューフローに反映。
5. 定期棚卸し: 四半期ごとに `conventions` とチェックリストを見直し、冗長/重複を整理。

## ブランチ/コミット/レビューの基本
- ブランチ戦略: `docs/engineering/guidelines/branching-strategy.md`
- コードレビュー: `docs/engineering/guidelines/code-review.md`
- コミット規約: `docs/engineering/guidelines/commit-convention.md`
