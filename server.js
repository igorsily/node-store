const app = require("./src/app");
const http = require("http");
const debug = require("debug")("nodestore:server");

const port = normalizePort(process.env.PORT || "3001");

app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server UP");
})

server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {

    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port => 0) {
        return port;
    }

    return false;

}

function onError(err) {

    if (err.syscall !== "liste") {
        throw err;
    }

    const bind = typeof port === "string" ? "Pipe" + port : "Port" + port;

    switch (err.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw err;
    }

}

function onListening() {

    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port" + addr.port;

    debug("Listening on " + bind);

}