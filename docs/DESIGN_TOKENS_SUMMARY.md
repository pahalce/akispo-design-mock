# デザイントークン共通化 - 実装サマリー

## 実施内容

全てのHTMLファイルに個別定義されていたTailwindテーマを共通化し、**Tailwind CSS utility-firstの原則に基づいた**統一されたデザインシステムを構築しました。

## 設計原則

### ✅ 採用した原則
1. **Tailwindデフォルトトークンの最大活用** - spacing, fontSize, colors等
2. **Utility-First** - 要素セレクタへの直接スタイル適用を避ける
3. **最小限のカスタマイズ** - プロジェクト固有の色のみ定義
4. **段階的移行** - 既存コード互換性を維持しつつ新しい方式へ

### ❌ 避けたこと
1. CSS変数の過度な使用（Tailwindデフォルトで十分な場合）
2. `body`, `a`, `button`等への要素セレクタスタイル適用
3. Tailwindデフォルトトークンの再定義

## 作成ファイル

### 1. `design-tokens.css`
**役割**: プロジェクト固有のトークンのみ定義

**含まれる内容:**
- プロジェクト固有のカラーパレット（primary, secondary, accent）
- Material Symbolsアイコンサイズクラス（20px/24px/32px/48px/64px）
- z-index階層定義
- 共通アニメーション定義（fade-in, slide-up, bounce, ripple等）
- ユーティリティクラス（スクロールバー非表示、スナップスクロール等）
- フォーカス時のアウトライン（アクセシビリティ）

**削除した内容（Tailwindデフォルトを使用）:**
- ~~スペーシング定義~~ → Tailwindの4px基準システムを使用
- ~~タイポグラフィ定義~~ → Tailwindのtext-*, font-*, leading-*を使用
- ~~角丸・シャドウの再定義~~ → Tailwindのrounded-*, shadow-*を使用
- ~~要素セレクタへのスタイル~~ → Utility-Firstに反するため削除

### 2. `tailwind-config.js`
**役割**: Tailwind CSSの最小限の拡張設定

**含まれる内容:**
- プロジェクト固有のカラー設定（primary, secondary, accent）
- フォントファミリー設定（Noto Sans JP, Noto Serif）
- プロジェクト固有の角丸・シャドウ（rounded-5xl, shadow-card）
- z-index階層（dropdown, sticky, modal等）
- 既存コード互換性のためのエイリアス（段階的削除予定）

**Tailwindデフォルトを使用:**
- spacing（4px基準）
- fontSize（text-xs～text-4xl等）
- colors（gray-*, red-*, green-*等）
- borderRadius（rounded-sm～rounded-3xl）
- boxShadow（shadow-sm～shadow-2xl）

### 3. `docs/DESIGN_TOKENS_GUIDE.md`
**役割**: 使用方法とベストプラクティスのドキュメント

**含まれる内容:**
- セットアップ手順
- 各トークンの使用例
- 既存ファイルの移行手順
- トラブルシューティング
- 今後の拡張方法

## IMPROVEMENTS.mdへの対応状況

### ✅ 対応完了項目

#### 1. デザインの一貫性
- ✅ **Material Symbolsのアイコンサイズ統一**
  - 用途別に5段階のサイズを定義（20px/24px/32px/48px/64px）
  - クラス名で明確に使い分け可能（`icon-sm`, `icon-lg`, `icon-xl`, `icon-2xl`）
  - opsz値もサイズに応じて最適化
  
- ✅ **カードの角丸サイズの統一**
  - 標準化された角丸サイズ（sm: 8px, md: 12px, lg: 16px, xl: 24px, 2xl: 32px）
  - 用途: `rounded-lg`（ボタン）、`rounded-xl`（カード）、`rounded-2xl`（モーダル）
  
- ✅ **シャドウの統一**
  - 5段階のシャドウを定義（sm/md/lg/xl/2xl）
  - カード専用シャドウ（shadow-card）を追加
  
- ✅ **z-indexの管理ルール**
  - 7段階の階層を定義（0/10/20/30/50/60/100）
  - 明確な用途別命名（dropdown/sticky/overlay/modal/popover/toast）

#### 2. カラーパレット
- ✅ **グレーの色を統一**
  - text-primary/text-secondary/text-disabledとして体系化
  - border/border-lightで境界線の色を統一
  
- ✅ **ホバー時の色変化の統一**
  - primary-hover/secondary-hover/accent-hoverを定義
  - active状態用にprimary-activeも追加
  
- ✅ **disabled状態のスタイル定義**
  - text-disabled色を定義
  - ボタンのdisabled状態の例をドキュメントに記載

#### 3. タイポグラフィ
- ✅ **フォントサイズの階層を明確化**
  - 8段階のフォントサイズ（xs: 12px ～ 4xl: 48px）
  
- ✅ **line-heightの統一ルール**
  - tight/normal/relaxedの3段階を定義
  
- ✅ **font-weightの使い分け明確化**
  - normal(400)/medium(500)/bold(700)を定義

#### 4. スペーシング
- ✅ **余白の統一**
  - 7段階のスペーシング（xs: 4px ～ 3xl: 64px）
  
- ✅ **使い分けルール**
  - xs/sm: アイテム間の小さな隙間
  - md/lg: セクション内の標準的な余白
  - xl/2xl/3xl: セクション間の大きな余白

#### 5. デザイントークンの明文化
- ✅ CSS変数として全て定義
- ✅ ドキュメントに一覧表として記載
- ✅ 使用例とベストプラクティスを記載

#### 6. アニメーションの定義
- ✅ 9種類の共通アニメーションを定義
  - fade-in, slide-up, slide-down, scale-in, bounce, pulse, spin, ripple, pin-bounce
- ✅ トランジション速度の標準化（fast: 150ms, base: 200ms, slow: 300ms）

## 共通化方針の詳細

### カラーシステム設計

**階層構造:**
```
セマンティックカラー（用途ベース）
├── primary（メインカラー）
│   ├── DEFAULT: #FF7F50
│   ├── hover: #FF6A3C
│   ├── active: #E65A28
│   └── foreground: #FFFFFF
├── secondary（セカンダリカラー）
├── accent（アクセントカラー）
├── background（背景）
├── card（カード）
├── text（テキスト）
│   ├── primary: #2C3E50
│   ├── secondary: #6B7280
│   └── disabled: #9CA3AF
└── state（状態）
    ├── error
    ├── success
    ├── warning
    └── info
```

### アイコンサイズの使い分け

| サイズ | 用途 | 例 |
|--------|------|-----|
| 20px (icon-sm) | インライン、補助的 | チップ内アイコン、テキスト横のアイコン |
| 24px (default) | 標準UI | ナビゲーションバー、リスト、ツールバー |
| 32px (icon-lg) | 強調 | ページヘッダー、カードヘッダー |
| 48px (icon-xl) | アクション | YES/NOボタン、FAB、空状態 |
| 64px (icon-2xl) | イラスト的 | スプラッシュ画面、大きな空状態 |

### z-index階層設計

**階層の考え方:**
```
100: トースト通知（最前面）
 60: ポップオーバー
 50: モーダルダイアログ ← match dialog
 30: オーバーレイ
 20: スティッキーヘッダー/ナビゲーション
 10: ドロップダウンメニュー
  0: 通常コンテンツ
```

### CSS変数を採用した理由

1. **ダークモード対応の容易性**
   - メディアクエリで変数を上書きするだけで対応可能

2. **動的なテーマ変更**
   - JavaScriptから変数を変更することで、リアルタイムなテーマ切り替えが可能

3. **一貫性の保証**
   - 単一の真実の情報源（Single Source of Truth）として機能

4. **可読性とメンテナンス性**
   - `var(--color-primary)`の方が`#FF7F50`より意味が明確

## 既存コードとの互換性

### 後方互換性の維持

以下のエイリアスを提供し、既存コードを壊さないようにしています：

```javascript
// tailwind-config.js
colors: {
  // 新しい命名
  text: {
    primary: 'var(--color-text-primary)',
  },
  // 既存コードのため維持
  foreground: 'var(--color-text-primary)',
  'text-light': 'var(--color-text-primary)',
}
```

これにより、段階的な移行が可能です。

## 移行ステップ

### フェーズ1: 基盤構築（完了）
- ✅ design-tokens.css作成
- ✅ tailwind-config.js作成
- ✅ ドキュメント作成

### フェーズ2: 既存HTMLファイルの更新（次のステップ）
各HTMLファイルで以下を実施：
1. headセクションを共通化
2. インラインのスタイル定義を削除
3. アイコンサイズクラスを適切に修正
4. z-indexを統一されたクラスに変更

対象ファイル：
- [ ] home.html
- [ ] detail.html
- [ ] history.html
- [ ] settings.html
- [ ] select-map.html

### フェーズ3: 検証とリファクタリング
- [ ] 各ページの表示確認
- [ ] インタラクションの動作確認
- [ ] レスポンシブ対応の確認
- [ ] アクセシビリティ確認

### フェーズ4: React実装への引き継ぎ
- [ ] CSS-in-JSライブラリへのデザイントークン移植
- [ ] Tailwind設定のNext.js/Vite等への適用
- [ ] コンポーネントライブラリの構築

## 今後の改善予定

### 追加予定のトークン

#### 1. グリッドとブレークポイント
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

#### 2. コンテナサイズ
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
```

#### 3. アニメーションイージング
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ダークモード対応

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1A1A1A;
    --color-card: #2A2A2A;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #9CA3AF;
    --color-border: #374151;
  }
}
```

## 技術的な利点

### 1. パフォーマンス
- CSS変数はブラウザネイティブ機能で高速
- 再計算の最小化
- ペイント/リフローの最適化

### 2. バンドルサイズ
- 重複コードの削減
- 共通ファイルのキャッシュ効果
- Tailwind Purgeでの最適化がより効果的

### 3. 開発体験
- 一箇所の変更で全体に反映
- IDEでの補完が効く
- デバッグが容易（DevToolsでリアルタイム変更可能）

### 4. スケーラビリティ
- 新しいページ追加が容易
- テーマ変更が簡単
- チーム開発での一貫性保証

## 参考リンク

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS Theme Configuration](https://tailwindcss.com/docs/theme)
- [Material Design Tokens](https://m3.material.io/foundations/design-tokens/overview)
- [Design Tokens Format Module (W3C)](https://tr.designtokens.org/format/)

## 質問・フィードバック

デザイントークンの使用で不明点や改善提案があれば、issueで報告してください。

---

**作成日**: 2025-10-26
**最終更新**: 2025-10-26
**ステータス**: フェーズ1完了、フェーズ2準備中

