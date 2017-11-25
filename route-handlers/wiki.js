// wiki.js - Wiki route module

var express = require('express');

// Create wiki route using the express.Router object
var router = express.Router();

/**
 * Home route of the wiki route (/wiki)
 * This page can be accessed by going to http://example.com:3000/wiki/
 */
router.get('/', (req, res) => {
  res.send('Wiki home page');
});

/**
 * About route of the wiki route (/wiki/about)
 * This page can be accessed by going to http://example.com:3000/wiki/about/
 */
 router.get('/about', (req, res) => {
   res.send('About this wiki');
 });

 module.exports = router;
