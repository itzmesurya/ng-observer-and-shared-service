var express = require("express");
var app = express();

// creating a static location for the 
// resources - node starts to look into
// static paths
// 1. adding "public" folder.
app.use(express.static("src/client"));

// adding a basic route
app.get("/*", function (req, res) {
    res.sendfile("./src/client/index.html");
});

// port to be used for listening
var port = 5000;

// listening to the port
app.listen(port, function () {
    console.log("Message from server.js: Listening on port : " + port);
});