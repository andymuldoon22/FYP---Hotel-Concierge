var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
// 0var dataStore2 = Kinvey.DataStore.collection('');
var page;

exports.guest_main = function (args) {
	page = args.object;
	var gotData = page.navigationContext;
	var servicename = gotData.param1;
	var dataStore2 = Kinvey.DataStore.collection("Florist");
	viewModel = new observable.Observable();
	var activeUser = Kinvey.User.getActiveUser();
	console.log(activeUser);
	var subscription = dataStore2.find()
		.subscribe(function (entities) {
			// ...



			viewModel.set("myItems", entities);
			console.log(viewModel.get("myItems"));

			page.bindingContext = viewModel;
		}, function (error) {
			console.log(error);
			// ...
		}, function () {
			// ...
		});


};

exports.image = function (args) {
	// console.log(args.object);
	var index = args.index;
	var vm = viewModel.get("myItems", args.index);
	var productName = vm[index].Flower;
	var productID = vm[index]._id;
	var serviceProviderID = vm[index].serviceProviderID;
	var productPrice = vm[index].price;
	var navigationOptions = {
		moduleName: "view/Order-Guest/order-guest",
		context: {
			productName: productName,
			productID: productID,
			serviceProviderID: serviceProviderID,
			productPrice: productPrice
		}
	}
	var topmost = frameModule.topmost();
	topmost.navigate(navigationOptions);
	// var topmost = frameModule.topmost();
	// topmost.navigate("view/Order-Guest/order-guest");
};