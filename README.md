# Google Apps Script Project with Clasp & GitHub Actions

このプロジェクトは Google Apps Script (GAS) を Clasp で管理し、GitHub Actions で自動デプロイするためのプロジェクトです。

## 🚀 クイックスタート

> **📖 詳細な手順は [QUICKSTART.md](./QUICKSTART.md) を参照してください**

### 1️⃣ Google Apps Script API を有効化
- [Google Cloud Console](https://console.cloud.google.com/) でAPIを有効化
- [Apps Script 設定](https://script.google.com/home/usersettings) でAPIをオン

### 2️⃣ 認証設定
```bash
clasp login                           # Google認証
cat ~/.clasprc.json                   # トークン確認
gh secret set CLASP_TOKEN < ~/.clasprc.json  # GitHub Secrets設定
```

### 3️⃣ GAS プロジェクト作成
```bash
clasp create --type standalone --title "My GAS Project"
```

### 4️⃣ デプロイテスト
```bash
npm run push                          # 手動プッシュ
git commit -m "Test" --allow-empty && git push  # 自動デプロイテスト
```

## 📁 プロジェクト構造

### 基本操作
```bash
npm run push      # GAS にコードをプッシュ
npm run pull      # GAS からコードをプル
npm run deploy    # GAS にデプロイ (本番環境)
npm run open      # GAS エディタを開く
npm run logs      # 実行ログを確認
```

### セットアップ
```bash
npm run login     # Clasp 認証
npm run create    # 新しいGASプロジェクト作成
npm run clone     # 既存プロジェクトをクローン
```

## 🔄 GitHub Actions 自動デプロイ

このプロジェクトは GitHub Actions で自動デプロイされます：

### 📋 デプロイフロー
1. **プッシュトリガー**: `main` ブランチにプッシュ
2. **環境セットアップ**: Node.js 18 + Clasp CLI
3. **認証**: GitHub Secrets から `CLASP_TOKEN` 取得
4. **プッシュ**: `clasp push --force` で GAS に反映
5. **デプロイ**: `clasp deploy` で本番環境に配信

### 🔑 必要な GitHub Secrets
- `CLASP_TOKEN`: Clasp 認証トークン (`~/.clasprc.json` の内容)

## 📚 ドキュメント

- 📖 **[QUICKSTART.md](./QUICKSTART.md)** - 5分でセットアップ
- 🔐 **[AUTH_SETUP.md](./AUTH_SETUP.md)** - 認証設定の詳細手順  
- 🔑 **[GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md)** - GitHub Secrets 設定
- 📊 **[DEPLOYMENT_STATUS.md](./DEPLOYMENT_STATUS.md)** - プロジェクト進捗状況

## 🚨 トラブルシューティング

### よくある問題

**認証エラー**
```bash
clasp logout && clasp login  # 再認証
```

**API エラー**
- Google Apps Script API が有効か確認
- script.google.com の設定でAPIがオンか確認

**プッシュエラー**  
- `.clasp.json` ファイルの存在確認
- スクリプトIDの正確性確認

## 🎯 現在のステータス

- ✅ プロジェクト構造完成
- ✅ GitHub Actions ワークフロー設定済み
- ✅ GitHub リポジトリ作成済み  
- ✅ GitHub Secrets 設定済み (プレースホルダー)
- 🔄 **認証設定が必要** (手動作業)

## 📞 サポート

問題や質問がある場合：
1. 各ドキュメントのトラブルシューティングセクションを確認
2. [Google Apps Script ドキュメント](https://developers.google.com/apps-script) を参照
3. GitHub Issues でサポートを依頼

---

**🎉 認証設定完了後、GitHub にプッシュするだけで自動的に GAS にデプロイされます！**

```
gas-project/
├── 📁 .github/workflows/
│   └── deploy-gas.yml          # GitHub Actions 自動デプロイ
├── 📄 Code.js                  # メインGASコード
├── ⚙️ appsscript.json          # GAS プロジェクト設定
├── 📦 package.json             # npm 設定・scripts
├── 📝 README.md                # このファイル
├── 🚀 QUICKSTART.md            # 5分でセットアップ
├── 🔐 AUTH_SETUP.md            # 認証設定詳細
├── 🔑 GITHUB_SECRETS_SETUP.md  # GitHub Secrets 手順
└── 📊 DEPLOYMENT_STATUS.md     # プロジェクト進捗
```

## 💻 利用可能なコマンド

### 基本操作
