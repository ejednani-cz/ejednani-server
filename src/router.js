var express = require('express');
var auth = require("./auth.js");
var router = express.Router();
var helpers = require("./helpers.js");
var i18n = require("i18n");
var ejs = require('ejs');
var fs = require('fs');
var log = require('./log.js');

// Dynamic endpoints
router.get("/", auth.isAuthorized, function(req, res) {
    res.redirect("/login");
});

router.get("/auth", auth.isAuthorized, function(req, res) {
    res.redirect("/login");
});

router.get("/login", auth.isAuthorized, function(req, res) {
    res.redirect("/eje");
});

router.post("/auth", function(req, res, next) {
    auth.isAuthorized(req, res, next);
});

router.get("/logout", auth.isAuthorized, function(req, res, next) {
if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
    if(err) {
        return next(err);
    } else {
        helpers.renderLoginPage(req, res, i18n.__('LoggedOutMessage'), "success");
    }
    });
}
});

router.get("/css/customerColor.css", function(req, res) {
    var ejs_template = fs.readFileSync("./views/styleCss.ejs",'utf8')
    rslt = ejs.render(ejs_template,{
        customerColor: helpers.getCustomerColor(),
        customerColorTransparent: helpers.getCustomerColor() + "CC",
    });
    res.type('text/css');
    res.send(rslt);
});

module.exports = router;