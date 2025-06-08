# GitHub Secrets 設定手順

## 必要な Secrets

### 1. CLASP_TOKEN
Google Apps Script への認証に使用するトークンです。

#### 取得方法:

1. **ローカルでClaspにログイン:**
   ```bash
   clasp login
   ```

2. **認証トークンファイルの内容を取得:**
   ```bash
   cat ~/.clasprc.json
   ```

3. **出力された JSON をコピー** (例):
   ```json
   {
     "token": {
       "access_token": "ya29.a0AfH6...",
       "refresh_token": "1//0GWt...",
       "scope": "https://www.googleapis.com/auth/script.projects",
       "token_type": "Bearer",
       "expiry_date": 1640995200000
     },
     "oauth2ClientSettings": {
       "clientId": "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com",
       "clientSecret": "d-FL95Q19q7MQmFpd7hHD0Ty",
       "redirectUri": "urn:ietf:wg:oauth:2.0:oob"
     }
   }
   ```

### 2. SCRIPT_ID (オプション)
特定の Google Apps Script プロジェクトのスクリプト ID です。

#### 取得方法:
1. Google Apps Script エディタでプロジェクトを開く
2. URLから取得: `https://script.google.com/d/{SCRIPT_ID}/edit`
3. または `.clasp.json` ファイルから取得

## GitHub Secrets 設定

### Web UI で設定:
1. GitHub リポジトリページを開く
2. Settings → Secrets and variables → Actions
3. "New repository secret" をクリック
4. Name: `CLASP_TOKEN`, Value: 上記で取得した JSON
5. "Add secret" をクリック

### CLI で設定:
```bash
# CLASP_TOKEN を設定
gh secret set CLASP_TOKEN < ~/.clasprc.json

# SCRIPT_ID を設定 (オプション)
gh secret set SCRIPT_ID --body "YOUR_SCRIPT_ID"
```

## 設定確認

```bash
# 設定されたシークレットを確認
gh secret list
```

## 注意事項

- `CLASP_TOKEN` は機密情報です。安全に管理してください
- トークンには有効期限があります。期限切れの場合は再取得が必要です
- `refresh_token` があれば自動的に更新されます
