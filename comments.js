// Create web server
// Create a web server that listens to incoming requests on port 3000. The server should respond with the following:
// A header with status code 200.
// A response in the form of an array of comments, as defined in the comments.js file.
// The server should be implemented using the Express.js framework.
// The server should respond to the following routes:
// GET /comments
// The server should respond with a JSON array of comments.
// GET /comment/:id
// The server should respond with a single comment, as specified by an ID in the URL.

const express = require('express');
const comments = require('./comments.js');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.status(200).json(comments);
});

app.get('/comments/:id', (req, res) => {
    let comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        res.status(200).json(comment);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
