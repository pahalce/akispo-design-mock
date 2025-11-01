---
id: epic-20251101-docs-operations
title: フェーズ1-2 ドキュメント運用方法の決定
owner: @you
phase: 1.2
links:
  plan: /docs/DEVELOPMENT_PLAN.md
  related: [epic-20251101-docs-structure.md]
---

# フェーズ1-2 ドキュメント運用方法の決定

## 目的
- ドキュメントの更新フロー、レビュープロセス、バージョン管理方針を決定
- 必要に応じてドキュメント管理ツールを選定

## スコープ
- ドキュメント更新フローの定義
- レビュープロセスの定義
- ドキュメント管理ツールの選定（必要に応じて）
- ドキュメントバージョン管理方針
- 空枠ドキュメントの記述（vision.md, roadmap.md, system-architecture.md など）
- Newcomer向けオンボーディング改善（導線整備、読書順序の明確化）

## タスク一覧
- [task-20251101-doc-update-flow](tasks/task-20251101-doc-update-flow.md)
- [task-20251101-doc-review-process](tasks/task-20251101-doc-review-process.md)
- [task-20251101-doc-versioning](tasks/task-20251101-doc-versioning.md)
- [task-20251101-doc-tool-selection](tasks/task-20251101-doc-tool-selection.md)
- [task-20251101-fill-empty-docs](tasks/task-20251101-fill-empty-docs.md)
- [task-20251101-newcomer-onboarding](tasks/task-20251101-newcomer-onboarding.md)

タスクの状態はディレクトリ移動で表現:
- 初期: `tasks/` ディレクトリ直下
- 進行中: `tasks/wip/`
- 完了: `tasks/done/`
- キャンセル: `tasks/cancelled/`

## 成果物
- docs/process/ 配下に運用フロー文書
- レビュープロセス定義（docs/howto/review.md と連携）
- 空枠ドキュメントの記述完了（vision.md, roadmap.md, system-architecture.md, adr/README.md）
- オンボーディングガイド（docs/howto/onboarding.md）
- docs/README.md の「初めての方へ」セクション

## 参照
- docs/engineering/guidelines/code-review.md
- docs/howto/review.md
