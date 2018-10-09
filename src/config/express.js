const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.render('homepage.hbs');
});

const authController = require('../server/auth/auth.controller.js');
const episodeController = require('../server/episode/episode.controller.js');
const characterController = require('../server/character/character.controller.js');

app.use('/portlandia/user', authController);
app.use('/portlandia/episode', episodeController);
app.use('/portlandia/character', characterController);

    // 404 page

app.get('*', (req, res) => {
  res.render('error/index.hbs');
  return res.status(404);
});

// #TODO: Additional non-API routes go here.

module.exports = app;
