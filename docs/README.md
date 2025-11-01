# AkiSpot Product Documentation

プロダクト開発に関する正本ドキュメントを格納します。ファイル名は英語（kebab-case）、本文は日本語です。

## 目次

- **計画**
  - **[開発計画](DEVELOPMENT_PLAN.md)**
- **プロダクト (`product/`)**
  - [README](product/README.md)
  - [vision.md](product/vision.md)
  - [roadmap.md](product/roadmap.md)
- **エンジニアリング (`engineering/`)**
  - [README](engineering/README.md)
  - アーキテクチャ: [architecture/](engineering/architecture/)
  - API: [api/](engineering/api/)
  - フロントエンド: [frontend/](engineering/frontend/)
  - バックエンド: [backend/](engineering/backend/)
  - データベース: [database/](engineering/database/)
  - テスト: [testing/](engineering/testing/)
  - ガイドライン: [guidelines/](engineering/guidelines/)
  - コーディング規約: [conventions/](engineering/conventions/)
- **プロセス (`process/`)**
  - [README](process/README.md)
  - [development-process.md](process/development-process.md)
- **手順 (`howto/`)**
  - [README](howto/README.md)
  - [cursor.md](howto/cursor.md)
  - [review.md](howto/review.md)
- **Epics (`epics/`)**
  - [README](epics/README.md)
  - [task-ideas/](epics/task-ideas/) - epic に紐づかないタスク
  - [todo/](epics/todo/) - アクティブな epic
  - [done/](epics/done/) - 完了した epic
  - [wip/](epics/wip/) - 進行中の epic
- **ADR (`adr/`)**
  - [README](adr/README.md)
  - [adr-template.md](adr/adr-template.md) - ADR 作成時の雛形

## テンプレート
- [doc-template.md](doc-template.md) - 一般的なドキュメント用（docs/ 直下）
- [epic-template.md](epics/templates/epic-template.md) - epic 用（docs/epics/templates/）
- [task-template.md](epics/templates/task-template.md) - タスク用（docs/epics/templates/）
- [commit-message-template.md](engineering/guidelines/commit-message-template.md) - コミットメッセージ用（docs/engineering/guidelines/）

## デザイン資料

デザインは独立ディレクトリで管理します: [design/](../design/)

---

この `docs/` 配下がドキュメントの正本です。Cursor ルールは `@docs/...` で本ドキュメントを参照します。

