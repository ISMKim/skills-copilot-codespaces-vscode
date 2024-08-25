// Create web server
// Create a web server with Express.js, which listens on port 3000 and serves the comments.json file. The comments file will be saved in the same directory as the comments.js file.

// The comments.json file will contain an array of comments, which will be objects with a comment property. You can create the file manually and add some comments to it.

// You do not need to use AJAX to read the file, just use require to import the JSON file.

// The server should respond to GET requests to the root URL (/) with the comments.json file.

// The comments.json file will be read each time it is requested, so if you modify the file while the server is running and then refresh the page, you should see the updated comments.

// Don't forget to install the express module if you haven't already.

// $ npm install express

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred');
      return;
    }
    const comments = JSON.parse(data);
    res.json(comments);
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});