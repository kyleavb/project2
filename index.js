require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('./config/ppConfig');
var session = require('express-session');
var ejsLayouts = require("express-ejs-layouts")
var isLoggedIn = require("./middleware/isLoggedIn");
var flash = require("connect-flash");
var mtg = require("mtgsdk");
var db = require("./models");
var request = require("request");
var app = express();
var user;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  user: user
}));
app.use(express.static(__dirname + "/public/"));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  //before every route, attach flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  if(!res.locals.currentUser){
    res.locals.currentUser = req.user;
  }
  next();
});

app.get("/", function(req, res){
  res.render("main/home")
});

app.get("/login", function(req, res){
  res.render("main/login");
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  successFlash: "You have Logged in",
  failureRedirect: "/login",
  failureFlash: "Invalid Username and/or Password"
}));

app.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "You have logged out!");
  res.redirect("/");
});

app.get("/createUser", function(req, res){
  res.render("main/singup");
});

app.post("/createUser", function(req, res){
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
      req.flash("error", "This Email already exists ")
      res.redirect("/createUser")
    }
  }).catch(function(error){
    req.flash("error", "Some other Shit broke")
    res.redirect("/createUser")
  });
});


app.get("/profile", isLoggedIn, function(req, res){

  db.favcard.findAll({
    where: {userId: req.user.dataValues.id},
  })
  .then(function(results){
    res.render("main/profile", {userInfo: results})
  })
});

//UPDATE profile route

app.get("/search", function(req, res){
  res.render("main/search")
});

app.post("/search", function(req, res){
  var searchType = ""
  var searchRarity = ""
  var searchColor = ""
  if(req.body.color){
    searchColor = req.body.color.toString()
  }
  if(req.body.type){
    searchType = req.body.type.toString()
  }
  if(req.body.rarity){
    searchRarity = req.body.rarity.toString()
  }

  var query = {
    name: req.body.name,
    cmc: req.body.manaCost,
    colors: searchColor,
    type: searchType,
    rarity: searchRarity
  }
  request({
    url:"https://api.magicthegathering.io/v1/cards",
    qs: query
  }, function(error, response, body){
    if(!error && response.statusCode == 200){
      var dataObj = JSON.parse(body);
      res.render("main/results", {results: dataObj.cards})
    }
  })
});

app.get("/card/:id", function(req, res){
  mtg.card.where({
    id: req.params.id
  })
  .then(result => {
    res.render("main/cardDetail", {card: result[0]})
  })
});

app.get("/decks", isLoggedIn, function(req, res){
  db.deck
  res.render("main/decks")
});

app.post("/decks", isLoggedIn, function(req, res){
  db.deck.findOrCreate({
    where: {}
  })
});

app.post("/favorite", isLoggedIn, function(req, res){
  db.favcard.findOrCreate({
    where: {
      userId: req.user.dataValues.id,
      cardName: req.body.cardName
    },
    defaults:{
      cardId: req.body.cardInfo,
      userId: req.user.dataValues.id,
      cardName: req.body.cardName
    }
  })
  .spread(function(favorite, created){
    if(created){
      req.flash("success", "Added to Favorites List!")
    }else{
      req.flash("error", "Card Already on List!")
    }
  })
})


var server = app.listen(process.env.PORT || 5000, function() {
});


module.exports = server;
