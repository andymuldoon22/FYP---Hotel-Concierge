var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var pages = require("ui/page");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
var viewModel = observable.Observable;
var page, services, timePickerOpen, timePickerClosing, selectedCounty, selectedService;

exports.service_login_loaded = function (args) {
	page = args.object;
	var subscription = dataStore.find()
		.subscribe(function (entities) {
			// ...
			console.log(entities);
		}, function (error) {
			console.log(error);
			// ...
		}, function () {
			// ...
		});
	services = [
		"Florist",
		"SPA",
		"Tours"
	];
	counties = [
		"Antrim",
		"Armagh",
		"Carlow",
		"Cavan",
		"Clare",
		"Cork",
		"Derry",
		"Donegal",
		"Down",
		"Dublin",
		"Fermanagh",
		"Galway",
		"Kerry",
		"Kildare",
		"Kilkenny",
		"Laois",
		"Leitrim",
		"Limerick",
		"Longford",
		"Louth",
		"Mayo",
		"Meath",
		"Monaghan",
		"Offaly",
		"Roscommon",
		"Sligo",
		"Tipperary",
		"Tyrone",
		"Waterford",
		"Westmeath",
		"Wexford",
		"Wicklow"
	];
	// var page = args.object;
	var countys = new observableArray.ObservableArray();
	viewModel = new observable.Observable();
	for (var loop = 0; loop < 20; loop++) {
		countys.push("Item " + loop.toString());
	}

	viewModel.set("countys", counties);
	viewModel.set("selectedCounty", 0);

	viewModel.set("services", services);
	viewModel.set("selectedService", 0);

	page.bindingContext = viewModel;
};

exports.onPickerLoadedOpening = function (args) {
	timePickerOpen = args.object;

	timePickerOpen.hour = 0;
	timePickerOpen.minute = 0;
	console.log(timePickerOpen.minute);
};

exports.onTimeChangedOpening = function (args) {
	console.log(args.value);
	timePickerOpen = args.value;
};

exports.onPickerLoadedClosing = function (args) {
	timePickerClosing = args.object;

	timePickerClosing.hour = 0;
	timePickerClosing.minute = 0;
};

exports.onTimeChangedClosing = function (args) {
	console.log(args.value);
	timePickerClosing = args.value;
};

exports.dropDownSelectedIndexChanged = function (args) {
	console.log(args.object.text);
	console.log(args.newIndex);
	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function (args) {
	console.log(args.object);

	console.log("dropDownOpened");
};

exports.submit = function () {

	var selectedService = viewModel.get("selectedService");
	var service = services[selectedService];
	var openinghour = timePickerOpen.hour.toString() + ":" + timePickerOpen.minute.toString();
	var closinghour = timePickerClosing.hour.toString() + ":" + timePickerClosing.minute.toString();
	var addressline1 = page.getViewById("addressline1");
	var addressline2 = page.getViewById("addressline2");
	var city = page.getViewById("city");
	var selectedCounty = viewModel.get("selectedCounty");
	var county = counties[selectedCounty];
	var companyPhoneNo = page.getViewById("companyPhoneNo");

	var promise = dataStore.save({
			username: Kinvey.User.getActiveUser().data.username,
			service: service,
			rating: '3',
			openingHours: openinghour,
			closingHours: closinghour,
			addressLine1: addressline1.text,
			addressLine2: addressline2.text,
			city: city.text,
			county: county,
			workphone: companyPhoneNo.text
		})
		.then(function (entity) {
			// ...
			console.log(entity);
			alert("Your request was sent, you will be notified when your request has been processed");
			var topmost = frameModule.topmost();
			topmost.navigate("view/Main-ServiceProvider/main-serviceprovider");
		})
		.catch(function (error) {
			// ...
			console.log(error);
		});


};