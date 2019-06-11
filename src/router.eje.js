var express = require('express');
var auth = require("./auth.js");
var router = express.Router();
var helpers = require("./helpers.js");
var i18n = require("i18n");
var server = require("./server.js");
var db = require('./db.js');

// import library for czech names formatting
var osloveni = require("./cs_CZ-name_formatting/osloveni.js");

// Fill all dynamic fields common to all subpages (such as user info etc.)
function fillAllCommonDynamicFields(req) {
    Object.assign(server.app.locals, {
        UserProfileName: req.session.fullname,
        UserProfileAvatar: req.session.avatar,
        IsUserAdmin: helpers.isUserAdmin(req),
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
        // "osloveni" function is working just for cs_CZ language!
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

router.post("/new/create", function(req, res) {
    if (
        req.body.newActTitle != "" &&
        req.body.newActDate != "" &&
        req.body.newActTime != "" &&
        req.body.newActAuthor != "" &&
        req.body.newActChairman != "" &&
        req.body.newActMembersGroup != ""
    ) {
        db.rdb.table("actRooms").insert({
            "title": req.body.newActTitle,
            "type": "room",
            "group": req.body.newActMembersGroup,
            "location": req.body.newActLocation,
            "date": req.body.newActDate,
            "time": req.body.newActTime,
            "author": req.body.newActAuthor,
            "chairman": req.body.newActChairman,
            "writer": ["", ""],
            "verifier": ["", ""],
            "program_deadline": "",
            "status": "init",
            "verified": false,
            "public": req.body.newActIsPublic,
            "publicTalkers": req.body.newActPublicCanTalk
        }).run();
        res.redirect("/eje/list");
    }
    else {
        res.redirect("/eje/new");
    }
});

router.get("/list", function(req, res) {
    fillAllCommonDynamicFields(req);

    db.rdb.table("actRooms").run().then(function(actRooms) {
        res.render("list", {
            focusedMenuButton: "list",
            subpageTitle: i18n.__('List'),
            actRooms: actRooms,
        });
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

router.get("/admin", function(req, res) {
    if(helpers.isUserAdmin(req)) {
        fillAllCommonDynamicFields(req);
        res.render("wrapper", {
            focusedMenuButton: "admin",
            subpageTitle: i18n.__('AdminSection'),
            appContent: "",
        });
    }
    else {
        res.redirect("/eje/404");
    }
});

router.get("/404", function(req, res) {
    fillAllCommonDynamicFields(req);
    res.status(404).render("404", {
        focusedMenuButton: "",
        subpageTitle: i18n.__('Error404'),
    });
});

/* 
* Route path: /users/:userId/books/:bookId
* Request URL: http://localhost:3000/users/34/books/8989
* req.params: { "userId": "34", "bookId": "8989" }
*
*/
router.get('/room/:actRoomId', function (req, res) {
    fillAllCommonDynamicFields(req);
    db.rdb.table("actRooms").get(req.params.actRoomId).run().then(function(actRoom) {
        res.render("wrapper", {
            focusedMenuButton: "",
            subpageTitle: "",
            appContent: "<pre>" + JSON.stringify(actRoom, null, 4) + "</pre>"
        });
    })
  })
module.exports = router;