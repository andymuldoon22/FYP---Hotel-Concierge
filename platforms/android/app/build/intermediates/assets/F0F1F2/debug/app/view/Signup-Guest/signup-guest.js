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

exports.loaded = function (args) {

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

exports.dropDownSelectedIndexChanged = function (args) {

	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function (args) {
	console.log("dropDownOpened");
};


exports.signup = function () {

	/*
		Gets the role, email, name and password that was inputed to the signup page
	*/

	role = viewModel.get("selectedRole");
	email = page.getViewById("email");
	name = page.getViewById("name");
	pw = page.getViewById("pw");

	/*
		Logs user out if the was one still logged in as you tried to sign up
	*/
	var promise = Kinvey.User.logout();

	/*
		Creates a new user based on the information given and goes to two different pages
		based on what role was selected
	*/
	var promise = Kinvey.User.signup({
			username: name.text,
			email: email.text,
			password: pw.text,
			role: roles[role]
		})
		.then(function (user) {
			var topmost = frameModule.topmost();
			if (role = 1) {
				topmost.navigate("view/Signup-ServiceProvider/signup-serviceprovider");
			} else {
				topmost.navigate("view/Main-Guest/main-guest");
			}
		})
		.catch(function (error) {
			console.log(error);
		});

};