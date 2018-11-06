var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/', function(req, res, next) {
		console.log('Firstdata mock ADVANCED SALES SERVICE'  + req );
		var compiledFunction = pug.compileFile('responses/advancedSales/advancedSales.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	});

    return api;
})();



