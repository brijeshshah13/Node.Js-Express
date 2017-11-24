var express = require('express');

// Init App
var app = express();

// Home Route
app.get('/', function(req, res){
  res.send('Hello World!');
});

// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
