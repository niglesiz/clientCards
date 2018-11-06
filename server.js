//Dependencies
var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    xmlparser = require('express-xml-bodyparser'),
  	xml = require('xml');

//Midelware configurations
app.use(express.json());
app.use(xmlparser());

//Routers
var userServicesRoutes = require('./routes/userServices');

//Routes
app.use('/dashboardService/getClientCards', userServicesRoutes);

//Start server
console.log('Firstdata mock server starting at port:' + (process.env.PORT || 5000));

app.listen(process.env.PORT || 5000);
