var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("yash sanjay patel - 150249217");
});

app.get("/blog", (req, res) => {
    res.redirect("/blog");
});
app.get("/article", (req, res) => {
    res.redirect("/article");
});
app.get("/login", (req, res) => {
    res.redirect("/login");
});



// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
