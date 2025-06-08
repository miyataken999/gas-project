# Google Apps Script (GAS) 認証設定ガイド

## 1. Google Apps Script API を有効化

1. [Google Cloud Console](https://console.cloud.google.com/) にアクセス
2. プロジェクトを選択または新規作成
3. 「APIとサービス」→「ライブラリ」
4. 「Google Apps Script API」を検索して有効化
5. [Google Apps Script の設定](https://script.google.com/home/usersettings) で「Google Apps Script API」をオンにする

## 2. 認証情報を取得

### 方法1: OAuth 2.0 クライアント ID を使用

1. Google Cloud Console で「APIとサービス」→「認証情報」
2. 「認証情報を作成」→「OAuth 2.0 クライアント ID」
3. アプリケーションの種類: 「デスクトップアプリケーション」
4. クライアント ID とクライアント シークレットをメモ

### 方法2: サービスアカウントを使用

1. Google Cloud Console で「APIとサービス」→「認証情報」
2. 「認証情報を作成」→「サービスアカウント」
3. サービスアカウントを作成
4. キーを作成（JSON形式）

## 3. Clasp 認証設定

### OAuth認証の場合:
```bash
clasp login
```

### 手動設定の場合:
1. `~/.clasprc.json` ファイルを作成
2. 以下の形式で認証情報を設定:

```json
{
  "token": {
    "access_token": "YOUR_ACCESS_TOKEN",
    "refresh_token": "YOUR_REFRESH_TOKEN",
    "scope": "https://www.googleapis.com/auth/script.projects",
    "token_type": "Bearer",
    "expiry_date": 1234567890000
  },
  "oauth2ClientSettings": {
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET",
    "redirectUri": "urn:ietf:wg:oauth:2.0:oob"
  }
}
```

## 4. GitHub Secrets 設定

以下のシークレットを GitHub リポジトリに設定してください:

- `CLASP_TOKEN`: `~/.clasprc.json` ファイルの内容（JSON文字列）
- `SCRIPT_ID`: Google Apps Script プロジェクトのスクリプト ID（オプション）

## 5. プロジェクト作成

```bash
# 新しいプロジェクトを作成
clasp create --type standalone --title "Your Project Name"

# または既存プロジェクトをクローン
clasp clone <SCRIPT_ID>
```

## トラブルシューティング

### 認証エラーが発生する場合:
1. Google Apps Script API が有効になっているか確認
2. 認証情報が正しく設定されているか確認
3. スコープが正しく設定されているか確認

### プッシュエラーが発生する場合:
1. `.clasp.json` ファイルが存在するか確認
2. スクリプト ID が正しいか確認
3. プロジェクトへのアクセス権限があるか確認
