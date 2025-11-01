# Epics

エピックは複数タスクを束ねるハブです。各 epic は独立したディレクトリとして管理されます。

## 構造

```
epics/
├── README.md                    # このファイル
├── task-ideas/                  # epic に紐づかないタスク
├── templates/                   # テンプレート
│   ├── epic-template.md         # epic 作成時の雛形
│   └── task-template.md         # タスク作成時の雛形
├── todo/                        # アクティブな epic（並列）
│   └── yyyyMMdd-{epic-title}/
│       ├── epic-description.md  # epic の説明
│       └── tasks/                # タスクディレクトリ
│           ├── todo/
│           │   └── YYYYMMDD-*.md    # タスクファイル（初期状態）
│           ├── wip/              # 進行中のタスク
│           └── done/             # 完了したタスク
├── done/                        # 完了した epic（並列）
│   └── yyyyMMdd-{epic-title}/
│       ├── epic-description.md
│       └── tasks/
│           ├── todo/
│           ├── wip/
│           └── done/
└── wip/                         # 進行中の epic（並列、必要に応じて）
    └── yyyyMMdd-{epic-title}/
        ├── epic-description.md
        └── tasks/
            ├── todo/
            ├── wip/
            └── done/
```

## 運用

- epic ディレクトリ名は `yyyyMMdd-{epic-title}` 形式（例: `20251101-docs-operations`）
- epic の説明は `epic-description.md` として配置
- epic に紐づくタスクは `tasks/` ディレクトリ内に配置
- タスクの状態はディレクトリ移動で表現（`tasks/todo/` → `tasks/wip/` → `tasks/done/`）
- epic 自体の状態はディレクトリ移動で表現（`todo/` → `wip/` → `done/`）
- epic に紐づかないタスクは `task-ideas/` に配置
