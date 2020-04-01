const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/front'));
app.use(express.static('front'));
app.use(express.static(__dirname + '/front/tailwind'));
app.use(express.static(__dirname + '/front/images/'));

app.listen(port);

app
    .get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '/front/index.html'));
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

module.exports = app;