const express = require('express');
const router = express.Router();
const RouteModel = require('../../routeModel');

// GET  http://localhost:3000/api/v1/route/test
router.get('/', function (req, res) {
    RouteModel
        .find()
        .then(function (routes) {
            res.json(routes);
        });
});

router.get('/:id', function (req, res) {

    var Routeid = req.params.id;
    RouteModel
        .findById(Routeid, function (err, route) {
            res.json(route);
        });
});

router.put('/:id', function (req, res) {

    var Routeid = req.params.id;

    RouteModel
        .findById(Routeid, function (err, route) {
            if (err) {
                res.send(err);
            } else {

                route.rc_name = req.body.rc_name;

                route.save(function (err) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json({
                            message: 'Success!'
                        });
                    }
                });
            }
        });
});

router.post('/', function (req, res) {

    // モデル作成．
    var Route = new RouteModel();

    // データを詰め込む
    Route.rc_name = req.body.rc_name;

    // 保存処理
    Route.save(function (err) {
        if (err) {
            // エラーがあった場合エラーメッセージを返す
            res.send(err);
        } else {
            // エラーがなければ「Success!!」
            res.json({
                message: 'Success!!'
            });
        }
    });
});

//routerをモジュールとして扱う準備
module.exports = router;