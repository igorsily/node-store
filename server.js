const express = require("express");
const http = require("http");
const debug = require("debug")("nodestore:server");


const app = express();
const port = 3001;

const server = http.createServer(app);
const router = express.Router();

server.listen(port, () => {
    console.log("Server UP");
})