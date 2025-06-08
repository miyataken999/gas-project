# Google Apps Script プロジェクト デプロイメント状況

## プロジェクト概要
- **プロジェクト名**: gas-project
- **GitHub リポジトリ**: https://github.com/miyataken999/gas-project
- **作成日**: 2025-06-08

## セットアップ状況

### ✅ 完了項目
1. **プロジェクト構造作成** - 基本的なファイル構造とディレクトリを作成
2. **Clasp インストール** - `@google/clasp` をグローバルにインストール
3. **Package.json 設定** - npm scripts と依存関係を設定
4. **GitHub Actions ワークフロー** - 自動デプロイ用の `.github/workflows/deploy-gas.yml` を作成
5. **Git リポジトリ初期化** - ローカル Git リポジトリを初期化
6. **GitHub リポジトリ作成** - `miyataken999/gas-project` リポジトリを作成
7. **コードプッシュ** - 初期コードを GitHub にプッシュ
8. **GitHub Secrets 設定** - `CLASP_TOKEN` シークレットを設定（テンプレート）

### 🔄 次のステップ
1. **Google Apps Script API 有効化**
   - Google Cloud Console で API を有効化
   - Apps Script 設定で API をオンにする

2. **Clasp 認証**
   - `clasp login` で認証
   - 実際のトークンを取得

3. **GAS プロジェクト作成**
   - `clasp create` で新しいプロジェクト作成
   - または既存プロジェクトをクローン

4. **実際のトークン設定**
   - 実際の認証トークンで `CLASP_TOKEN` を更新

5. **デプロイテスト**
   - GitHub Actions ワークフローをテスト

## ファイル構造
```
gas-project/
├── .github/workflows/
│   └── deploy-gas.yml          # GitHub Actions ワークフロー
├── .gitignore                  # Git 除外設定
├── AUTH_SETUP.md              # 認証設定ガイド
├── GITHUB_SECRETS_SETUP.md    # GitHub Secrets 設定手順
├── README.md                  # プロジェクト説明
├── Code.js                    # メインのGASコード
├── appsscript.json           # GAS プロジェクト設定
├── package.json              # npm 設定
├── tsconfig.json             # TypeScript 設定
├── setup.sh                 # プロジェクトセットアップスクリプト
├── setup-auth.sh            # 認証設定スクリプト
└── clasp-token-template.json # 認証トークンテンプレート
```

## GitHub Actions ワークフロー機能
- **自動トリガー**: main ブランチへのプッシュとPR
- **Node.js 18** 環境での実行
- **Clasp インストール** と認証設定
- **自動プッシュ**: `clasp push --force`
- **自動デプロイ**: main ブランチのみ
- **エラーハンドリング**: 設定検証とエラー表示

## 使用可能な NPM Scripts
```bash
npm run push      # clasp push
npm run pull      # clasp pull  
npm run deploy    # clasp deploy
npm run open      # clasp open
npm run logs      # clasp logs
npm run login     # clasp login
npm run create    # clasp create --type standalone
npm run clone     # clasp clone
```

## 認証設定
- **Google Apps Script API**: 要有効化
- **認証方法**: OAuth 2.0 または サービスアカウント
- **必要スコープ**: `https://www.googleapis.com/auth/script.projects`

## 次回のアクション
1. `AUTH_SETUP.md` の手順に従って認証を設定
2. `./setup.sh` スクリプトを実行してプロジェクトをセットアップ
3. GitHub で実際のワークフローをテスト
