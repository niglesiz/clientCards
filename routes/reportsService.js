var express = require('express');
const pug = require('pug');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.post('/', function(req, res, next) {
		var compiledFunction = pug.compileFile('responses/reports/reportsResponse.pug');
		var buffer = compiledFunction({});
		res.set('Content-Type', 'text/xml');
		res.send(buffer);
	});

    return api;
})();

