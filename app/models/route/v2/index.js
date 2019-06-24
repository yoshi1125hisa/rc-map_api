const express = require('express');
const router = express.Router();

// routeの設定で/はindexを参照する
// router.get('/', function (req, res) {
//     res.json({
//         message: "Hello,world"
//     });
// });

// v1/route をroute.jsとみる
router.use('/route', require('./route.js'));
router.use('/prefecture', require('./prefecture.js'))

// module
module.exports = router;
