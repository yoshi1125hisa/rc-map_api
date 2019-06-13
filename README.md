# 踏切マップ - API

## 開発環境
- Docker
- node.js (Express)
- mongodb

## 開発手順

以下必須

```
$ git clone <this_repository>
$ cd <this_repository>
```

### ローカル

#### パッケージインストール

```
$ npm i
```

#### 実行

```
$ npm run start
```

http://localhost:3000 にアクセス

### Docker

#### ビルド

```
$ docker build -t rc-map_api .
```

#### 実行

```
$ docker run -p 3000:3000 -t rc-map_api
```

---

## MongoDBについてのメモ

### 起動

```
$ sudo mongod --dbpath /var/db/
```

### データベースの作成

```
$ mongo
>use <DB_NAME>
```

### コレクションの作成

```
>db.createCollection('<COLLECTION_NAME>')
```

`{ "ok" : 1 }` と返って来れば問題ありません

### コレクションの確認

```
>show collections
```

### 終了

```
> quit()
```