# AkiSpot

「今すぐ座れる場所」を直感的に見つけられるモバイルアプリ「AkiSpot」の開発リポジトリです。

## プロジェクト構成

```
akispo/
├── design/          # デザインモックアップ（HTML/CSS）
│   └── .cursor/     # デザイン用プロジェクトルール
├── product/         # 実際のプロダクト開発（これから開発開始）
└── docs/            # プロダクト開発用ドキュメント
```

## ディレクトリ説明

### `design/`
HTML/CSSで実装されたデザインモックアップです。UI/UXデザインの確認と検証が目的です。

詳細は [`design/README.md`](design/README.md) を参照してください。

### `product/`
デザインを元にした実際のプロダクト開発領域です。React等のフレームワークを使用して実装します。

### `docs/`
プロダクト開発に関するドキュメントを格納します。

## 開発フロー

1. **デザインフェーズ** (`design/`)
   - HTMLモックアップでデザインを確認
   - UI/UXパターンの検証
   - デザインシステムの確立

2. **実装フェーズ** (`product/`)
   - デザインを元にReact等で実装
   - バックエンド連携
   - 本番環境へのデプロイ

## クイックスタート

### デザインモックアップの確認

```bash
cd design
# ブラウザで home.html を開く
```

### プロダクト開発

```bash
cd product
# これから開発開始
```

## 参考ドキュメント

### デザイン関連
- [デザインモックアップ](design/README.md)
- [デザインシステム](design/docs/specs/design/design-system.md)
- [画面仕様](design/docs/specs/screen/MVP.md)

### プロダクト開発
- [開発計画](docs/DEVELOPMENT_PLAN.md) - サービス開発の概要レベルのタスクリスト

---

© 2024 AkiSpot. All rights reserved.

