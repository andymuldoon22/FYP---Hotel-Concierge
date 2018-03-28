var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Jobs');
// 0var dataStore2 = Kinvey.DataStore.collection('');
var page;

exports.guest_main = function(args) {
	page = args.object;
	viewModel = new observable.Observable();
	var activeUser = Kinvey.User.getActiveUser();
    var query = new Kinvey.Query();
    query.equalTo('Guest', Kinvey.User.getActiveUser().data._id);
    var subscription = dataStore.find(query)
    .subscribe(function(entities) {
        console.log("entities" + entities);
        viewModel.set("myJobs", entities);
        // console.log(viewModel.get("myJobs"));
    // ...
    }, function (error) {
        console.log(error);
    // ...
    }, function () {
    // ..
    });
	// var subscription = dataStore.find()
	// .subscribe(function(entities) {
	// 	// ...

	// 	viewModel.set("myJobs", entities);
	// 	console.log(viewModel.get("myJobs"));

	// 	page.bindingContext = viewModel;
	// }, function(error) {
	// 	console.log(error);
	// 	// ...
	// }, function() {
	// 	// ...
	// });


};

exports.image = function(){
    console.log("well hello there");
	// var topmost = frameModule.topmost();
	// topmost.navigate("view/Order-Guest/order-guest");
};