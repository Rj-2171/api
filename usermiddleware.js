var middlewareObj = {};


middlewareObj.isUser = function(req, res, next){
    
    if(req.isAuthenticated()){
       if(req.user.isUser){
        return next();
       }
        
    }
  req.flash("error", "You are not authenticated");
}
module.exports = middlewareObj;
