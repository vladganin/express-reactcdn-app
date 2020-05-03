const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/front'));
app.use(express.static('front'));
app.use(express.static(__dirname + '/front/tailwind'));
app.use(express.static(__dirname + '/front/images/'));
app.use(express.static(__dirname + '/front/react-components/components'));
app.use(express.static(__dirname + '/front/react-components'));

app.listen(port);

app
    .get('/', function (req, res) {
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

app
    .get('/dashboard', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'tailwind/dashboard/dashboard.html'));
    });

app
    .get('/react-component-card', function (req, res) {
        res.sendFile(path.join(__dirname, 'front', 'react-components/card.html'));
    });

module.exports = app;