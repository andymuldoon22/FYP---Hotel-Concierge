var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var tabViewModule = require("tns-core-modules/ui/tab-view");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Service');
var page;

var observableModule = require("data/observable");
var viewModel = observable.Observable;
exports.guest_main = function (args) {
	page = args.object;
	viewModel = new observable.Observable();
	// var promise = Kinvey.Files.stream('64a550ae-f809-4d32-9a5b-a2c75b2ddeef')
	// 	.then(function (file) {
	// 		console.log(file);
	// 		var url = file._downloadURL;
	// 		// ...
	// 	})
	// 	.catch(function (error) {
	// 		// ...
	// 		console.log(error);
	// 		console.log("errors everywhere");
	// 	});
	var subscription = dataStore.find()
		.subscribe(function (entities) {
			// ...
			var services = [];
			var age = [];
			var length = entities.length;
			if (length !== 0) {
				for (i = 0; i < length; i++) {
					var thing = {
						service: entities[i].service
					};
					this.age = entities[i].service;
					services.push(entities[i].service);
				}
				console.log(entities);
				viewModel.set("services", entities);

				page.bindingContext = viewModel;
			}


		}, function (error) {
			console.log(error);
			// ...
		}, function () {
			// ...
		});

};

exports.onNavBtnTap = function (args) {
	console.log("Show SideDrawer tapped.");
	// Show sidedrawer ...
	var topmost = frameModule.topmost();
	topmost.navigate("view/Jobs-Guest/jobs-guest");
};


exports.image = function (args) {

	var index = args.index;
	var vm = viewModel.get("services", args.index);
	var service = vm[index].Service;
	var navigationOptions = {
		moduleName: "view/Main-Guest-Service/main-guest-service",
		context: {
			param1: service
		}
	}
	var topmost = frameModule.topmost();
	topmost.navigate(navigationOptions);
};