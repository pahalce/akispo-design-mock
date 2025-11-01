# Cursor の使い方（ルールと参照）

- ルールは `.cursor/rules` に配置します。正本は `docs/` に置き、ルールから `@docs/...` で参照します（重複禁止）。
- ルールの種類: Always / Auto Attached / Agent Requested / Manual（参考: 公式ドキュメント）。
- 新規ルールの作成: Cursor の `New Cursor Rule` から作成し `.cursor/rules` に保存。
- 生成: `/Generate Cursor Rules` を必要時に使用。
- 参照記法: 例 `@docs/templates/adr-template.md`。

参考: https://docs.cursor.com/ja/context/rules
