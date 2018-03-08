// import observable = require("data/observable");
// import observableArray = require("data/observable-array");
// import pages = require("ui/page");

var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var pages = require("ui/page");
// import { SelectedIndexChangedEventData } from "nativescript-drop-down";
var viewModel = observable.Observable;

var observableModule = require("data/observable");
exports.onNavBtnTap = function(args){
	console.log("backwards");
	var topmost = frameModule.topmost();
	topmost.navigate("views/login-Guest/login-guest");
};
exports.service_login_loaded = function(args) {
	console.log("pageLoaded");
	var service = ["Florist",
		"spa",
		"retail"
		];
	var counties = ["Antrim",
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
		"Wicklow"];
	var page = args.object;
	var items = new observableArray.ObservableArray();
	viewModel = new observable.Observable();
	for (var loop = 0; loop < 20; loop++) {
        items.push("Item " + loop.toString());
    }
 
    viewModel.set("items", counties);
    console.log(viewModel.get("items"));
    viewModel.set("selectedIndex", 0);

    viewModel.set("services", service);
    console.log(viewModel.get("services"));
    viewModel.set("selectedIndex2", 0);
 
    page.bindingContext = viewModel;
};

exports.onPickerLoaded = function(args) {
    var timePicker = args.object;

    timePicker.hour = 9;
    timePicker.minute = 25;
};

exports.onTimeChanged = function(args) {
    console.log(args.value);
};

exports.dropDownSelectedIndexChanged = function(){
	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function(){
	console.log("dropDownOpened");
};

exports.submit = function(){
	alert("Your request was sent, you will be notified when your request has been processed");
	var topmost = frameModule.topmost();
	topmost.navigate("views/login-Guest - Copy/login-Guest");
};