const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const { connectToDB } = require("./config/db");

const app = express();
const port = 8000;
(async () => {
    await connectToDB();
  })();
require('./app/routes/user')(app, {});app.listen(port, () => {  console.log('We are live on ' + port);});