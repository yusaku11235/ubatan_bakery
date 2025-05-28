# ベースイメージとしてNode.jsを使用
FROM node:23-alpine3.20

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY ./breadstore_ecsite_nextjs/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY ./breadstore_ecsite_nextjs ./

# Next.jsアプリをビルド
RUN npm run build

# アプリケーションを起動するポートを指定
EXPOSE 3000

# デフォルトのコマンド
CMD ["npm", "start"]