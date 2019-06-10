var express = require('express');
var auth = require("./auth.js");
var router = express.Router();
var helpers = require("./helpers.js");
var i18n = require("i18n");
var server = require("./server.js");

// import library for czech names formatting
var osloveni = require("./cs_CZ-name_formatting/osloveni.js");

// Fill all dynamic fields common to all subpages (such as user info etc.)
function fillAllCommonDynamicFields(req) {
    Object.assign(server.app.locals, {
        UserProfileName: req.session.fullname,
        UserProfileAvatar: req.session.avatar,
        AdminMenuButton: helpers.renderAdminMenuButton(req),
    });
}

// Protect all area with authentication
router.use("*", auth.isAuthorized);

// Dynamic endpoints
router.get("/", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("home", {
        focusedMenuButton: "home",
        subpageTitle: i18n.__('Home'),
        HelloUserName: osloveni.osloveniFullname(req.session.fullname)
    });

});

router.get("/home", function(req, res) {
    res.redirect("/");
});

router.get("/new", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("new", {
        focusedMenuButton: "new",
        subpageTitle: i18n.__('New'),
    });
});

router.get("/list", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("wrapper", {
        focusedMenuButton: "list",
        subpageTitle: i18n.__('List'),
        appContent: "",
    });
});

router.get("/groups", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("wrapper", {
        focusedMenuButton: "groups",
        subpageTitle: i18n.__('GroupsList'),
        appContent: "",
    });
});

router.get("/favourites", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("wrapper", {
        focusedMenuButton: "favourites",
        subpageTitle: i18n.__('Favourites'),
        appContent: "",
    });
});

router.get("/profile", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("wrapper", {
        focusedMenuButton: "profile",
        subpageTitle: i18n.__('Profile'),
        appContent: "",
    });
});

router.get("/settings", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("settings", {
        focusedMenuButton: "settings",
        subpageTitle: i18n.__('Settings'),

    });
});

router.get("/about", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("about", {
        focusedMenuButton: "about",
        subpageTitle: i18n.__('About'),

    });
});

router.get("/wiki", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.render("help", {
        focusedMenuButton: "wiki",
        subpageTitle: i18n.__('Help'),
    });
});

router.get("/404", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.status(404).render("404", {
        focusedMenuButton: "",
        subpageTitle: i18n.__('Error404'),
    });
});
module.exports = router;