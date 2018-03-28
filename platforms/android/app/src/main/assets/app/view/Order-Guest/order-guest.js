var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var pages = require("ui/page");
var viewModel = observable.Observable;
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Jobs');
var dataStore2 = Kinvey.DataStore.collection('Florist');
var timePickerOpen, datePicker;
var page;
// var activeUser = Kinvey.User.getActiveUser();

var productName, productID, serviceProviderID, productPrice;
exports.pageLoaded = function (args) {


	var quality = ["Highest Rated",
		"Quickest",
		"Cheapest",
		"Dearest"
	];
	console.log(quality);
	var page = args.object;

	var gotData = page.navigationContext;
	productName = gotData.productName;
	productID = gotData.productID;
	serviceProviderID = gotData.serviceProviderID;
	productPrice = gotData.productPrice;

	var items = new observableArray.ObservableArray();
	viewModel = new observable.Observable();
	var activeUser = Kinvey.User.getActiveUser();
	viewModel.set("quality", quality);
	viewModel.set("selectedIndex2", 0);
	page.bindingContext = viewModel;
};

exports.onPickerLoaded2 = function (args) {
	datePicker = args.object;

	datePicker.year = 2018;
	datePicker.month = 2;
	datePicker.day = 23;
	datePicker.minDate = new Date(1975, 0, 29);
	datePicker.maxDate = new Date(2045, 4, 12);
};

exports.onDateChanged = function (args) {
	datePicker = args.value;
	console.log("Date changed");
	console.log("New value: " + args.value);
	console.log("Old value: " + args.oldValue);
};

exports.onDayChanged = function (args) {
	console.log("Day changed");
	console.log("New value: " + args.value);
	console.log("Old value: " + args.oldValue);
};

exports.onMonthChanged = function (args) {
	console.log("Month changed");
	console.log("New value: " + args.value);
	console.log("Old value: " + args.oldValue);
};

exports.onYearChanged = function (args) {
	console.log("Year changed");
	console.log("New value: " + args.value);
	console.log("Old value: " + args.oldValue);
};

exports.onPickerLoaded = function (args) {
	timePickerOpen = args.object;
	timeFormat: 'HH:mm:ss';
	timePickerOpen.hour = 0;
	timePickerOpen.minute = 0;
	console.log(timePickerOpen.minute);
};

exports.onTimeChanged = function (args) {
	console.log(args.value);
	timePickerOpen = args.value;
};



exports.guest_main = function (args) {
	guest = args.object;
	console.log("guest");
	console.log(guest);
	//guest.bindingContext = user;
	console.log("guest");
	console.log(guest);

};

exports.image = function () {
	alert("yyyyyassss its rag week");
	//var topmost = frameModule.topmost();
};

exports.login = function () {
	//alert("Logging In");
	//var topmost = frameModule.topmost();
	email = page.getViewById("email");
	console.log(email.text);
};

exports.signup = function () {
	//alert("Signing In");
	var topmost = frameModule.topmost();
	topmost.navigate("views/Signup-Guest/signup-guest");
};

exports.dropDownSelectedIndexChanged = function () {
	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function () {
	console.log("dropDownOpened");
};

exports.submit = function () {
	var orderDate = datePicker.day + "/" + datePicker.month + "/" + datePicker.year;
	var openinghour = timePickerOpen.hour.toString() + ":" + timePickerOpen.minute.toString();

	var promise = dataStore.save({
			Guest: Kinvey.User.getActiveUser().data._id,
			ServiceProvider: serviceProviderID,
			productName: productName,
			productID: productID,
			productPrice: productPrice,
			Date: orderDate,
			time: openinghour,
			// rating: service,
			status: "requested"
		})
		.then(function (entity) {
			// ...
			//   console.log(entity);
			alert("Your request was sent, you will be notified when your request has been processed");
			var topmost = frameModule.topmost();
			topmost.navigate("view/Jobs-Guest/jobs-guest");
		})
		.catch(function (error) {
			// ...
			console.log(error);
		});

	// var topmost = frameModule.topmost();
	// topmost.navigate("view/Main-Guest-Service/main-guest-service");
};