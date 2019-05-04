let express = require('express');
let router = express.Router();

// localhost:3000/sample にアクセスでJSONを返す
router.get('/', function(req, res, next) {
    let param = {
        "値": "SAMPLE"
    };
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(param);
});

// localhost:3000/sample/hello にGETするとJSONで返す

router.get('/hello', function(req, res, next) {
    let param = {
        "result": "Hello!"
    };
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send(param);
});

module.exports = router;