var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/', function(req, res, next) {
		var soap = '';
		if ( req.body['soap-env:'+'envelope'] != undefined)
			soap = 'soap-env:' ;

		var ns2 = 'ns2:';

		var body = req.body[soap+'envelope'][soap+'body'][0] || '';
		console.log('body :' + body );

		if(ns2+'checkavailability' in body){
			checkAvailability(req,res);
			return;
		}
		
		if(ns2+'availablecontracts' in body){
			availableContracts(req,res);
			return;
		}
		
		if(ns2+'activecontracts' in body){
			activeContracts(req,res);
			return;
		}
		
		if(ns2+'cancelcontractsautorenewal' in body){
			cancelContractsAutoRenewal(req,res);
			return;
		}
		
		if(ns2+'enrollcontracts' in body){
			enrollContracts(req,res);
			return;
		}
		
		if(ns2+'advancedsalesavailability' in body){
			advancedSalesAvailability(req,res);
			return;
		}
		
		res.send();
	});

	function checkAvailability(req, res) {
		var compiledFunction = pug.compileFile('responses/portalAutogestionService/checkAvailabilityResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function availableContracts(req, res) {
		var compiledFunction = pug.compileFile('responses/portalAutogestionService/availableContractsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function activeContracts(req, res) {
		var compiledFunction = pug.compileFile('responses/portalAutogestionService/activeContractsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function cancelContractsAutoRenewal(req, res) {
		var compiledFunction = pug.compileFile('responses/portalAutogestionService/cancelContractsAutoRenewalResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function enrollContracts(req, res) {
		var compiledFunction = pug.compileFile('responses/portalAutogestionService/enrollContractsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function advancedSalesAvailability(req, res) {
		var compiledFunction = pug.compileFile('responses/portalAutogestionService/advancedSalesAvailabilityResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}

    return api;
})();
