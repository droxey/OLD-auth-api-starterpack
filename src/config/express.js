const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require("mongoose");

const app = express();

const cookieParser = require("cookie-parser");

const methodOverride = require("method-override");

const morgan = require("morgan");

const hbs = require("express-handlebars");

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());
// app.use(express.json());
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Set the view engine and file extension
app.engine("hbs", hbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");


//USER AUTH
var checkAuth = (req, res, next) => {
    if (
        typeof req.cookies.nToken === "undefined" ||
        req.cookies.nToken === null
    ) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }

    next();
};
app.use(checkAuth);

//const authController = require('../server/auth/auth.controller.js');
const episodeController = require('../server/episode/episode.controller.js');
//const characterController = require('../server/character/character.controller.js');

//app.use('/portlandia/user', authController);
app.use('/portlandia/episode', episodeController);
//app.use('/portlandia/character', characterController);

app.get('/', (req, res) => {
  res.render('homepage.hbs');
});


    // 404 page

app.get('*', (req, res) => {
  res.render('error/index.hbs');
  return res.status(404);
});

// #TODO: Additional non-API routes go here.

module.exports = app;
