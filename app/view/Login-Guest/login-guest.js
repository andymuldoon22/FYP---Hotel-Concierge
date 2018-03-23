var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
// Kinvey.init({
//     appKey: 'kid_H1Y1LFadM',
//     appSecret: '4c237789c1be408e9bcf67d9377fe82a'
// });
var page;
var username;
var pw;

var user = new observableModule.fromObject({
    username: 'finally',
    pw: 'finally'
});

exports.loaded = function(args) {
    
    var promise = Kinvey.User.logout()
    .then(function() {
        // ...
    
    }).catch(function(error) {
        // ...
        console.log(error);
    });

    page = args.object;
    page.bindingContext = user;
    var activeUser = Kinvey.User.getActiveUser();

    Kinvey.ping()
    .then(function(response) {
        console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    })
    .catch(function(error) {
        console.log('Kinvey Ping Failed. Response: ' + error.description);
    });

};

exports.login = function(args){

    username = page.getViewById("username");
    pw = page.getViewById("pw");
    
    var promise = Kinvey.User.login({
        username: username.text,
        password: pw.text
      })
        .then(function(user) {
            var topmost = frameModule.topmost();
            console.log(user.data.role);
            if (user.data.role == "service-provider"){
                console.log("logging in as a service-provider");
                topmost.navigate("view/Main-ServiceProvider/main-serviceprovider");
            }else if (user.data.role == "guest"){
                console.log("logging in as a guest");
                topmost.navigate("view/Main-Guest/main-guest");
            }
        })
        .catch(function(error) {
          alert(error);
          console.log(error);
        });
    // }

};

exports.ToServiceProvider = function(){
	var topmost = frameModule.topmost();
	topmost.navigate("view/Signup-ServiceProvider/signup-serviceprovider");
};
exports.signup = function(){
    var topmost = frameModule.topmost();
	topmost.navigate("view/Signup-Guest/signup-guest");
};
