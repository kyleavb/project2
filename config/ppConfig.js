var db = require("../models");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy

passport.serializeUser(function(user, cb){
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb){
  db.user.findById(id).then(function(user){
    cb(null, user);
  }).catch(cb);
});

passport.use(new LocalStrategy({
  usernameField: 'userId',
  passwordField: 'password'
}, function(userId, password, cb){
  db.user.find({
    where: {userId: userId}
  }).then(function(user){
    console.log("check")
    if(!user || !user.validPassword(password)){
      cb(null, false);
    }else{
      cb(null, user);
    }
  }).catch(cb);
}));

module.exports = passport;
