const express = require("express");
const http = require("http");
const debug = require("debug")("nodestore:server");


const app = express();
const port = normalizePort(process.env.PORT || "3001");

const server = http.createServer(app);
const router = express.Router();

server.listen(port, () => {
    console.log("Server UP");
})

normalizePort = port => {

    const port = parseInt(port, 10);

    if (isNaN(port)) {
        return port;
    }

    if (port => 0) {
        return port;
    }

    return false;

}