'use strict'

var express = require('express');
var skillsController = require('../controllers/skills');
var api = express.Router();

api.get('/skills', skillsController.displaySkills);

module.exports = api;

