var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/', function(req, res, next) {
		var jsonObj = require('../responses/cac/availableContractsResponse.json')
		res.json(jsonObj);
	});
	
    return api;
})();
