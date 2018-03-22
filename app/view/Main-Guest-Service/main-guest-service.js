var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
var page;


exports.guest_main = function(args) {
	page = args.object;
	var gotData=page.navigationContext;
    console.log(gotData.param1);
    console.log(gotData.param2)
	console.log("page");
	console.log(page);
	viewModel = new observable.Observable();
	const query = new Kinvey.Query();
	query.equalTo('service', 'SPA');
	const subscription = dataStore.find(query)
	.subscribe(function(entities) {
		viewModel.set("myItems", entities);
	 	console.log(viewModel.get("myItems"));
	 	page.bindingContext = viewModel;
		// ...
	}, function(error) {
		// ...
		console.log(error);
	}, function() {
		// ...
	});

};

exports.image = function(){

	var topmost = frameModule.topmost();
	topmost.navigate("view/Order-Guest/order-guest");
};