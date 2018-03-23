var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
// 0var dataStore2 = Kinvey.DataStore.collection('');
var page;

exports.guest_main = function(args) {
	page = args.object;
	var gotData=page.navigationContext;
    var servicename = gotData.param1;
	var dataStore2 = Kinvey.DataStore.collection("Florist");
	viewModel = new observable.Observable();
	var activeUser = Kinvey.User.getActiveUser();
	console.log(activeUser);
	var subscription = dataStore2.find()
	.subscribe(function(entities) {
		// ...
		var services= [];
		var images= [];
		var age =[];
		var age2 =[];
		console.log(entities);
		// var length = entities.length;
		// if (length !== 0){
		// 	for (i=0;i<length;i++){
		// 		var thing = {service: entities[i].Flower};
		// 		var thing2 = {image: entities[i].image};
		// 		this.age = entities[i].Flower;
		// 		this.age2 = entities[i].image;
		// 		services.push(entities[i].Flower);
		// 		images.push(entities[i].image);
		// 		console.log("yes   "+this.age);
		// 		console.log("yes 2.0   "+this.age2);
		// 	}
		// }
		

		viewModel.set("myItems", entities);
		console.log(viewModel.get("myItems"));

		page.bindingContext = viewModel;
	}, function(error) {
		console.log(error);
		// ...
	}, function() {
		// ...
	});


};

exports.image = function(){

	var topmost = frameModule.topmost();
	topmost.navigate("view/Order-Guest/order-guest");
};