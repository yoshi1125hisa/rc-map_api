const functions = require('firebase-functions');
const express = require('express');

const app = express();


exports.app = functions.https.onRequest((req, res) => {

  app.get('/timestamp', (request, response) => {
    response.send(`${Date.now()}`);
  });

  app.get('/all', (request, response) => {
    response.send("This is All endpoint");
  });

  app.get('/prefecture', (request, response) => {
    response.send("This is All endpoint");
  });
})