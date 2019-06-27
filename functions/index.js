const functions = require('firebase-functions');
var admin = require("firebase-admin");

const serviceAccount = require("./railroadcrossing-1555889111567-firebase-adminsdk-4nx2c-dc0208f00e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://railroadcrossing-1555889111567.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("data");

const express = require('express');
const app = express();


exports.app = functions.https.onRequest((req, res) => {

  app.get('/timestamp', (request, response) => {
    response.send(`${Date.now()}`);
  });

  app.get('/all', (request, response) => {
    // response.send("This is All endpoint");
    /*　room1以下に対しての非同期コールバック */
    ref.on("value", function (snapshot) {
        /* ここに取得したデータを用いた何らかの処理 */
        response.send(snapshot.val());
        console.log(snapshot.val());
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  });

  app.get('/prefecture', (request, response) => {
    response.send("This is All endpoint");
  });
})