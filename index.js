var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts")
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts)
app.use(express.static(__dirname + "/public/"));


app.get("/", function(req, res){
  res.render("main/home")
});

var server = app.listen(process.env.PORT || 5000, function() {
});


module.exports = server;
