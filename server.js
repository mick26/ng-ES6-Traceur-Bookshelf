/* ========================================================== 
Michael Cullen
2015

Ref.
http://www.sitepoint.com/?s=ECMAScript+6
http://www.sitepoint.com/writing-angularjs-apps-using-es6/
============================================================ */

'use strict';

/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express = require('express');
var bodyParser = require('body-parser');
var logger   = require('morgan'); //logger middleware
var http = require('http');
require('colors');

/* ========================================================== 
Internal App Modules/Packages Required
============================================================ */
var routes = require('./server/routes.js'); //Exchange routes

/* ========================================================== 
Create a new application with Express
============================================================ */
var app = express();

/* ========================================================== 
Set the Port
============================================================ */
app.set('port', process.env.PORT || 8000);


/**
 * Use Middleware
 */
app.use(express.static(__dirname + '/public')); 
app.use(logger('dev')); //log every request to the console      
app.use(bodyParser.json()); //needed for req.body


/* ========================================================== 
routes - using Express
============================================================ */
routes(app);

/* ========================================================== 
Create HTTP Server using Express
============================================================ */
var server = http.createServer(app);

/* ========================================================== 
Start HTTP Server Listening on a port
============================================================ */
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' .red + app.get('port') );
});




