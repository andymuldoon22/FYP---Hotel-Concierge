var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var pages = require("ui/page");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
var dataStore2 = Kinvey.DataStore.collection('Service');
var viewModel = observable.Observable;
var page, services, timePickerOpen, timePickerClosing, selectedCounty, selectedService;

exports.service_login_loaded = function (args) {
	page = args.object;
	// var subscription = dataStore.find()
	// 	.subscribe(function (entities) {
	// 		// ...
	// 		console.log(entities);
	// 	}, function (error) {
	// 		console.log(error);
	// 		// ...
	// 	}, function () {
	// 		// ...
	// 	});
	var subscription = dataStore2.find()
		.subscribe(function (entities) {
				// ...
				services = [];
				var length = entities.length;
				if (length !== 0) {
					for (i = 0; i < length; i++) {
						// var thing = {
						// 	service: entities[i].service
						// };
						// this.age = entities[i].service;
						services.push(entities[i].service);
					}
					console.log(services);

					// services = [
					// 	"Florist",
					// 	"SPA",
					// 	"Tours"
					// ];
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
					var srvices2 = new observableArray.ObservableArray();
					viewModel = new observable.Observable();
					viewModel.set("services", services);
					console.log(services);
					//		viewModel.set("myItems", services);
					// 		viewModel.get("myItems");
					for (var loop = 0; loop < 20; loop++) {
						countys.push("Item " + loop.toString());
					}

					viewModel.set("countys", counties);
					viewModel.set("selectedCounty", 0);

					console.log("services2" + services);
					viewModel.set("services2", services);
					console.log("viewModel.get('services')" + viewModel.get("services2"));
					viewModel.set("selectedService", 0);

					page.bindingContext = viewModel;
				}
					// page.bindingContext = viewModel;
				},
				function (error) {
					console.log(error);
					// ...
				},
				function () {
					// ...
				});
		// }



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
	console.log("services2[selectedService]: " + service);
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
			rating: 3,
			timesused: 0,
			openinghours: openinghour,
			closinghours: closinghour,
			addressline1: addressline1.text,
			addressline2: addressline2.text,
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