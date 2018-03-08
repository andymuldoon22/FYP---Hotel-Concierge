var applicationModule = require("application");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
Kinvey.init({
    appKey: 'kid_H1Y1LFadM',
    appSecret: '4c237789c1be408e9bcf67d9377fe82a'
});

applicationModule.start({ moduleName: "view/Login-Guest/login-guest" });

