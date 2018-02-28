var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts")
var isLoggedIn = require("./middleware/isLoggedIn")
var mtg = require("mtgsdk");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts)
app.use(express.static(__dirname + "/public/"));


app.get("/", function(req, res){
  // mtg.card.where({
  //   set: "CSP"
  // })
  // .then(result => {
  //   console.log(result)
    res.render("main/home")
  });

app.get("/login", function(req, res){
  res.render("main/login");
});

app.get("/profile", isLoggedIn, function(req, res){
  res.render("main/profile")
})

var server = app.listen(process.env.PORT || 5000, function() {
});


module.exports = server;
