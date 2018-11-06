var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/contracts/available', function(req, res, next) {
		var jsonObj = require('../responses/cac/availableContractsResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/enroll', function(req, res, next) {
		var jsonObj = require('../responses/cac/enrollContractsResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/autorenewal/cancel', function(req, res, next) {
		var jsonObj = require('../responses/cac/cancelContractsAutoRenewalResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/active', function(req, res, next) {
		var jsonObj = require('../responses/cac/activeContractsResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/availability', function(req, res, next) {
		var jsonObj = require('../responses/cac/checkAvailabilityResponse.json')
		res.json(jsonObj);
	});
	
    return api;
})();
