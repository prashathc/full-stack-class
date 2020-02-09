'use strict';

const express = require('express');
const app = express();

app.get('/html', (req, res) => {
    response.send('hello world');
})

app.get('/json', (req, res) => {
    response.json('hello world');
})