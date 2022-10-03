var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");


// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "blog.html"));
});


app.get("/article", (req, res) => {
    res.sendFile(path.join(__dirname, "article.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});



// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
