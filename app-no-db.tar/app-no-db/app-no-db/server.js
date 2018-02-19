/*
This code is where the http server is set up to listen on some 
port and the routes are set up.
*/


var express = require('express');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(require('./controllers/index.js'));

var server = app.listen(PORT, function () {
    console.log('Server listening on', PORT);
});