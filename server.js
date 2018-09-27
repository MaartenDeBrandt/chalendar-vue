// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

// create the express app
app = express();

// create middleware to handle the serving the app
app.use(serveStatic(path.join(__dirname, 'dist')));

// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

// Create default port to serve the app on
const port = process.env.PORT || 5000;
app.listen(port);

// Log to feedback that this is actually running
console.log('server started '+ port);