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

exports.service_login_loaded = function(args) {
	console.log("pageLoaded");
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
	console.log(counties);
	console.log(args);
	var page = args.object;
	console.log(page);
	var items = new observableArray.ObservableArray();
	console.log(items);
	viewModel = new observable.Observable();
	for (var loop = 0; loop < 20; loop++) {
        items.push("Item " + loop.toString());
    }
 
    viewModel.set("items", counties);
    console.log(viewModel.get("items"));
    viewModel.set("selectedIndex", 0);
 
    page.bindingContext = viewModel;
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
	topmost.navigate("views/login-Guest/login-Guest");
};