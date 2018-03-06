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
var findCommercesRoutes = require('./routes/findCommerces');
var reportsRoutes = require('./routes/reportsService');
var alertServiceRoute = require('./routes/alertService');
var premiumServiceRoute = require('./routes/premiumService');
var valServiceRoute = require('./routes/portalAutogestionService');
var portalAutogestionServiceRoute = require('./routes/portalAutogestionService');


//Routes
app.use('/fdcomar-services/userServices', userServicesRoutes);
app.use('/fdcomar-services/commerceQueryServices' , findCommercesRoutes)
app.use('/fdcomar-services/reportServices' , reportsRoutes)
app.use('/fdcomar-services/alertService' , alertServiceRoute);
app.use('/fdcomar-services/commerceServices' , premiumServiceRoute);
app.use('/fd-advanced-sale-services/valServices' , portalAutogestionServiceRoute);
app.use('/fd-advanced-sale-services/advancedSalesServices', portalAutogestionServiceRoute);
 

//Start server
console.log('Firstdata mock server starting at port:' + (process.env.PORT || 5000));

app.listen(process.env.PORT || 5000);
