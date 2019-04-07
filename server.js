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
server.on("error", onError);

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

onError = err => {

    if (err.syscall !== "liste") {
        throw err;
    }

    const bind = typeof port === "string" ? "Pipe" + port : "Port" + port;

    switch (err.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1)
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1)
            break;
        default:
            throw err;
    }

}