var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var tabViewModule = require("tns-core-modules/ui/tab-view");
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
	console.log(Kinvey.User.getActiveUser().data._id);
	var activeUser = Kinvey.User.getActiveUser();
	console.log(activeUser);
	var subscription = dataStore.find()
	.subscribe(function(entities) {
		// ...
		var services= [];
		var age =[];
		var length = entities.length;
		if (length !== 0){
			for (i=0;i<length;i++){
				var thing = {service: entities[i].Service};
				this.age =  entities[i].Service;
				services.push(entities[i].Service);
			}
		}
		
		viewModel.set("myItems", entities);
		
		page.bindingContext = viewModel;
	}, function(error) {
		console.log(error);
		// ...
	}, function() {
		// ...
	});

};

exports.onNavBtnTap = function(args){
	console.log("Show SideDrawer tapped.");
	// Show sidedrawer ...
	var topmost = frameModule.topmost();
		topmost.navigate("view/Jobs-Guest/jobs-guest");
};


exports.image = function(args){

	var index = args.index;
	var vm = viewModel.get("myItems", args.index);
	var service = vm[index].Service;
	var navigationOptions={
        moduleName:"view/Main-Guest-Service/main-guest-service",
		context:{
			param1: service
	    }
    }
	var topmost = frameModule.topmost();
	topmost.navigate(navigationOptions);
};