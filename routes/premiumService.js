var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/', function(req, res, next) {
		var body = req.body['soap-env:envelope']['soap-env:body'][0];
		console.log("PremiumService");
		if('ns2:subscribepremiumreq' in body){
			subscribepremium(req,res);
			return;
		}
		
		if('ns2:unsubscribepremiumreq' in body){
			unsubscribepremium(req,res);
			return;
		}
		
		res.send();		
	});
	
	function subscribepremium(req, res) {
		var compiledFunction = pug.compileFile('responses/premiumService/subscribePremiumResponse.pug');
		var buffer = compiledFunction({});
		console.log(buffer)
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function unsubscribepremium(req, res) {
		var compiledFunction = pug.compileFile('responses/premiumService/unsubscribePremiumResponse.pug');
		var buffer = compiledFunction({});
		console.log(buffer)
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}

    return api;
})();

