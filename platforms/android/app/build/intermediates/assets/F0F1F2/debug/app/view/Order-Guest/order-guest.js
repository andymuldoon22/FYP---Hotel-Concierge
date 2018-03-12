var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var pages = require("ui/page");
var page;
// var pageData = new observable();
var viewModel = observable.Observable;

var observableModule = require("data/observable");

exports.pageLoaded = function(args) {
    
    var quality = ["Highest Rated",
		"Quickest",
		"Cheapest",
		"Dearest"
	];
	console.log(quality);
	var page = args.object;
	var items = new observableArray.ObservableArray();
	viewModel = new observable.Observable();
 
	viewModel.set("quality", quality);
	console.log(viewModel.get("quality"));
    console.log(viewModel.get("quality"));
    viewModel.set("selectedIndex2", 0);
	page.bindingContext = viewModel;
};
exports.onNavBtnTap = function(args){
	console.log("backwards");
	var topmost = frameModule.topmost();
	topmost.navigate("views/Main-Guest/main-guest");
};
exports.onPickerLoaded2 = function(args) {
    var datePicker = args.object;

    datePicker.year = 2018;
    datePicker.month = 2;
    datePicker.day = 23;
    datePicker.minDate = new Date(1975, 0, 29);
    datePicker.maxDate = new Date(2045, 4, 12);
};

exports.onDateChanged = function(args) {
    console.log("Date changed");
    console.log("New value: " + args.value);
    console.log("Old value: " + args.oldValue);
};

exports.onDayChanged = function(args) {
    console.log("Day changed");
    console.log("New value: " + args.value);
    console.log("Old value: " + args.oldValue);
};

exports.onMonthChanged = function(args) {
    console.log("Month changed");
    console.log("New value: " + args.value);
    console.log("Old value: " + args.oldValue);
};

exports.onYearChanged = function(args) {
    console.log("Year changed");
    console.log("New value: " + args.value);
    console.log("Old value: " + args.oldValue);
};

exports.onPickerLoaded = function(args) {
    var timePicker = args.object;

    timePicker.hour = 9;
    timePicker.minute = 25;
};

exports.onTimeChanged = function(args) {
    console.log(args.value);
};


exports.guest_main = function(args) {
	guest = args.object;
	console.log("guest");
	console.log(guest);
	//guest.bindingContext = user;
	console.log("guest");
	console.log(guest);

};

exports.image = function(){
	alert("yyyyyassss its rag week");
	//var topmost = frameModule.topmost();
};

exports.login = function(){
	//alert("Logging In");
	//var topmost = frameModule.topmost();
	email = page.getViewById("email");
	console.log(email.text);
};

exports.signup = function(){
	//alert("Signing In");
	var topmost = frameModule.topmost();
	topmost.navigate("views/Signup-Guest/signup-guest");
};

exports.dropDownSelectedIndexChanged = function(){
	console.log("dropDownSelectedIndexChanged");
};

exports.dropDownOpened = function(){
	console.log("dropDownOpened");
};

exports.submit = function(){
	alert("Your order was sent, you will be notified when a company has accepted your order");
	var topmost = frameModule.topmost();
	topmost.navigate("views/Main-Guest - Copy/main-guest");
};