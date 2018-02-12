var frameModule = require("ui/frame");
var page;
var email;
var observableModule = require("data/observable");
var user = new observableModule.fromObject({
	email: "user@domain.com",
	password: "password"
});

exports.loaded = function(args) {
	page = args.object;
	page.bindingContext = user;
	// HotelGuest.findOne({ 
	// 		name: "andy"
	// 	});

	// console.log(result.name);
};

function showSideDrawer(args) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
exports.showSideDrawer = showSideDrawer;


exports.login = function(){
	//alert("Logging In");
	//var topmost = frameModule.topmost();
	email = page.getViewById("email");
	//console.log(email.text);
	var topmost = frameModule.topmost();
	topmost.navigate("views/Main-Guest/main-guest");
};


exports.signup = function(){
	//alert("Signing In");
	var topmost = frameModule.topmost();
	topmost.navigate("views/Signup-Guest/signup-guest");
}



//var observableModule = require("data/observable");
//var UserViewModel = require("../../shared/view-models/user-view-model");
//var dialogsModule = require("ui/dialogs");
// var user = new observableModule.fromObject({
// 	email: "user@domain.com",
// 	password: "password"
// });
// var user = new UserViewModel({
//     email: "username@domain.com",
//     password: "password"
// });

// exports.loaded = function(args){
// 	//console.log("hello world");
// 	page = args.object;
// 	page.bindingContext = user;
// };

// exports.signIn = function() {
//     user.login()
//         .catch(function(error) {
//             console.log(error);
//             dialogsModule.alert({
//                 message: "Unfortunately we could not find your account.",
//                 okButtonText: "OK"
//             });
//             return Promise.reject();
//         })
//         .then(function() {
//             frameModule.topmost().navigate("views/list/list");
//         });
// };

// exports.register = function(){
// 	// alert("Registering");
// 	var topmost = frameModule.topmost();
// 	topmost.navigate("views/register/register");
// };