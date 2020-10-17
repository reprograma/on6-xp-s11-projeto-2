const express = require('express');
const app = express();

const maravilhosas = require('./routes/maravilhosas-routes');

app.use(express.json());
app.use('/', maravilhosas);

module.exports = app;
