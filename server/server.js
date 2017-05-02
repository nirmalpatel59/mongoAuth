const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dbVal = require('./utilities/connection');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use("/",require("./controller/authController.js"))
app.listen(5000,function() {
    console.log("server listing on port", 5000);
});
