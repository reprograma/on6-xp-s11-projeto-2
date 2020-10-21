const express = require('express');
const app = express();

const cors = require('cors');

const maravilhosas = require('./routes/maravilhosas-routes');

app.use(cors());
app.use(express.json());
app.use('/', maravilhosas);

module.exports = app;
