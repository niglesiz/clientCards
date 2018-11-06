var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/contracts/available', function(req, res, next) {
		var jsonObj = require('../responses/portalAutogestionService/availableContractsResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/enroll', function(req, res, next) {
		var jsonObj = require('../responses/portalAutogestionService/enrollContractsResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/autorenewal/cancel', function(req, res, next) {
		var jsonObj = require('../responses/portalAutogestionService/cancelContractsAutoRenewalResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/active', function(req, res, next) {
		var jsonObj = require('../responses/portalAutogestionService/activeContractsResponse.json')
		res.json(jsonObj);
	});
	api.post('/contracts/availability', function(req, res, next) {
		var jsonObj = require('../responses/portalAutogestionService/checkAvailabilityResponse.json')
		res.json(jsonObj);
	});

    return api;
})();
