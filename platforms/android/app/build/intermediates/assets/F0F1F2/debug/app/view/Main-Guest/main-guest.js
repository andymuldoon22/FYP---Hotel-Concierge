var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('services');
var page;

exports.pageLoaded = function(args) {
    var items = [];
    items.push(
        {
            itemName: "Arcade Fire",
            itemDesc: "Funeral"
        },
        {
            itemName: "Bon Iver",
            itemDesc: "For Emma, Forever Ago"
        },
        {
            itemName: "Daft Punk",
            itemDesc: "Random Access Memories"
        },
        {
            itemName: "Elbow",
            itemDesc: "Build a Rocket Boys!"
        }
    )
    var page = args.object;
    var listview = view.getViewById(page, "listview");
    listview.items = items;
}

exports.guest_main = function(args) {
	page= args.object;
	var subscription = dataStore.find()
	.subscribe(function(entities) {
		// ...
		var services = JSON.stringify(entities);
		console.log(services.text);
		console.log("service[0]");
		console.log(JSON.stringify(services));
	}, function(error) {
		console.log(error);
		// ...
	}, function() {
		// ...
	});

	var myItems = [
		"Florist",
		"spa",
		"retail"
	];
	// var subscription = dataStore.findById('<entity-id>')
	// .subscribe(function(entity) {
	// 	console.log(entity);
	// 	var page = args.object;
	// 	page.bindingContext = { brand: entities[0]};
	// }, function(error) {
	// 	console.log(error);
	// }, function() {
	// 	console.log('finished pulling data');
	// });

};
exports.onNavBtnTap = function(args){
	console.log("backwards");
	var topmost = frameModule.topmost();
	topmost.navigate("view/login-Guest/login-guest");
};
exports.image = function(){

	var topmost = frameModule.topmost();
	topmost.navigate("view/Main-Guest-Service/main-guest-service");
};