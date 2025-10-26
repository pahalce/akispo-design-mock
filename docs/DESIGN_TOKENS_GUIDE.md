# デザイントークン 使用ガイド

## 概要

AkiSpotプロジェクトのデザイントークンを共通化しました。**Tailwind CSSのデフォルトトークンを最大限活用し**、プロジェクト固有の色のみをカスタマイズしています。

## 基本方針

### ✅ やること
- **Tailwindのデフォルトトークンを使う**（spacing, fontSize, colors等）
- **プロジェクト固有の色のみCSS変数で定義**
- **utility-firstを徹底**（クラスでスタイリング）

### ❌ やらないこと
- 要素セレクタ（`body`, `a`, `button`等）への直接スタイル適用
- Tailwindデフォルトトークンの再定義
- 過度なCSS変数の追加

## ファイル構成

```
/
├── design-tokens.css      # プロジェクト固有の色、アイコン設定、アニメーション
├── tailwind-config.js     # Tailwind拡張設定
└── docs/
    └── DESIGN_TOKENS_GUIDE.md  # このファイル
```

## 使用方法

### 1. 基本セットアップ

各HTMLファイルの`<head>`セクションに以下を追加：

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
  
  <!-- Tailwind設定 -->
  <script src="tailwind-config.js"></script>
</head>
<body class="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
  <!-- コンテンツ -->
</body>
</html>
```

**重要**: `body`タグには必ず基本的なutilityクラスを指定してください：
- `min-h-screen` - 最小高さ100vh
- `bg-gray-50` - 背景色（または`bg-[#F5F5F5]`）
- `text-gray-900` - テキスト色
- `font-sans` - フォントファミリー
- `antialiased` - フォントスムージング

### 2. カラーの使用

#### プロジェクト固有の色

```html
<!-- プライマリーカラー（#FF7F50） -->
<button class="bg-primary hover:bg-primary-hover text-white">
  ボタン
</button>

<!-- セカンダリーカラー（#2C3E50） -->
<div class="bg-secondary text-white">
  セクション
</div>

<!-- アクセントカラー（#FFD700） -->
<span class="text-accent font-bold">強調</span>
```

#### Tailwindデフォルトの色を使う

プロジェクト固有でない色は**Tailwindデフォルトを使用**：

```html
<!-- グレー系 -->
<p class="text-gray-900">メインテキスト</p>
<p class="text-gray-600">サブテキスト</p>
<p class="text-gray-400">無効テキスト</p>

<!-- ステート -->
<div class="bg-red-500 text-white">エラー</div>
<div class="bg-green-500 text-white">成功</div>
<div class="bg-yellow-500 text-white">警告</div>
<div class="bg-blue-500 text-white">情報</div>

<!-- ボーダー -->
<div class="border border-gray-200">ボーダー</div>

<!-- 背景 -->
<div class="bg-white">カード</div>
<div class="bg-gray-50">背景</div>
```

### 3. スペーシング

**Tailwindデフォルトを使用**（4px基準のスケール）：

```html
<!-- padding: Tailwindデフォルト -->
<div class="p-1"><!-- 4px --></div>
<div class="p-2"><!-- 8px --></div>
<div class="p-4"><!-- 16px --></div>
<div class="p-6"><!-- 24px --></div>
<div class="p-8"><!-- 32px --></div>

<!-- margin: Tailwindデフォルト -->
<div class="mt-4 mb-8"><!-- 上16px, 下32px --></div>

<!-- gap: Tailwindデフォルト -->
<div class="flex gap-4"><!-- 16px --></div>
```

### 4. タイポグラフィ

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
<p class="text-4xl">36px</p>

<!-- フォントウェイト -->
<p class="font-normal">400</p>
<p class="font-medium">500</p>
<p class="font-bold">700</p>

<!-- 行間 -->
<p class="leading-tight">1.25</p>
<p class="leading-normal">1.5</p>
<p class="leading-relaxed">1.75</p>
```

### 5. アイコンサイズの標準化

Material Symbolsアイコンのサイズは用途別に統一：

```html
<!-- 小アイコン（20px）- インライン、補助的 -->
<span class="material-symbols-outlined icon-sm">info</span>

<!-- 基本アイコン（24px）- ナビゲーション、標準UI -->
<span class="material-symbols-outlined">home</span>

<!-- 大アイコン（32px）- 強調、ヘッダー -->
<span class="material-symbols-outlined icon-lg">search</span>

<!-- 特大アイコン（48px）- アクションボタン -->
<span class="material-symbols-outlined icon-xl">near_me</span>

<!-- 超特大アイコン（64px）- イラスト的用途 -->
<span class="material-symbols-outlined icon-2xl">explore</span>

<!-- 塗りつぶしアイコン -->
<span class="material-symbols-outlined filled">favorite</span>
```

**アイコンサイズの使い分け：**
- `icon-sm` (20px): チップ内、インライン表示
- デフォルト (24px): ナビゲーションバー、リスト項目、ツールバー
- `icon-lg` (32px): ヘッダーアイコン、カードヘッダー
- `icon-xl` (48px): メインアクションボタン（YES/NO）、空状態
- `icon-2xl` (64px): スプラッシュ画面、大きな空状態

### 6. 角丸

**Tailwindデフォルトを使用**：

```html
<!-- 小 -->
<div class="rounded-sm">2px</div>
<div class="rounded">4px</div>
<div class="rounded-md">6px</div>

<!-- 中 -->
<div class="rounded-lg">8px</div>
<div class="rounded-xl">12px</div>

<!-- 大 -->
<div class="rounded-2xl">16px</div>
<div class="rounded-3xl">24px</div>

<!-- プロジェクト固有（home.htmlのカード用） -->
<div class="rounded-5xl">32px</div>

<!-- 円形 -->
<div class="rounded-full">9999px</div>
```

### 7. シャドウ

**Tailwindデフォルトを使用**：

```html
<!-- 小 -->
<div class="shadow-sm">軽いシャドウ</div>

<!-- 中 -->
<div class="shadow-md">標準シャドウ</div>

<!-- 大 -->
<div class="shadow-lg">強調シャドウ</div>
<div class="shadow-xl">より強調</div>
<div class="shadow-2xl">最大</div>

<!-- プロジェクト固有（カード専用） -->
<div class="shadow-card">カードシャドウ</div>
```

### 8. アニメーション

組み込みアニメーションを使用：

```html
<!-- フェードイン -->
<div class="animate-fade-in">コンテンツ</div>

<!-- スライドアップ（モーダル） -->
<div class="animate-slide-up">ボトムシート</div>

<!-- スライドダウン -->
<div class="animate-slide-down">ドロップダウン</div>

<!-- バウンス -->
<div class="animate-bounce">通知</div>

<!-- スピナー（ローディング） -->
<div class="animate-spin">
  <span class="material-symbols-outlined">refresh</span>
</div>

<!-- パルス -->
<div class="animate-pulse">読み込み中...</div>

<!-- リップル効果 -->
<div class="animate-ripple">波紋</div>

<!-- 地図ピンバウンス -->
<div class="animate-pin-bounce">
  <span class="material-symbols-outlined filled">location_on</span>
</div>
```

### 9. z-index管理

```html
<!-- Tailwindクラス -->
<div class="z-sticky">スティッキーヘッダー（20）</div>
<div class="z-modal">モーダル（50）</div>
<div class="z-toast">トースト通知（100）</div>
```

## プロジェクト固有のトークン一覧

### カラー

| クラス | 色 | 用途 |
|--------|-----|------|
| `bg-primary` | #FF7F50 | メインカラー |
| `bg-primary-hover` | #FF6A3C | ホバー時 |
| `bg-secondary` | #2C3E50 | セカンダリ |
| `bg-secondary-hover` | #1A252F | ホバー時 |
| `bg-accent` | #FFD700 | アクセント |
| `bg-accent-hover` | #FFC700 | ホバー時 |

### z-index階層

| クラス | 値 | 用途 |
|--------|-----|------|
| `z-dropdown` | 10 | ドロップダウン |
| `z-sticky` | 20 | スティッキー要素 |
| `z-overlay` | 30 | オーバーレイ |
| `z-modal` | 50 | モーダル |
| `z-popover` | 60 | ポップオーバー |
| `z-toast` | 100 | トースト通知 |

## ベストプラクティス

### 1. Utility-Firstを徹底

❌ **ダメな例**（CSSで要素に直接スタイル）
```html
<style>
  a {
    color: blue;
    text-decoration: none;
  }
  button {
    padding: 1rem;
    background: red;
  }
</style>
<a href="#">リンク</a>
<button>ボタン</button>
```

✅ **良い例**（utilityクラス）
```html
<a href="#" class="text-blue-500 no-underline hover:underline">リンク</a>
<button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">ボタン</button>
```

### 2. Tailwindデフォルトを優先

❌ **ダメな例**（カスタムCSS変数）
```html
<style>
  :root {
    --my-spacing: 20px;
  }
</style>
<div style="padding: var(--my-spacing)">コンテンツ</div>
```

✅ **良い例**（Tailwindデフォルト）
```html
<div class="p-5"><!-- 20px -->コンテンツ</div>
```

### 3. 状態管理

```html
<button class="
  bg-primary 
  hover:bg-primary-hover 
  active:bg-primary-active 
  disabled:bg-gray-300 
  disabled:cursor-not-allowed
  text-white 
  px-6 py-3 
  rounded-lg 
  transition-colors
">
  ボタン
</button>
```

### 4. レスポンシブデザイン

```html
<div class="
  text-base 
  sm:text-lg 
  md:text-xl
  p-4 
  sm:p-6 
  md:p-8
">
  レスポンシブコンテンツ
</div>
```

### 5. コンポーネント化（将来のReact実装用）

同じパターンが3回以上出たらコンポーネント化を検討：

```jsx
// Button.jsx
export const Button = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white',
    secondary: 'bg-secondary hover:bg-secondary-hover text-white',
  };
  
  return (
    <button className={`px-6 py-3 rounded-lg transition-colors ${variants[variant]}`}>
      {children}
    </button>
  );
};
```

## よくある間違い

### 1. カスタムCSS変数を作りすぎる

❌ **ダメ**
```css
:root {
  --spacing-custom: 17px;
  --text-custom: 15px;
}
```

✅ **良い**
```html
<!-- Tailwindの最も近い値を使う -->
<div class="p-4"><!-- 16px --></div>
<p class="text-base"><!-- 16px --></p>
```

### 2. text-*でアイコンサイズを指定

❌ **ダメ**
```html
<span class="material-symbols-outlined text-3xl">search</span>
```

✅ **良い**
```html
<span class="material-symbols-outlined icon-lg">search</span>
```

### 3. 要素セレクタへのスタイル適用

❌ **ダメ**
```css
body {
  background: #F5F5F5;
  font-family: 'Noto Sans JP';
}
```

✅ **良い**
```html
<body class="bg-gray-50 font-sans">
```

## Tailwind公式リソース

- [カラー](https://tailwindcss.com/docs/customizing-colors)
- [スペーシング](https://tailwindcss.com/docs/customizing-spacing)
- [タイポグラフィ](https://tailwindcss.com/docs/font-size)
- [シャドウ](https://tailwindcss.com/docs/box-shadow)
- [z-index](https://tailwindcss.com/docs/z-index)

## トラブルシューティング

### カラーが反映されない

**原因**: CSS変数の読み込み順序  
**解決**: `design-tokens.css`を`tailwind-config.js`より先に読み込む

### bodyにスタイルが当たらない

**原因**: body要素にutilityクラスを指定していない  
**解決**: `<body class="min-h-screen bg-gray-50 text-gray-900 font-sans">`

### アイコンサイズが変わらない

**原因**: `text-*`クラスとアイコンサイズクラスが競合  
**解決**: `text-*`を削除し、アイコンサイズクラスのみ使用

## 関連ドキュメント

- [DESIGN_TOKENS_SUMMARY.md](./DESIGN_TOKENS_SUMMARY.md) - 実装サマリー
- [IMPROVEMENTS.md](./IMPROVEMENTS.md) - デザイン改善提案
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
