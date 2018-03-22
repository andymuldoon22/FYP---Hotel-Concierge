var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('services');
var page;

var observableModule = require("data/observable");
var viewModel = observable.Observable;
exports.guest_main = function(args) {
	page= args.object;
	viewModel = new observable.Observable();

	var subscription = dataStore.find()
	.subscribe(function(entities) {
		// ...
		var services= [];
		var age =[];
		console.log(entities);
		var length = entities.length;
		if (length !== 0){
			for (i=0;i<length;i++){
				var thing = {service: entities[i].Service};
				this.age =  entities[i].Service;
				services.push(entities[i].Service);
				console.log("yes   "+this.age);
			}
		}
		

		viewModel.set("myItems", entities);
		console.log(viewModel.get("myItems"));
		page.bindingContext = viewModel;
	}, function(error) {
		console.log(error);
		// ...
	}, function() {
		// ...
	});

};

exports.image = function(args){
	console.log(args.object);
	var list = page.getViewById("service");
	var INDEX = list.selectedIndex;
	console.log(list[INDEX].value);
	var navigationOptions={
        moduleName:"view/Main-Guest-Service/main-guest-service",
		context:{
			param1: "value1"
	    }
    }
	var topmost = frameModule.topmost();
	topmost.navigate(navigationOptions);
};