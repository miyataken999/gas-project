# 🚀 GAS プロジェクト クイックスタートガイド

このガイドに従って、Google Apps Script プロジェクトを5分で稼働させましょう！

## 📋 事前準備チェックリスト

- [ ] Google アカウント
- [ ] Google Apps Script へのアクセス権限
- [ ] GitHub アカウント（設定済み）

## 🔧 ステップ1: Google Apps Script API 有効化

### 1.1 Google Cloud Console
```
1. https://console.cloud.google.com/ にアクセス
2. プロジェクトを選択（または新規作成）
3. 「APIとサービス」→「ライブラリ」
4. "Google Apps Script API" を検索
5. 「有効にする」をクリック
```

### 1.2 Apps Script 設定
```
1. https://script.google.com/home/usersettings にアクセス
2. 「Google Apps Script API」をオンにする
```

## 🔐 ステップ2: 認証設定

### 2.1 ローカル認証
```bash
cd /workspaces/gpt-engeneer/gas-project
clasp login
```

ブラウザが開いたら：
1. Google アカウントでログイン
2. 権限を許可
3. 認証コードが表示されたらターミナルに貼り付け

### 2.2 認証トークン取得
```bash
# トークンを確認
cat ~/.clasprc.json

# GitHub Secrets に設定
gh secret set CLASP_TOKEN < ~/.clasprc.json
```

## 📝 ステップ3: GAS プロジェクト作成

### 3.1 新しいプロジェクト作成
```bash
cd /workspaces/gpt-engeneer/gas-project
clasp create --type standalone --title "My GAS Project"
```

### 3.2 または既存プロジェクトを使用
```bash
# スクリプトIDを取得してクローン
clasp clone YOUR_SCRIPT_ID
```

## ✅ ステップ4: 動作確認

### 4.1 手動テスト
```bash
# コードをプッシュ
npm run push

# エディタを開く
npm run open
```

### 4.2 自動デプロイテスト
```bash
# テストコミット
git commit -m "Test auto-deploy" --allow-empty
git push
```

### 4.3 GitHub Actions 確認
```bash
# ワークフロー実行を確認
gh run list --limit 3
```

## 🎯 完了確認

以下がすべて ✅ になれば成功です：

- [ ] `clasp list` でプロジェクトが表示される
- [ ] `npm run push` でエラーが出ない
- [ ] `npm run open` でGASエディタが開く
- [ ] GitHub Actions が成功する
- [ ] GAS エディタでコードが確認できる

## 🚨 トラブルシューティング

### 認証エラー
```bash
# ログアウトして再ログイン
clasp logout
clasp login
```

### API エラー
- Google Apps Script API が有効になっているか確認
- script.google.com の設定でAPIがオンになっているか確認

### プッシュエラー
- `.clasp.json` ファイルが存在するか確認
- スクリプトIDが正しいか確認

## 📚 参考資料

- [AUTH_SETUP.md](./AUTH_SETUP.md) - 詳細な認証設定
- [GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md) - GitHub Secrets 設定
- [README.md](./README.md) - プロジェクト概要

## 🆘 ヘルプ

問題が発生した場合：
1. エラーメッセージを確認
2. 上記のトラブルシューティングを試す
3. Google Apps Script の公式ドキュメントを参照
4. GitHub Issues でサポートを求める

---

**🎉 設定完了後は、GitHub にプッシュするだけで自動的にGASにデプロイされます！**
