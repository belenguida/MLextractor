'use strict'

var express = require('express');
var parserController = require('../controllers/parser');
var api = express.Router();

api.get('/parse', parserController.parsePdf);

module.exports = api;