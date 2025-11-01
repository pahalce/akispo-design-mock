# Tasks

タスクは 1 ファイル = 1 チケットで管理します。命名例: `task-YYYY-MM-DD-short-title.md`。

## タスクの分類

### Epic に紐づくタスク
epic に紐づくタスクは epic ディレクトリ内の `tasks/` で管理します:
- epic ディレクトリ名: `yyyyMMdd-{epic-title}` 形式（例: `20251101-docs-operations`）
- epic の説明: `README.md` として配置
- 初期状態: `epics/yyyyMMdd-{epic-title}/tasks/` 直下
- 進行中: `epics/yyyyMMdd-{epic-title}/tasks/wip/`
- 完了: `epics/yyyyMMdd-{epic-title}/tasks/done/`
- キャンセル: `epics/yyyyMMdd-{epic-title}/tasks/cancelled/`

### Epic に紐づかないタスク
epic に紐づかないタスクは `backlog/` で管理します（後で epic に紐づけることも可能）。

## テンプレート
- [task-template.md](task-template.md) - タスク作成時の雛形
