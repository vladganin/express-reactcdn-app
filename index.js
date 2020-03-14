const express = require('express');
const path = require('path');
var http = require('http');
const port = 3000;

const app = express();
var server = http.createServer(app);



/*app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

/*app.get('/', (req, res) => res.send(htmlfile)) */

app.use(express.static(__dirname + '/front'));

app
    .get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'index.html'));
    });


server.listen(3000, 'localhost');
server.on('listening', function () {
    console.log('Server started. %s at %s', server.address().port, server.address().address);
});