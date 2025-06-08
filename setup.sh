#!/bin/bash

# GAS プロジェクトセットアップスクリプト

echo "🚀 Google Apps Script プロジェクトのセットアップを開始します..."

# 1. Clasp ログイン確認
echo "📋 Clasp の認証状況を確認中..."
if ! clasp login --status > /dev/null 2>&1; then
    echo "❌ Clasp にログインしていません。"
    echo "📝 次のコマンドでログインしてください:"
    echo "   clasp login"
    echo ""
    echo "💡 ヒント: ブラウザが開かない場合は、出力されたURLを手動でブラウザで開いてください。"
    exit 1
fi

echo "✅ Clasp ログイン済み"

# 2. .clasp.json の存在確認
if [ ! -f .clasp.json ]; then
    echo "📝 新しい GAS プロジェクトを作成しますか？ (y/n)"
    read -r create_new
    
    if [ "$create_new" = "y" ] || [ "$create_new" = "Y" ]; then
        echo "🔧 新しい GAS プロジェクトを作成中..."
        clasp create --type standalone --title "Gas Project"
        echo "✅ GAS プロジェクトが作成されました"
    else
        echo "📝 既存のプロジェクトのスクリプトIDを入力してください:"
        read -r script_id
        echo "{\"scriptId\":\"$script_id\"}" > .clasp.json
        echo "✅ 既存プロジェクトに接続しました"
    fi
else
    echo "✅ .clasp.json が見つかりました"
fi

# 3. ファイルをプッシュ
echo "📤 ファイルを GAS にプッシュ中..."
if clasp push; then
    echo "✅ プッシュ完了"
else
    echo "❌ プッシュに失敗しました"
    exit 1
fi

# 4. プロジェクト情報を表示
echo "📊 プロジェクト情報:"
clasp open --webapp || clasp open || echo "プロジェクトURLを取得できませんでした"

echo ""
echo "🎉 セットアップ完了！"
echo ""
echo "📝 次のステップ:"
echo "1. GitHub リポジトリを作成"
echo "2. CLASP_TOKEN シークレットを設定"
echo "3. コードをプッシュして自動デプロイをテスト"
