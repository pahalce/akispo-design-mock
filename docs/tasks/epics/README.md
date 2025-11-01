# Epics

エピックは複数タスクを束ねるハブです。各 epic は独立したディレクトリとして管理されます。

## 構造

```
epics/
  epic-list/                 # epic のリスト
    yyyyMMdd-{epic-title}/   # アクティブな epic
      README.md               # epic の説明ファイル
      tasks/                  # タスクディレクトリ
        task-*.md            # タスクファイル（初期状態）
        wip/                 # 進行中のタスク
        done/                # 完了したタスク
        cancelled/           # キャンセルしたタスク
    done/                    # 完了した epic
    wip/                     # 進行中の epic（必要に応じて）
    cancelled/               # キャンセルした epic（必要に応じて）
  epic-template.md           # epic 作成時の雛形
```

## 運用

- epic ディレクトリ名は `yyyyMMdd-{epic-title}` 形式（例: `20251101-docs-operations`）
- epic は `epic-list/` ディレクトリ内に配置
- epic の説明は `README.md` として配置
- epic に紐づくタスクは `tasks/` ディレクトリ内に配置
- タスクの状態はディレクトリ移動で表現（`tasks/` 直下 → `tasks/wip/` → `tasks/done/` または `tasks/cancelled/`）
- epic 自体が完了したら、epic ディレクトリごと `epic-list/done/` に移動
- epic に紐づかないタスクは `docs/tasks/backlog/` に配置
