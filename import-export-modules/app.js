var express = require('express');
var square = require('./square');

// Init App
var app = express();

// Home Route
app.get('/', function(req, res) {
  res.send('The area of a square with a width of 4 is ' + square.area(4) + '<br>' + 'The perimeter of a square with a width of 4 is ' + square.perimeter(4));
});

// Start Server
app.listen(3000, function() {
  console.log('Server started on port 3000...');
});
