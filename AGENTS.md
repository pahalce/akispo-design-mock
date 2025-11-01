# AkiSpot プロジェクト方針

## プロジェクト概要

「今すぐ座れる場所」を直感的に見つけられるモバイルアプリ「AkiSpot」のHTMLデザインモックアップ。

## デザインコンセプト

- **遊び心のあるスタイリッシュさ**
- **画像強調・最小情報**
- **モバイルファースト**

## コーディング方針

### 1. Tailwind utility-firstの徹底

- カスタムCSSは最小限に
- 要素セレクタへの直接スタイル適用は禁止
- Tailwindデフォルトを最大限活用

### 2. デザイントークンの一貫性

- プロジェクト固有の色のみ`design-tokens.css`に定義
- spacing, fontSize等はTailwindデフォルトを使用
- アイコンサイズは専用クラス（icon-sm, icon-lg等）を使用

### 3. ドキュメントのメンテナンス

- `design-tokens.css`や`tailwind-config.js`を変更したら必ず対応するドキュメントも更新
- 再利用可能なパターンは`docs/specs/design/design-system.md`に記載

### 4. HTMLファイルの基本

- bodyタグには必ず基本クラスを適用
- headセクションでデザイントークンを読み込む: `design-tokens.css` → `tailwind-config.js`
- Material Symbolsアイコンは`text-*`ではなく専用クラスでサイズ指定

## ファイル構成

```
akispo/
├── design-tokens.css       # プロジェクト固有のトークン
├── tailwind-config.js      # Tailwind拡張設定
├── *.html                  # ページファイル
├── .cursor/rules/          # プロジェクトルール
└── docs/specs/design/
    ├── design-system.md    # デザインシステム全体
    └── design-tokens.md    # 実装ガイド
```

## 参考ドキュメント

**具体的な値や実装方法は以下のドキュメントを参照：**

- **[デザインシステム](docs/specs/design/design-system.md)** - カラーパレット、タイポグラフィ、アイコンサイズ、コンポーネントパターン
- **[デザイントークン実装ガイド](docs/specs/design/design-tokens.md)** - CSS変数の使用方法、具体的な値、コード例
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - Tailwindデフォルトトークン
