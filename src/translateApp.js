var i18n = require("i18n");
var helpers = require("./helpers.js");
const { version } = require('./package.json');

module.exports.translateApplication = function translateApplication(app) {
    // Prefill global vars with translated texts
    Object.assign(app.locals, {
    header: {
        title: "eJednání",
        showHideMenu: i18n.__('ShowHideMainMenu'),
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
    home: {
        helloUser: i18n.__('Hello'),
    },
    newRoom: {
        title: i18n.__('New'),
        newActTitle: i18n.__('NewActTitle'),
        newActDate: i18n.__('NewActDate'),
        newActTime: i18n.__('NewActTime'),
        newActLocation: i18n.__('NewActLocation'),
        newActChairman: i18n.__('NewActChairman'),
        newActWriters: i18n.__('NewActWriters'),
        newActVerifiers: i18n.__('NewActVerifiers'),
        infoAboutAct: i18n.__('InfoAboutAct'),
        infoPersons: i18n.__('InfoPersons'),
        infoOptions: i18n.__('InfoOptions'),
        actProgram: i18n.__('ActProgram'),
        newActMembersGroup:  i18n.__('NewActMembersGroup'),
        newActAuthor: i18n.__('NewActAuthor'),
        createActRoom: i18n.__('CreateActRoomButton'),
        newActIsPublic: i18n.__('NewActIsPublic')
    },
    settings: {
        title: i18n.__('Settings'),
        global: i18n.__('SettingsGlobal'),
        insideRoom: i18n.__('SettingsInsideRoom'),
        useSpeaker: i18n.__('UseSpeaker'),
        useMicrophone: i18n.__('UseMicrophone'),
        useCamera: i18n.__('UseCamera'),
        allowNotifications: i18n.__('AllowNotifications'),
    },    
    about: {
        appVersionVal: version,
        appDescriptionVal: i18n.__('AppDescription'),
        licenseText: helpers.simpleReadFileSync("./LICENSE"),
        appVersion: i18n.__('Version'),
        license: i18n.__('License'),
        customer: i18n.__('Customer'),
        customerVal: helpers.getCustomer(),
        since: i18n.__('Since'),
        sinceVal: helpers.createdDate(".env"),
    }
    });
}