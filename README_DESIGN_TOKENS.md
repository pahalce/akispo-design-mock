# デザイントークン共通化 - クイックスタート

## 📦 作成したファイル

```
/
├── design-tokens.css          ← プロジェクト固有のトークン（色、アイコン、アニメーション）
├── tailwind-config.js         ← Tailwind拡張設定（最小限）
├── README_DESIGN_TOKENS.md    ← このファイル
└── docs/
    ├── DESIGN_TOKENS_GUIDE.md    ← 詳細な使用ガイド
    └── DESIGN_TOKENS_SUMMARY.md  ← 実装サマリー
```

## 🎯 設計原則

### ✅ やること
1. **Tailwindデフォルトを使う**（spacing, fontSize, colors等）
2. **Utility-Firstを徹底**（クラスでスタイリング）
3. **最小限のカスタマイズ**（プロジェクト固有の色のみ）

### ❌ やらないこと
1. 要素セレクタへの直接スタイル（`body {}`, `a {}`, `button {}`等）
2. 不要なCSS変数の追加
3. Tailwindデフォルトトークンの再定義

## 🚀 使い方

### 1. HTMLのheadに追加

```html
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
  
  <!-- デザイントークン -->
  <link rel="stylesheet" href="design-tokens.css">
  <script src="tailwind-config.js"></script>
</head>
```

### 2. bodyタグにutilityクラスを指定

```html
<body class="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
  <!-- コンテンツ -->
</body>
```

## 🎨 よく使うパターン

### カラー

```html
<!-- プロジェクト固有 -->
<button class="bg-primary hover:bg-primary-hover text-white">
  ボタン
</button>

<!-- Tailwindデフォルト -->
<p class="text-gray-600">サブテキスト</p>
<div class="bg-white border border-gray-200">カード</div>
```

### スペーシング（Tailwindデフォルト）

```html
<div class="p-4">padding: 16px</div>
<div class="mt-6">margin-top: 24px</div>
<div class="flex gap-4">gap: 16px</div>
```

### アイコン

```html
<!-- ナビゲーション（24px） -->
<span class="material-symbols-outlined">home</span>

<!-- アクションボタン（48px） -->
<span class="material-symbols-outlined icon-xl">near_me</span>

<!-- 塗りつぶし -->
<span class="material-symbols-outlined filled">favorite</span>
```

### アニメーション

```html
<div class="animate-fade-in">フェードイン</div>
<div class="animate-slide-up">スライドアップ</div>
<div class="animate-spin">スピナー</div>
```

## ⚠️ よくある間違い

### ❌ ダメな例

```html
<!-- 要素セレクタへのスタイル適用 -->
<style>
  body { background: #F5F5F5; }
  a { color: blue; }
</style>

<!-- カスタムCSS変数の作りすぎ -->
<style>
  :root { --my-spacing: 17px; }
</style>

<!-- text-*でアイコンサイズ指定 -->
<span class="material-symbols-outlined text-3xl">search</span>
```

### ✅ 良い例

```html
<!-- utilityクラスで指定 -->
<body class="bg-gray-50">

<!-- Tailwindデフォルトを使う -->
<div class="p-4"><!-- 16px --></div>

<!-- アイコンサイズクラスを使う -->
<span class="material-symbols-outlined icon-lg">search</span>
```

## 📚 詳細ドキュメント

- **[DESIGN_TOKENS_GUIDE.md](./docs/DESIGN_TOKENS_GUIDE.md)** - 詳細な使用方法とベストプラクティス
- **[DESIGN_TOKENS_SUMMARY.md](./docs/DESIGN_TOKENS_SUMMARY.md)** - 実装の背景と技術詳細
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - 公式ドキュメント

## 🔧 次のステップ

各HTMLファイルを共通デザイントークンに移行：

- [ ] home.html
- [ ] detail.html
- [ ] history.html
- [ ] settings.html
- [ ] select-map.html

移行手順は[DESIGN_TOKENS_GUIDE.md](./docs/DESIGN_TOKENS_GUIDE.md)の「既存HTMLファイルの移行手順」を参照。

