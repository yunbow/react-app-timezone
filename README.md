# タイムゾーン変換ツール (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたタイムゾーン変換アプリケーションです。

### デモプレイ
https://yunbow.github.io/react-app-timezone/demo/

## 主要機能

### タイムゾーン変換
- 指定した日時を異なるタイムゾーン間で変換
- 9つの主要タイムゾーンをサポート（UTC、日本、アメリカ東部・西部、イギリス、中央ヨーロッパ、中国、オーストラリア東部、ニュージーランド）

### 世界時計機能
- 東京、ニューヨーク、ロンドン、シドニーの現在時刻をリアルタイム表示
- 1分ごとに自動更新

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Label/
│   │   └── Select/
│   ├── molecules/      # 機能単位コンポーネント
│   │   ├── TimeInput/
│   │   ├── TimezoneSelect/
│   │   ├── ConversionResult/
│   │   └── WorldClock/
│   └── organisms/      # 画面領域コンポーネント
│       └── TimezoneConverter/
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── hooks/              # カスタムフック
├── utils/              # 共通処理
├── Config.ts           # 設定値
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン（変換・現在時刻設定）
- `Input` - 日時入力フィールド
- `Select` - タイムゾーン選択ドロップダウン
- `Label` - ラベル表示

### Molecules（機能単位）
- `TimeInput` - 日時入力フォーム
- `TimezoneSelect` - タイムゾーン選択フォーム
- `ConversionResult` - 変換結果表示
- `WorldClock` - 世界時計表示

### Organisms（画面領域）
- `TimezoneConverter` - アプリケーション全体

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License