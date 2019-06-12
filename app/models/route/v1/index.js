const express = require('express');
const router = express.Router();

// routeの設定で/はindexを参照する
router.get('/', function (req, res) {
    res.json({
        message: "Hello,world"
    });
});

// module
module.exports = router;
