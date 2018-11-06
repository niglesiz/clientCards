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
		console.log( "CAC");
		console.log( JSON.stringify(body));

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
		
		console.log("Cac:advancedsalesavailability") ;
		if(ns2+'advancedsalesavailability' in body){
			console.log("advancedsalesavailability X") ;
			advancedSalesAvailability(req,res);
			return;
		}
		
		res.send();
	});

	function checkAvailability(req, res) {
		var compiledFunction = pug.compileFile('responses/cac/checkAvailabilityResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function availableContracts(req, res) {
		var compiledFunction = pug.compileFile('responses/cac/availableContractsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function activeContracts(req, res) {
		var compiledFunction = pug.compileFile('responses/cac/activeContractsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function cancelContractsAutoRenewal(req, res) {
		var compiledFunction = pug.compileFile('responses/cac/cancelContractsAutoRenewalResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function enrollContracts(req, res) {
		var compiledFunction = pug.compileFile('responses/cac/enrollContractsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function advancedSalesAvailability(req, res) {
		var compiledFunction = pug.compileFile('responses/cac/advancedSalesAvailabilityResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}

    return api;
})();
