module.exports = function(req, res, next){
  if(!req.user){
    console.log("Attempted to access disallowed site");
    console.log("Redirecting to root")
    res.redirect('/');
  }else{
    next();
  }
};
