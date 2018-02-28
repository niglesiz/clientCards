var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/', function(req, res, next) {
		var body = req.body['soap-env:envelope']['soap-env:body'][0];

		if('ns2:findalertsbyuser' in body){
			findAlertsByUser(req,res);
			return;
		}
		
		if('ns2:suscribealert' in body){
			suscribeAlert(req,res);
			return;
		}
		
		if('ns2:unsuscribealert' in body){
			unsuscribeAlert(req,res);
			return;
		}
		
		res.send();		
	});

	function findAlertsByUser(req, res) {
		var compiledFunction = pug.compileFile('responses/alertService/findAlertsByUserResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function suscribeAlert(req, res) {
		var compiledFunction = pug.compileFile('responses/alertService/suscribeAlertResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}
	
	function unsuscribeAlert(req, res) {
		var compiledFunction = pug.compileFile('responses/alertService/unsuscribeAlertResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	}

    return api;
})();

