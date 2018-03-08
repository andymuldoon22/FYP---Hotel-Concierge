var frameModule = require("ui/frame");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
Kinvey.init({
    appKey: 'kid_H1Y1LFadM',
    appSecret: '4c237789c1be408e9bcf67d9377fe82a'
});
var page;
var email;
var pw;
var name;


exports.loaded = function(args) {
	page = args.object;
};



exports.signup = function(){
	console.log('signIn');
    email = page.getViewById("email");
	console.log(email.text);
	name = page.getViewById("name");
    console.log(name.text);
    pw = page.getViewById("pw");
	console.log(pw.text);
	var promise = Kinvey.User.logout();
	var promise = Kinvey.User.signup({
		username: name.text,
		email: email.text,
		password: pw.text
	  })
		.then(function(user) {
		  // ...
			console.log(user);
			var topmost = frameModule.topmost();
			topmost.navigate("view/Main-Guest/main-guest");
			// alert("Signing In");
		})
		.catch(function(error) {
		  // ...
		  console.log(error);
		});
		
};
