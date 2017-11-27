var express = require('express');
var logger = require('morgan');

// Init app
var app = express();

// Add the HTTP request logger to the middleware handling path
app.use(logger('dev'));

/**
 * Secret route (/secret)
 * This page can be accessed by going to http://example.com:3000/secret
 * Route which will be called in response to any HTTP method
 */
app.all('/secret', (req, res) => {
  console.log('Accessing the secret section ...');
  res.send('Hello World!');
});

/**
 * Listen for connections on port 3000
 */
app.listen(3000, () => console.log('Started listening for connections on port 3000'));
