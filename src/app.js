const express = require("express");
const bodyParser = require("body-parser");
const requireDir = require("require-dir");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodestore", {
    useNewUrlParser: true,
    useCreateIndex: true
});

requireDir("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", require("./routes"));

module.exports = app;