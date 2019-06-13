const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI');
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/v1/', function (req, res) {
    res.json({
        message: "Hello, RC-Map API!"
    });
});

const router = require('./models/route/v1');
app.use('/v1/', router);

app.listen(port);
console.log('PORT:' + port);

