# Google Apps Script Project

このプロジェクトは Google Apps Script (GAS) を Clasp で管理するためのプロジェクトです。

## セットアップ

### 1. Google Apps Script API を有効化
1. [Google Apps Script API](https://script.google.com/home/usersettings) にアクセス
2. "Google Apps Script API" をオンにする

### 2. Clasp ログイン
```bash
npm run login
```

### 3. 新しいプロジェクトを作成
```bash
npm run create
```

または既存のプロジェクトをクローン:
```bash
npm run clone <SCRIPT_ID>
```

## 使用方法

### コードをプッシュ
```bash
npm run push
```

### コードをプル
```bash
npm run pull
```

### デプロイ
```bash
npm run deploy
```

### ログを確認
```bash
npm run logs
```

### エディタを開く
```bash
npm run open
```

## GitHub Actions 自動デプロイ

このプロジェクトは GitHub Actions を使用して自動的に GAS にデプロイします。

### 必要な Secrets:
- `CLASP_TOKEN`: Clasp 認証トークン
- `SCRIPT_ID`: Google Apps Script プロジェクト ID

## ファイル構造

- `Code.js` - メインの GAS コード
- `appsscript.json` - GAS プロジェクト設定
- `.clasp.json` - Clasp 設定
- `.github/workflows/` - GitHub Actions ワークフロー
