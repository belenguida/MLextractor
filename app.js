'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express(); //creo objeto express

//cargar rutas
var skills_routes = require('./routes/skills');
var parser_routes = require('./routes/parse');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convertir a json los datos que llegan por http


//rutas base
app.use('/api', skills_routes);
app.use('/api', parser_routes);

module.exports = app;
