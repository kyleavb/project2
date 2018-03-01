var express = require("express");
var bodyParser = require("body-parser");
var passport = require('./config/ppConfig');
var ejsLayouts = require("express-ejs-layouts")
var isLoggedIn = require("./middleware/isLoggedIn")
var mtg = require("mtgsdk");
var db = require("./models");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts)
app.use(express.static(__dirname + "/public/"));


app.get("/", function(req, res){
    res.render("main/home")
  });

app.get("/login", function(req, res){
  res.render("main/login");
});

app.post("/login",function(req, res){
  console.log("Login Post Route")
  res.redirect("/login")
});
app.get("/createUser", function(req, res){
  res.render("main/singup");
});

app.post("/createUser", function(req, res){
  console.log("Create User Post Route")
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      userId: req.body.userId,
      email: req.body.email,
      password: req.body.password
    }
  }).spread(function(user, created){
    if(created){
      passport.authenticate("local", {
        successRedirect: "/",
        successFlash: "Account Created and Logged In!"
      })(req, res)
    }else{
      console.log("Email Exists")
      req.flash("Error: ", error.message)
      res.redirect("/login")
    }
  })
});

app.get("/profile", isLoggedIn, function(req, res){
  res.render("main/profile")
});

app.get("/search", function(req, res){
  res.render("main/search")
});

app.post("/search", function(req, res){
  //console.log("Searched for: " + req.body)
  mtg.card.where({
    name:req.body.name,
    colors: req.body.color,
    cmc: req.body.manaCost,
    types: req.body.type,
    rarity: req.body.rarity
  })
  .then(result => {
    res.render("main/results", {results: result})
  });
});

app.get("/card/:id", function(req, res){
  mtg.card.where({
    id: req.params.id
  })
  .then(result => {
    console.log(result)
    res.render("main/cardDetail", {card: result})
  })
});

app.get("/decks", function(req, res){
  res.render("main/decks")
});

var server = app.listen(process.env.PORT || 5000, function() {
});


module.exports = server;
