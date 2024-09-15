const http = require('node:http');

const server = http.createServer(function (req, res) {

    if (req.url === '/getSecretData') {
        res.end("You have access to the secret data");
    }

    res.end('Hello World!');

});

server.listen(3000);