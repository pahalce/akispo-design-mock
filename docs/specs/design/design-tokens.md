# デザイントークン実装ガイド

## 概要

AkiSpotのデザイントークンは、Tailwind CSSのutility-firstの原則に基づき、プロジェクト固有の色とアイコン設定のみをカスタマイズしています。

## ファイル構成

```
/
├── design-tokens.css      # プロジェクト固有のトークン
├── tailwind-config.js     # Tailwind拡張設定
└── docs/specs/design/
    ├── design-system.md   # デザインシステム全体
    └── design-tokens.md   # このファイル
```

## セットアップ

### 新規HTMLファイルの作成

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AkiSpot - ページタイトル</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
  
  <!-- デザイントークン -->
  <link rel="stylesheet" href="design-tokens.css">
  <script src="tailwind-config.js"></script>
</head>
<body class="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
  <!-- コンテンツ -->
</body>
</html>
```

**重要**: `body`タグには必ず基本utilityクラスを適用してください。

## カラー使用方法

### プロジェクト固有の色

```html
<!-- Primary（コーラルオレンジ #FF7F50） -->
<button class="bg-primary hover:bg-primary-hover text-white">
  ボタン
</button>

<!-- Secondary（ダークネイビー #2C3E50） -->
<h1 class="text-secondary font-bold">タイトル</h1>

<!-- Accent（ゴールド #FFD700） -->
<div class="bg-accent text-secondary">スコア表示</div>
```

### Tailwindデフォルトの色

プロジェクト固有でない色は**Tailwindデフォルトを使用**：

```html
<!-- グレー系 -->
<p class="text-gray-900">メインテキスト</p>
<p class="text-gray-600">サブテキスト</p>
<p class="text-gray-400">無効テキスト</p>

<!-- 状態色 -->
<div class="bg-red-500 text-white">エラー</div>
<div class="bg-green-500 text-white">成功</div>
<div class="bg-orange-500 text-white">警告</div>

<!-- 背景・ボーダー -->
<div class="bg-white border border-gray-200">カード</div>
<div class="bg-gray-50">背景</div>
```

## アイコンサイズ

Material SymbolsアイコンはTailwindの`text-*`クラスで制御：

```html
<!-- 小アイコン（20px）- インライン、補助 -->
<span class="material-symbols-outlined text-xl">info</span>

<!-- 標準（24px）- ヘッダー、リスト -->
<span class="material-symbols-outlined">home</span>

<!-- 大（36px）- ナビゲーションバー -->
<span class="material-symbols-outlined text-4xl">search</span>

<!-- 特大（48px）- メインアクション -->
<span class="material-symbols-outlined text-5xl">near_me</span>

<!-- 超特大（60px）- 空状態、イラスト -->
<span class="material-symbols-outlined text-6xl">explore</span>

<!-- 塗りつぶし -->
<span class="material-symbols-outlined filled text-4xl">favorite</span>
```

### アイコンサイズの使い分け

| 用途 | Tailwindクラス | サイズ | 例 |
|------|---------------|-------|-----|
| ヘッダーアイコン | デフォルト | 24px | 戻るボタン、メニュー |
| ナビゲーションバー | `text-4xl` | 36px | 探す、履歴、設定 |
| アクションボタン | `text-5xl` | 48px | YES/NOボタン |
| カード内補助アイコン | `text-xl` | 20px | 徒歩3分、地図 |
| 空状態 | `text-6xl` | 60px | 「データがありません」 |

## スペーシング

**Tailwindデフォルトを使用**（4px基準）：

```html
<!-- padding -->
<div class="p-1">4px</div>
<div class="p-2">8px</div>
<div class="p-4">16px</div>
<div class="p-6">24px</div>
<div class="p-8">32px</div>

<!-- margin -->
<div class="mt-4 mb-8">上16px、下32px</div>

<!-- gap -->
<div class="flex gap-4">16px間隔</div>
```

## タイポグラフィ

**Tailwindデフォルトを使用**：

```html
<!-- フォントサイズ -->
<p class="text-xs">12px</p>
<p class="text-sm">14px</p>
<p class="text-base">16px</p>
<p class="text-lg">18px</p>
<p class="text-xl">20px</p>
<p class="text-2xl">24px</p>
<p class="text-3xl">30px</p>

<!-- フォントウェイト -->
<p class="font-normal">400</p>
<p class="font-medium">500</p>
<p class="font-bold">700</p>

<!-- 行間 -->
<p class="leading-tight">1.25</p>
<p class="leading-normal">1.5</p>
<p class="leading-relaxed">1.75</p>
```

## アニメーション

### Tailwindデフォルトアニメーション

```html
<!-- バウンス -->
<div class="animate-bounce">通知</div>

<!-- スピナー -->
<div class="animate-spin">
  <span class="material-symbols-outlined">refresh</span>
</div>

<!-- パルス（スケルトン） -->
<div class="animate-pulse">読み込み中...</div>
```

### カスタムアニメーション

```html
<!-- フェードイン -->
<div class="animate-fade-in">コンテンツ</div>

<!-- スライドアップ（モーダル） -->
<div class="animate-slide-up">ボトムシート</div>

<!-- スライドダウン -->
<div class="animate-slide-down">ドロップダウン</div>

<!-- リップル効果 -->
<div class="animate-ripple">波紋</div>

<!-- 地図ピンバウンス -->
<div class="animate-pin-bounce">
  <span class="material-symbols-outlined filled">location_on</span>
</div>
```

## z-index管理

Tailwind標準のz-indexクラスを使用：

```html
<!-- Tailwindクラス -->
<div class="z-0">通常コンテンツ</div>
<div class="z-10">ドロップダウン</div>
<div class="z-20">スティッキーヘッダー</div>
<div class="z-30">オーバーレイ</div>
<div class="z-50">モーダル</div>
```

## ユーティリティクラス

### スナップスクロール（Tailwindデフォルト）

```html
<div class="flex snap-x overflow-x-auto">
  <div class="snap-center">アイテム1</div>
  <div class="snap-center">アイテム2</div>
</div>
```

### テキスト省略（Tailwindデフォルト）

```html
<p class="truncate">長いテキストは省略されます...</p>
```

## ベストプラクティス

### ✅ 良い例

```html
<!-- Utilityクラスでスタイリング -->
<button class="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold transition-colors">
  ボタン
</button>

<!-- Tailwindデフォルトを使用 -->
<div class="p-4 bg-white rounded-xl">
  カード
</div>

<!-- 適切なアイコンサイズ -->
<span class="material-symbols-outlined text-4xl">search</span>
```

### ❌ 悪い例

```html
<!-- ❌ 要素セレクタへの直接スタイル -->
<style>
  body { background: #F5F5F5; }
  a { color: blue; }
</style>

<!-- ❌ カスタムCSS変数の乱用 -->
<style>
  :root { --my-spacing: 20px; }
</style>
<div style="padding: var(--my-spacing)">
```

## よくある間違いと修正

### 1. アイコンサイズ

✅ **Tailwindクラスを使用**
```html
<span class="material-symbols-outlined text-4xl">search</span>
```

### 2. bodyタグ

❌ **ダメ**
```html
<style>
  body { background: #F5F5F5; }
</style>
<body>
```

✅ **良い**
```html
<body class="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
```

### 3. カスタムスペーシング

❌ **ダメ**
```html
<style>
  :root { --spacing-custom: 17px; }
</style>
<div style="padding: var(--spacing-custom)">
```

✅ **良い**
```html
<div class="p-4"><!-- 16px --></div>
```

## トラブルシューティング

### カラーが反映されない

**原因**: CSS変数の読み込み順序  
**解決**: `design-tokens.css`を`tailwind-config.js`より先に読み込む

### bodyにスタイルが当たらない

**原因**: body要素にutilityクラスを指定していない  
**解決**: `<body class="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">`

### アイコンサイズが変わらない

**原因**: クラス名のタイポや適用ミス  
**解決**: Tailwindの`text-*`クラスを正しく指定

## カスタマイズ

### 新しい色を追加

プロジェクト固有の色が必要な場合：

1. `design-tokens.css`に追加:
```css
:root {
  --color-custom: #123456;
}
```

2. `tailwind-config.js`に追加:
```js
colors: {
  custom: 'var(--color-custom)',
}
```

3. 使用:
```html
<div class="bg-custom">カスタムカラー</div>
```

### 新しいアニメーションを追加

1. `design-tokens.css`に追加:
```css
@keyframes custom-animation {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

.animate-custom {
  animation: custom-animation 0.3s ease-out;
}
```

2. 使用:
```html
<div class="animate-custom">アニメーション</div>
```

## 関連ドキュメント

- [デザインシステム全体](./design-system.md) - コンポーネント、パターン、ガイドライン
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material Symbols](https://fonts.google.com/icons)

---

**最終更新**: 2025-11-01  
**管理**: `design-tokens.css`や`tailwind-config.js`を変更した場合は、このドキュメントも更新してください


