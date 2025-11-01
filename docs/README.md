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
- **タスク管理 (`tasks/`)**
  - [README](tasks/README.md)
  - 状態: [backlog/](tasks/backlog/) → [wip/](tasks/wip/) → [done/](tasks/done/)（または [cancelled/](tasks/cancelled/)）
- **ADR (`adr/`)**
  - [README](adr/README.md)
- **テンプレート (`templates/`)**
  - [README](templates/README.md)

## デザイン資料

デザインは独立ディレクトリで管理します: [design/](../design/)

---

この `docs/` 配下がドキュメントの正本です。Cursor ルールは `@docs/...` で本ドキュメントを参照します。

