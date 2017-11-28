/**
 * Include require libraries
 */
const fs = require('fs'); // File System
const express = require('express'); // Router, server or whatever you call

// Initiate this app
const app = express();

// Register a simple middleware to get the IP, method, and URL the client is requesting
// and write the output to the console and `server.log` file using synchronous method.
app.use((request, response, next) => {
    let output = `New connection from ${request.ip} :: ${request.method} ${request.url}`;
    fs.appendFileSync('server.log', output + '\n'); // Append to `server.log` file.
    console.log(output); // Output the data to console

    next(); // Continue with the code execution.
});


// Home page of the website (root)
app.get('/', (request, response) => response.send('Hello World'));

// Listen for connections
app.listen(3000, () => console.log('Listening for connections on port 3000'));
