#!/bin/bash

# Clasp 認証トークン設定スクリプト

set -e

echo "🔐 Clasp 認証設定を開始します..."

# 環境変数からトークンを取得
if [ -n "$CLASP_TOKEN" ]; then
    echo "📝 環境変数からトークンを設定中..."
    echo "$CLASP_TOKEN" > ~/.clasprc.json
    echo "✅ 認証トークンが設定されました"
elif [ -f ~/.clasprc.json ]; then
    echo "✅ 既存の認証トークンが見つかりました"
else
    echo "❌ 認証トークンが見つかりません"
    echo ""
    echo "以下のいずれかの方法で認証してください:"
    echo "1. 環境変数 CLASP_TOKEN を設定"
    echo "2. clasp login コマンドを実行"
    echo "3. 手動で ~/.clasprc.json を作成"
    echo ""
    echo "詳細は AUTH_SETUP.md を参照してください"
    exit 1
fi

# トークンの有効性を確認
echo "🔍 認証トークンの有効性を確認中..."
if clasp list > /dev/null 2>&1; then
    echo "✅ 認証トークンは有効です"
else
    echo "❌ 認証トークンが無効です"
    echo "新しいトークンを取得してください"
    exit 1
fi

echo "🎉 認証設定完了！"
