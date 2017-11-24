var express = require('express');

// Init App
var app = express();

/**
 * Home route.
 * Can be accessed by going to http://example.com:3000/
 */
app.get('/', (req, res) => res.send('Hello World'));

/**
 * Starts the webserver (router) in port 3000
 * Website can be accessed by going to http://example.com:3000/
 */
app.listen(3000, () => console.log('Server started on port 3000'));