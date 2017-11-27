var express = require('express');
var wiki = require('./wiki');

// Init app
var app = express();

// Add the Router to the middleware handling path
app.use('/wiki', wiki);

/**
 * Secret route (/secret)
 * This page can be accessed by going to http://example.com:3000/secret
 * Route which will be called in response to any HTTP method
 */
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

/**
 * Listen for connections on port 3000
 */
app.listen(3000, () => console.log('Started listening for connections on port 3000'));
