# タイムゾーン変換ツール (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたタイムゾーン変換アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

### デモプレイ
https://yunbow.github.io/react-app-timezone/demo/

## 主要機能

### タイムゾーン変換
- 指定した日時を異なるタイムゾーン間で変換
- 9つの主要タイムゾーンをサポート（UTC、日本、アメリカ東部・西部、イギリス、中央ヨーロッパ、中国、オーストラリア東部、ニュージーランド）
- ブラウザのネイティブ`Intl.DateTimeFormat` APIを使用した正確な変換

### 世界時計機能
- 東京、ニューヨーク、ロンドン、シドニーの現在時刻をリアルタイム表示
- 1秒ごとに自動更新

### 操作方法
- **時間変換**: 時間を入力し、変換元と変換先のタイムゾーンを選択して「変換」ボタン
- **現在時刻**: 「現在時刻を設定」ボタンで現在時刻を自動入力して変換
- **世界時計**: 主要都市の現在時刻を常時表示

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                    # 機能別モジュール
│   └── timezone-converter/      # タイムゾーン変換機能
│       ├── components/          # 機能専用コンポーネント
│       │   ├── TimeInput/       # 時間入力フォーム
│       │   ├── TimezoneSelect/  # タイムゾーン選択フォーム
│       │   ├── ConversionResult/ # 変換結果表示
│       │   └── WorldClock/      # 世界時計表示
│       ├── TimezoneConverter/   # 機能ルートコンポーネント
│       ├── useTimezoneConverter.ts # タイムゾーン変換フック
│       ├── useWorldClock.ts     # 世界時計フック
│       ├── types.ts             # 機能固有の型定義
│       └── timezoneConverter.ts # 変換ロジック
├── components/                  # 共通UIコンポーネント
│   ├── Button/                  # 操作ボタン
│   ├── Input/                   # テキスト入力
│   ├── Select/                  # セレクトボックス
│   └── Label/                   # ラベル
├── stories/                     # Storybook用ストーリー
├── Config.ts                    # 設定値
├── App.tsx                      # メインアプリ
└── main.tsx                     # エントリーポイント
```

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