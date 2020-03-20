const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

var server = app.listen(PORT, "127.0.0.1", () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Server started. Listening on: ${host} at ${port}`);
})

app.use(express.static(__dirname + '/front'));
app.use(express.static(__dirname + '/front/tailwind'));

app
    .get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'index.html'));
    });

app
    .get('/main', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'tailwind/main.html'));
    });