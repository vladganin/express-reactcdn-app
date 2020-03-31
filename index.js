const express = require('express');
const path = require('path');
const PORT = process.env.PORT;
const app = express();

var server = app.listen(PORT, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Server started. Listening at ${port}`);
})

app.use(express.static(__dirname + '/front'));
app.use(express.static(__dirname + '/front/tailwind'));
app.use(express.static(__dirname + '/front/images/'));

app
    .get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'index.html'));
    });

app
    .get('/main', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'tailwind/main.html'));
    });

app
    .get('/main/front/images/car.jpg', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'images/car.jpg'));
    });


app
    .get('/wiki-cards', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'tailwind/wikicard.html'));
    });
