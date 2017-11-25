var express = require('express');
var square = require('./square');

// Init app
var app = express();

/**
 * Home route (/)
 * This page can be accessed by going to http://example.com:3000/
 */
app.get('/', (req, res) => res.send('The area of square with width 4 is' + square.area(4)
  + '<br> The perimter of square with width 4 is ' + square.perimeter(4)));

/**
 * Listen for connections on port 3000
 */
app.listen(3000, () => console.log('Started listening for connections on port 3000'));
