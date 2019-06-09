var express = require("express");
var session = require("express-session");
var app = require("express")();
module.exports.app = app;

var i18n = require("i18n");
var bodyParser = require("body-parser");

var http = require("http").Server(app);

var router = require("./router.js");
var routerEje = require("./router.eje.js");
var helpers = require("./helpers.js");

const { version } = require('./package.json');

var log = require('./log.js');
var auth = require("./auth.js");



// Init modules
i18n.configure({
  defaultLocale: 'cs_CZ',
  directory: __dirname + '/locales'
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// Prefill global vars with translated texts
Object.assign(app.locals, {
  header: {
    title: "eJednání"
  },
  menu: {
    home: i18n.__('Home'),
    new: i18n.__('New'),
    favourites: i18n.__('Favourites'),
    list: i18n.__('List'),
    profile: i18n.__('Profile'),
    logout: i18n.__('Logout'),
    help: i18n.__('Help'),
    settings: i18n.__('Settings'),
    about: i18n.__('About'),
    profileBlock: i18n.__('ProfileBlock'),
    helpBlock: i18n.__('HelpBlock'),
    groups: i18n.__('GroupsList'),
  },
  footer: {
    title: helpers.getCustomer(),
  },
  /*nav: {
    links: [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Contact', path: '/contact' }
    ]
  }*/
});

// Middlewares to accept POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// default: using 'accept-language' header to guess language settings
app.use(i18n.init);
// Static endpoints
app.use(express.static('static'));
// Use Sessions for tracking logins
app.use(session({
  secret: 'ee874ec6-5068-445d-a83f-c0c054144d6b',
  resave: true,
  saveUninitialized: false,
}));
// Dynamic endpoints
app.use("/bower_components", express.static("bower_components"));
app.use("/", router);
app.use("/eje", routerEje);
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', auth.isAuthorized, function(req, res){
  res.redirect("/eje/404");
});


// Setup Express Listener
http.listen(helpers.getPort(), helpers.getListenIp(), function() {
  log.log("Starting eJednani " + version);
  log.log("Listening on: " + helpers.getListenIp() + ":" + helpers.getPort());
  log.log("Running for customer: " + helpers.getCustomer());
});
