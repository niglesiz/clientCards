var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();
	api.post('/', function(req, res, next) {
		var body = req.body['soap-env:envelope']['soap-env:body'][0];
		console.log(body);
		if('ns2:findcommerces' in body){
			console.log(body[0] + "asdasd");
			respondCommerces(req,res);
			return;
		}
		if('ns2:balancesummaryquery' in body){
			respondBalanceSummary(req,res);
			return;
		}
		res.send();		
	});

	function respondCommerces(req, res) {
		console.log("findCommerces");
		var compiledFunction = pug.compileFile('responses/findCommerces/findCommercesResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}

	function respondBalanceSummary(req, res) {
		console.log("balance");
		var compiledFunction = pug.compileFile('responses/balanceSummary/balanceSummaryResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
    return api;
})();

