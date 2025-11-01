# AkiSpot デザインシステム

## 概要

AkiSpotのデザインシステムは「遊び心のあるスタイリッシュさ」を基調とし、ユーザーに自己肯定感を与える洗練されたUIを目指しています。

**コアコンセプト:**
- 📸 **画像強調・最小情報**: 視覚的なインパクトを重視
- 🎨 **カラフル＆モダン**: 親しみやすさと洗練さの両立
- 📱 **モバイルファースト**: スマートフォンでの使いやすさを最優先

## カラーパレット

### プライマリーカラー

| 用途 | カラー | 値 | 使用場面 |
|------|--------|-----|----------|
| Primary | コーラルオレンジ | `#FF7F50` | アクションボタン、強調要素 |
| Secondary | ダークネイビー | `#2C3E50` | テキスト、ヘッダー、重要な情報 |
| Accent | ゴールド | `#FFD700` | スコア表示、ハイライト |

### システムカラー

| 用途 | カラー | Tailwindクラス | 使用場面 |
|------|--------|----------------|----------|
| 背景 | `#F5F5F5` | `bg-gray-50` | ページ背景 |
| カード | `#FFFFFF` | `bg-white` | カード、モーダル |
| エラー | `#FC3D13` | `bg-red-500` | エラー表示 |
| 成功 | `#4CAF50` | `bg-green-500` | 成功メッセージ |
| 警告 | `#FFA500` | `bg-orange-500` | 警告表示 |

### テキストカラー

| 用途 | カラー | Tailwindクラス |
|------|--------|----------------|
| メインテキスト | `#2C3E50` | `text-gray-900` |
| サブテキスト | `#6B7280` | `text-gray-600` |
| 無効テキスト | `#9CA3AF` | `text-gray-400` |

## タイポグラフィ

### フォントファミリー

```css
font-sans: 'Noto Sans JP', sans-serif;  /* 本文用 */
font-serif: 'Noto Serif', serif;        /* タイトル・強調用 */
```

### フォントサイズ階層

| 用途 | サイズ | Tailwindクラス | 使用場面 |
|------|--------|----------------|----------|
| Display | 48px | `text-5xl` | スプラッシュ画面 |
| H1 | 32px | `text-3xl` | ページタイトル、カード名 |
| H2 | 24px | `text-2xl` | セクションタイトル |
| H3 | 20px | `text-xl` | サブセクション |
| Body Large | 18px | `text-lg` | 重要な本文 |
| Body | 16px | `text-base` | 標準本文 |
| Body Small | 14px | `text-sm` | 補足情報 |
| Caption | 12px | `text-xs` | ラベル、注釈 |

### フォントウェイト

- `font-normal` (400): 通常のテキスト
- `font-medium` (500): 軽い強調
- `font-bold` (700): 強い強調、タイトル

## アイコン

Material Symbolsを使用。サイズはTailwindの`text-*`クラスで制御：

| Tailwindクラス | サイズ | 用途 |
|---------------|--------|------|
| `text-xl` | 20px | インライン、補助アイコン |
| デフォルト | 24px | ナビゲーション、リスト |
| `text-4xl` | 36px | ナビゲーションバー（32pxに近い） |
| `text-5xl` | 48px | メインアクション（YES/NO） |
| `text-6xl` | 60px | 空状態、イラスト的用途（64pxに近い） |

**塗りつぶし:**
- 通常: `.material-symbols-outlined`
- 塗りつぶし: `.material-symbols-outlined.filled`

**例:**
```html
<span class="material-symbols-outlined text-4xl">search</span>
<span class="material-symbols-outlined filled text-5xl">favorite</span>
```

## スペーシング

Tailwindデフォルトの4px基準システムを使用：

| 用途 | Tailwindクラス | サイズ |
|------|----------------|--------|
| 極小 | `p-1`, `gap-1` | 4px |
| 小 | `p-2`, `gap-2` | 8px |
| 標準 | `p-4`, `gap-4` | 16px |
| 中 | `p-6`, `gap-6` | 24px |
| 大 | `p-8`, `gap-8` | 32px |

## 角丸（Border Radius）

| 用途 | Tailwindクラス | サイズ | 使用場面 |
|------|----------------|--------|----------|
| 小 | `rounded-lg` | 8px | ボタン |
| 中 | `rounded-xl` | 12px | カード |
| 大 | `rounded-2xl` | 16px | モーダル |
| 特大 | `rounded-3xl` | 24px | スワイプカード |
| 円形 | `rounded-full` | 9999px | アイコンボタン、バッジ |

## シャドウ（Box Shadow）

| 用途 | Tailwindクラス | 使用場面 |
|------|----------------|----------|
| 軽い | `shadow-sm` | カード（静止時） |
| 標準 | `shadow-md` | ヘッダー、フッター |
| 強調 | `shadow-lg` | ナビゲーション |
| 浮遊 | `shadow-xl` | モーダル |
| カード | `shadow-card` | メインカード |

## コンポーネントパターン

### ボタン

#### プライマリーボタン
```html
<button class="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold transition-colors">
  ボタン
</button>
```

#### セカンダリーボタン
```html
<button class="bg-gray-100 hover:bg-gray-200 text-secondary px-6 py-3 rounded-lg font-bold transition-colors">
  ボタン
</button>
```

#### アイコンボタン
```html
<button class="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
  <span class="material-symbols-outlined text-secondary">close</span>
</button>
```

### カード

#### 標準カード
```html
<div class="bg-white rounded-xl p-5 shadow-sm">
  <!-- コンテンツ -->
</div>
```

#### 画像カード
```html
<div class="bg-white rounded-2xl overflow-hidden shadow-md">
  <img src="..." class="w-full aspect-[4/3] object-cover">
  <div class="p-4">
    <!-- コンテンツ -->
  </div>
</div>
```

### ナビゲーション

#### ボトムナビゲーション
```html
<nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
  <div class="flex justify-around max-w-md mx-auto">
    <a class="flex flex-col items-center justify-center text-primary py-3 px-4 w-1/3">
      <span class="material-symbols-outlined filled text-4xl">search</span>
      <span class="text-xs font-bold">探す</span>
    </a>
    <!-- 他のアイテム -->
  </div>
</nav>
```

### モーダル

#### ボトムシート
```html
<div class="fixed inset-0 z-50 hidden">
  <div class="absolute inset-0 bg-black/60 animate-fade-in">
    <div class="flex flex-col bg-white rounded-t-3xl animate-slide-up shadow-2xl">
      <!-- ハンドル -->
      <button class="flex h-5 w-full items-center justify-center pt-3 pb-2">
        <div class="h-1.5 w-10 rounded-full bg-gray-300"></div>
      </button>
      <!-- コンテンツ -->
    </div>
  </div>
</div>
```

## アニメーション

### Tailwindデフォルトアニメーション

| クラス | 効果 | 使用場面 |
|--------|------|----------|
| `animate-bounce` | バウンス | 通知、ピン |
| `animate-spin` | 回転 | ローディング |
| `animate-pulse` | 脈動 | スケルトン |

### カスタムアニメーション

| クラス | 効果 | 使用場面 |
|--------|------|----------|
| `animate-fade-in` | フェードイン | オーバーレイ |
| `animate-slide-up` | 下から上にスライド | ボトムシート |
| `animate-slide-down` | 上から下にスライド | ドロップダウン |
| `animate-ripple` | 波紋効果 | 地図ピン |
| `animate-pin-bounce` | ピンバウンス | 地図ピン配置 |

## z-index階層（Tailwind標準クラスを使用）

| レイヤー | Tailwindクラス | 値 | 用途 |
|---------|---------------|-----|------|
| Base | `z-0` | 0 | 通常コンテンツ |
| Dropdown | `z-10` | 10 | ドロップダウン |
| Sticky | `z-20` | 20 | スティッキーヘッダー |
| Overlay | `z-30` | 30 | オーバーレイ |
| Modal | `z-50` | 50 | モーダル |

## 画面構成パターン

### ヘッダー

全ページで統一された高さ（64px）を使用：

```html
<header class="bg-white shadow-sm h-header flex items-center justify-between px-4 sticky top-0 z-20">
  <button class="w-icon-button h-icon-button rounded-full hover:bg-gray-100">
    <span class="material-symbols-outlined">arrow_back</span>
  </button>
  <h1 class="text-lg font-bold">タイトル</h1>
  <button class="w-icon-button h-icon-button rounded-full hover:bg-gray-100">
    <span class="material-symbols-outlined">more_horiz</span>
  </button>
</header>
```

**共通サイズ:**
- ヘッダー高さ: `h-header` (64px)
- アイコンボタン: `w-icon-button h-icon-button` (40px × 40px)

### bodyタグ

全ページで基本スタイルを適用：

```html
<body class="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
```

## レスポンシブデザイン

### ブレークポイント

Tailwindデフォルトを使用：
- `sm`: 640px以上
- `md`: 768px以上
- `lg`: 1024px以上

### コンテナ幅

```html
<div class="max-w-sm mx-auto">  <!-- スマートフォン: 384px -->
<div class="max-w-md mx-auto">  <!-- タブレット: 448px -->
```

## アクセシビリティ

### フォーカス状態

全インタラクティブ要素にフォーカス表示：

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### カラーコントラスト

WCAG AA基準を満たすコントラスト比：
- 通常テキスト: 4.5:1以上
- 大きなテキスト: 3:1以上

## ベストプラクティス

### ✅ すべきこと

1. **Tailwindのutilityクラスを使用**
   - 一貫性のあるスタイリング
   - メンテナンス性の向上

2. **デザイントークンを参照**
   - プロジェクト固有の色は`design-tokens.css`から

3. **適切なアイコンサイズを選択**
   - 用途に応じたサイズクラスを使用

4. **アクセシビリティを考慮**
   - セマンティックHTML
   - フォーカス可能な要素

### ❌ 避けるべきこと

1. **要素セレクタへの直接スタイル適用**
   ```css
   /* ❌ ダメ */
   body { background: #F5F5F5; }
   a { color: blue; }
   ```

2. **インラインスタイル**
   ```html
   <!-- ❌ ダメ -->
   <div style="padding: 20px;">
   ```

3. **カスタムCSS変数の乱用**
   - Tailwindデフォルトで十分な場合は使わない

## 参考リソース

- [デザイントークン実装ガイド](./design-tokens.md)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material Symbols](https://fonts.google.com/icons)

---

**最終更新**: 2025-11-01  
**管理**: このファイルは`design-tokens.css`や`tailwind-config.js`の変更時に必ず更新してください


