// import observable = require("data/observable");
// import observableArray = require("data/observable-array");
// import pages = require("ui/page");

var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var pages = require("ui/page");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
// import { SelectedIndexChangedEventData } from "nativescript-drop-down";
var viewModel = observable.Observable;
var page, companyName, companyEmail, companyPhoneNo, addressline1, addressLine2, city, timePickerOpen, timePickerClosing, selectedCounty, selectedService, county, openingtime;

exports.service_login_loaded = function(args) {
	console.log("pageLoaded");
	
	page = args.object;
	console.log(page);
	companyName = page.getViewById("companyName");
	console.log(companyName.text);

	var service = [
		"Florist",
		"spa",
		"retail"
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

    viewModel.set("services", service);
    viewModel.set("selectedService", 0);
 
    page.bindingContext = viewModel;
};

exports.onPickerLoadedOpening = function(args) {
    timePickerOpen = args.object;
	
    timePickerOpen.hour = 0;
	timePickerOpen.minute = 0;
	console.log(timePickerOpen.minute);
};

exports.onTimeChangedOpening = function(args) {
	console.log(args.value);
	timePickerOpen = args.value;
};

exports.onPickerLoadedClosing = function(args) {
    timePickerClosing = args.object;

    timePickerClosing.hour = 0;
    timePickerClosing.minute = 0;
};

exports.onTimeChangedClosing = function(args) {
	console.log(args.value);
	timePickerClosing = args.value;
};

exports.dropDownSelectedIndexChanged = function(args){
	console.log(args.object.text);
	console.log(args.newIndex);
	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function(args){
	console.log(args.object);
	
	console.log("dropDownOpened");
};

exports.submit = function(){
	// companyName = page.getViewById("companyName");
	companyName = page.getViewById("companyName");
	console.log(companyName.text);
	companyEmail = page.getViewById("companyEmail"); 
	companyPhoneNo = page.getViewById("companyPhoneNo");
	addressline1 = page.getViewById("addressline1");
	addressLine2 = page.getViewById("addressline2");
	city = page.getViewById("city");
	console.log(viewModel.get("selectedCounty"));

	selectedCounty = viewModel.get("selectedCounty");
	selectedService = viewModel.get("selectedService");
	console.log(counties[selectedCounty]);
	console.log(counties[selectedService]);
	console.log(timePickerOpen.hour + ":" +timePickerOpen.minute);
	console.log(timePickerClosing.hour + ":" +timePickerClosing.minute);
	
	alert("Your request was sent, you will be notified when your request has been processed");
	// var topmost = frameModule.topmost();
	// topmost.navigate("views/login-Guest - Copy/login-Guest");
};