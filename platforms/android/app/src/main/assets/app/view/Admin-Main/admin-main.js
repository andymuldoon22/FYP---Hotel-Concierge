var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('collection-name');


exports.admin_main = function(args) {
	var subscription = dataStore.findById('<entity-id>')
	.subscribe(function(entity) {
		console.log(entity);
		var page = args.object;
		page.bindingContext = { brand: entities[0]};
	}, function(error) {
		console.log(error);
	}, function() {
		console.log('finished pulling data');
	});

};
exports.onNavBtnTap = function(args){
	console.log("backwards");
	var topmost = frameModule.topmost();
	topmost.navigate("view/login-Guest/login-guest");
};
exports.image = function(){

	var topmost = frameModule.topmost();
	topmost.navigate("view/Main-Guest - Copy/main-guest");
};