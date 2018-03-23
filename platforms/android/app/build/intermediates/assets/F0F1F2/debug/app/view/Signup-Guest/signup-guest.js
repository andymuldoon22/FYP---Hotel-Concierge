var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
// Kinvey.init({
//     appKey: 'kid_H1Y1LFadM',
//     appSecret: '4c237789c1be408e9bcf67d9377fe82a'
// });
var page;
var email;
var pw;
var name;
var viewModel = observable.Observable;
var role;
var roles;

exports.loaded = function(args) {
	console.log("signup-guest");
	page = args.object;
	roles = [
		"guest",
		"service-provider"
	];
	viewModel = new observable.Observable();
	viewModel.set("role", roles);
	viewModel.set("selectedRole", 0);

	page.bindingContext = viewModel;

	
};

exports.dropDownSelectedIndexChanged = function(args){

	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function(args){	
	console.log("dropDownOpened");
};


exports.signup = function(){
	console.log('signIn');
	role = viewModel.get("selectedRole");
	console.log(role);
	console.log(roles[role]);
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
		password: pw.text,
			role: roles[role]
	  })
		.then(function(user) {
		  // ...
			console.log(user);
			var topmost = frameModule.topmost();
			if (role = 1){
				topmost.navigate("view/Signup-Serviceprovider/signup-serviceprovider");
			}else{
				topmost.navigate("view/Main-Guest/main-guest");
			}
		})
		.catch(function(error) {
		  // ...
		  console.log(error);
		});
		
};
