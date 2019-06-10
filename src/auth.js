var log = require('./log.js');
var helpers = require("./helpers.js");
var db = require('./db.js');

module.exports = {
  isAuthorized: function(req, res, next) {
    // Check existing user session
    if (req.session && req.session.userId) {
      // Extend session expiration
      req.session.cookie.expires = new Date(Date.now() + (3600 * 1000)); // 1 hour
      return next();
    }
    else {
      var email = req.body.email;
      var password = req.body.password;

      // Do user authorization (db, oauth, etc.)
      // Create user session after login
     
      if(email && password) {
        db.rdb.table("users").filter(db.rdb.row("email").eq(email)).run().then(function(results) {
          if (results && results[0] !== undefined && (results[0]['email'] == email)) {
            var sess = req.session;
      
            sess.email = email;
            sess.userId = results[0]['user_id'];
            sess.avatar = results[0]['avatar'];
            sess.fullname = results[0]['fullname'];
            sess.role = results[0]['role'];
            sess.cookie.expires = new Date(Date.now() + (3600 * 1000)); // 1 hour
            sess.cookie.maxAge = 86400 * 1000; // 1 day
            
            log.log("User '" + email + "' logged in");

            /* Redirect to the requested site before login redirect 
            * (based on hidden input type prefiled by server,
            * useful in situation when user is logged out due to the expired session)
            */
            var urlToRedirect = (req.body.urlToRedirect != "/logout") ? req.body.urlToRedirect : "/eje";
            return res.redirect(urlToRedirect);
          }
          else {
            helpers.renderLoginFailed(req, res);
            log.log("Unsuccessful login try on email '" + email + "'");
          }
        })
      }
      else {
        helpers.renderLoginFailed(req, res);
        if(email) log.log("Unsuccessful login try on email '" + email + "'");
      }
    }       
  },
}
