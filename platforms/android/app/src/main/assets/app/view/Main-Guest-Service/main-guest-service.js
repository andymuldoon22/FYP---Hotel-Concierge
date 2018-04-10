var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
// 0var dataStore2 = Kinvey.DataStore.collection('');
var page, sort, entitylist;
var value =0;

exports.guest_main = function (args) {
	page = args.object;
	loadData();
};

function loadData() {

	sort = [
		"Highest Rated",
		"Lowest Rated",
		"Dearest",
		"Cheapest"
	];
	
	var gotData = page.navigationContext;
	var servicename = gotData.param1;
	var dataStore2 = Kinvey.DataStore.collection("Products");
	viewModel = new observable.Observable();
	viewModel.set("role", sort);
	viewModel.set("selectedRole", value);
	var activeUser = Kinvey.User.getActiveUser();
	console.log(activeUser);
	var subscription = dataStore2.find()
		.subscribe(function (entities) {
			// ...
			entitylist = entities;
			var length = entities.length;
			if (length !== 0) {


				  
				//   console.log("whoop whoop thats the sound of the police" + 		entities.sort(highestRated));
				//   entities.sort(highestRated);
				console.log(value);
				if (value == 0){
					console.log("Highest Rated");
					// entitylist.sort(highestRated);
					viewModel.set("products", entities.sort(highestRated));
					// loadData();
				} else if (value == 1){
					console.log("Lowest Rated");
					// entitylist.sort(lowestRated);
					viewModel.set("products", entities.sort(lowestRated));
					// loadData();
					// viewModel.set("products", entitylist.sort(lowestRated));
					// page.bindingContext = viewModel;
				} else if (value == 2){
					console.log("Dearest");
					// entitylist.sort(highestRated);
					viewModel.set("products", entities.sort(dearest));
				} else if (value == 3){
					console.log("Cheapest");
					// entitylist.sort(lowestRated);
					viewModel.set("products", entities.sort(cheapest));
				}
				

				// viewModel.set("products", entities);
				// console.log(viewModel.get("products"));
			}

			page.bindingContext = viewModel;
		}, function (error) {
			console.log(error);
			// ...
		}, function () {
			// ...
		});

};

exports.dropDownSelectedIndexChanged = function (args) {
	console.log("dropDownSelectedIndexChanged" + args.object);
	value = args.newIndex;
	loadData();
};

exports.dropDownOpened = function (args) {
	console.log("dropDownOpened" + args.object);
};

function highestRated(a, b) {
	const valueA = a.rating;
	const valueB = b.rating;
	
	let comparison = 0;
	if (valueA > valueB) {
	  comparison = -1;
	} else if (valueA < valueB) {
	  comparison = 1;
	}
	return comparison;
};

function lowestRated(a, b) {
	const valueA = a.rating;
	const valueB = b.rating;
	
	let comparison = 0;
	if (valueA > valueB) {
	  comparison = 1;
	} else if (valueA < valueB) {
	  comparison = -1;
	}
	return comparison;
};


function dearest(a, b) {
	const valueA = a.price;
	const valueB = b.price;
	
	let comparison = 0;
	if (valueA > valueB) {
	  comparison = -1;
	} else if (valueA < valueB) {
	  comparison = 1;
	}
	return comparison;
};

function cheapest(a, b) {
	const valueA = a.price;
	const valueB = b.price;
	
	let comparison = 0;
	if (valueA > valueB) {
	  comparison = 1;
	} else if (valueA < valueB) {
	  comparison = -1;
	}
	return comparison;
};
exports.image = function (args) {
	// console.log(args.object);
	var index = args.index;
	var vm = viewModel.get("products", args.index);
	var productName = vm[index].product;
	var productID = vm[index]._id;
	var serviceprovider = vm[index].serviceprovider;
	var productPrice = vm[index].price;
	console.log("view/Order-Guest/order-guest");
	var navigationOptions = {
		moduleName: "view/Order-Guest/order-guest",
		context: {
			productName: productName,
			productID: productID,
			serviceprovider: serviceprovider,
			productPrice: productPrice
		}
	}
	var topmost = frameModule.topmost();
	topmost.navigate(navigationOptions);
	// var topmost = frameModule.topmost();
	// topmost.navigate("view/Order-Guest/order-guest");
};