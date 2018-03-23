var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
Kinvey.init({
    appKey: 'kid_H1Y1LFadM',
    appSecret: '4c237789c1be408e9bcf67d9377fe82a'
});
var page;
var username;
var pw;

var user = new observableModule.fromObject({
    username: 'User',
    pw: 'Password'
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
    console.log("activeUser");
    console.log(activeUser);
    Kinvey.ping()
    .then(function(response) {
        console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    })
    .catch(function(error) {
        console.log('Kinvey Ping Failed. Response: ' + error.description);
    });

};

function showSideDrawer(args) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
exports.showSideDrawer = showSideDrawer;


exports.login = function(args){

    console.log('signIn');
    username = page.getViewById("username");
    console.log(username.text);
    pw = page.getViewById("pw");
    console.log(pw.text);
    // if (username = "Andy23"){
    //     console.log("Andy23");
    //     var promise = Kinvey.User.login({
    //         username: username.text,
    //         password: pw.text
    //       })
    //         .then(function(user) {
    //           // ...
    //             var topmost = frameModule.topmost();
    //             topmost.navigate("view/Admin-Main/admin-main");
    
    //         })
    //         .catch(function(error) {
    //           // ...
    //           var topmost = frameModule.topmost();
    //             topmost.navigate("view/Admin-Main/admin-main");
    //         //   alert(error);
    //         //   console.log("error");
    //         });
    // }else{
    var promise = Kinvey.User.login({
        username: username.text,
        password: pw.text
      })
        .then(function(user) {
          // ...
            var topmost = frameModule.topmost();
	        topmost.navigate("view/Main-Guest/main-guest");

        })
        .catch(function(error) {
          // ...
          alert(error);
          console.log(error);
        });
    // }

};

exports.ToServiceProvider = function(){
	console.log("ToServiceProvider whoop whoop");
	var topmost = frameModule.topmost();
	topmost.navigate("view/Signup-ServiceProvider/signup-serviceprovider");
};
exports.signup = function(){
    console.log("Signing In");
    var topmost = frameModule.topmost();
	topmost.navigate("view/Signup-Guest/signup-guest");
};
