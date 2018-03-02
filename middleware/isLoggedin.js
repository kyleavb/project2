module.exports = function(req, res, next){
  if(!req.user){
    console.log("Attempted to access disallowed site");
    console.log("Redirecting to root")
    req.flash("error", "Please Log in to access this portions of the site! LOSER")
    res.redirect('/login');
  }else{
    next();
  }
};
