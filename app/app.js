const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/v1/', function (req, res) {
    res.json({
        message: "hello"
    });
});

app.listen(port);
console.log('PORT:' + port);