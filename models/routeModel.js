const mongoose = require('mongoose'); //mongoDBに接続するためのライブラリ
const Schema = mongoose.Schema; //mongoDBのスキーマを作る
const moment = require('moment');

const RouteSchema = new Schema({
    rc_id: {
        type: Number,
        min: 1,
        max: 20
    },
    rc_address: String,
    rc_name: String,
    rc_kana: String,
    lat: Number,
    lng: Number,
    transportation_bureau: String,
    prefecture_name: String,
    route_name: String,
    create_time: Date
});

RouteSchema.methods.setDate = function () {
    //作った時間をセット
    this.create_date = moment().format("YYYY-MM-DD HH:mm:ss");
};

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('RouteModel', RouteSchema);