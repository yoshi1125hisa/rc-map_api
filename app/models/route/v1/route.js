var express = require('express');
var router = express.Router();

// GET  http://localhost:3000/api/v1/route/test
router.get('/test', function (req, res) {
    res.json({
        message: "This is route api"
    });
});

//routerをモジュールとして扱う準備
module.exports = router;