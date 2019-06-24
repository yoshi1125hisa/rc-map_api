'use strict';

const path = require('path');

const express = require('express');
const app = express();
app.set('port', 3000);
const bodyParser = require('body-parser');

app.use('/v1', express.static(path.join(__dirname, '/v1')));

const http = require('http');
const server = http.createServer(app);

app.use(function (req, res, next) {
    const err = new Error('errorMessage.urlNotFound');
    err.status = 404;
    next(err);
});

if ('development' === app.get('env')) {
    const errorHandler = require('errorhandler');
    app.use(errorHandler());
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// const port = process.env.PORT || 3000;

// app.get('/v2/', function (req, res) {
//     res.json({
//         message: "Hello, RC-Map API!"
//     });
// });

// const router = require('./models/route/v2');
// app.use('/v2/', router);

server.listen(app.get('port'));


