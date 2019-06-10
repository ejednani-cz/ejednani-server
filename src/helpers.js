const dotenv = require('dotenv');
dotenv.config();

var defaultPort = 8080;
var defaultListenIp = "0.0.0.0";
var defaultCustomer = "eJednání.cz";
var defaultDbHost = "localhost";
var defaultDbPort = 28015;
var defaultDbName = "ejednani";
var defaultCustomerColor = "#057CC3";
var fs = require('fs');
var dateFormat = require('dateformat');
var i18n = require("i18n");
var ejs = require("ejs");

module.exports.getPort = function getPort() {
    return process.env.PORT || defaultPort;
}

module.exports.getListenIp = function getListenIp() {
    return process.env.LISTEN_IP || defaultListenIp;
}
  
module.exports.getCustomer = function getCustomer() {
    return (process.env.CUSTOMER || defaultCustomer);
}
  
module.exports.createdDate = function createdDate (file) {  
    const { birthtime } = fs.statSync(file);
    return dateFormat(birthtime, "dd.mm.yyyy" );
}

module.exports.getDbHost = function getDbHost() {
    return (process.env.DB_HOST || defaultDbHost);
}
module.exports.getDbPort = function getDbPort() {
    return (process.env.DB_PORT || defaultDbPort);
}
module.exports.getDbName = function getDbName() {
    return (process.env.DB_NAME || defaultDbName);
}

module.exports.getCustomerColor = function getCustomerColor() {
    return (process.env.COLOR || defaultCustomerColor);
}

module.exports.renderLoginFailed = function renderLoginFailed(req, res, customMessage = "") {
    // If login failed, render login page with specified message
    var message = "";
    var messageType = "";
    
    if(customMessage == "") {
        if(req.originalUrl != "/") {
        message = i18n.__('NonAuthorizedAccess');
        messageType = "error";
        }
        if(req.originalUrl == "/auth") {
        message = i18n.__('WrongUsernameOrPassword');
        messageType = "error";
        }
    }
    else {
        message = customMessage;
        messageType = "error";
    }

    return this.renderLoginPage(req, res, message, messageType);
};

module.exports.renderLoginPage = function renderLoginPage(req, res, message, messageType) {
    return res.render("login", {
        subpageTitle: i18n.__('Login'),
        email: i18n.__('Email'),
        username: i18n.__('Username'),
        password: i18n.__('Password'),
        lostpassword: i18n.__('LostPassword'),
        submit: i18n.__('LoginSubmit'),
        loggedOutMessage: message,
        loggedOutMessageType: messageType,
        currentUrl: req.originalUrl
    });
}

module.exports.isUserAdmin = function isUserAdmin(req) {
    return (req.session.role == "Administrator");
}

module.exports.simpleReadFileSync = function simpleReadFileSync(filePath)
{
    var options = {encoding:'utf-8', flag:'r'};
    return fs.readFileSync(filePath, options);
}