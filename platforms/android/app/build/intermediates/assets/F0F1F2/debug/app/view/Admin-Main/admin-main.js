var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var tabViewModule = require("tns-core-modules/ui/tab-view");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('ServiceProvider');
var page;

var observableModule = require("data/observable");
var viewModel = observable.Observable;
exports.guest_main = function (args) {
	page = args.object;
	viewModel = new observable.Observable();
	var subscription = dataStore.find()
		.subscribe(function (entities) {
			console.log(entities);
			viewModel.set("myItems", entities);

			page.bindingContext = viewModel;
		}, function (error) {
			console.log(error);
			// ...
		}, function () {
			// ...
		});

};
// var frameModule = require("ui/frame");
// var observableModule = require("data/observable");
// var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
// var dataStore = Kinvey.DataStore.collection('collection-name');
// var imagepicker = require("nativescript-imagepicker");
// // import * as imageSourceModule from "image-source";
// var fs = require("file-system");

// exports.admin_main = function(args) {
// 	var page = args.object;
// 	console.log(page);
// 	// var subscription = dataStore.findById('<entity-id>')
// 	// .subscribe(function(entity) {
// 	// 	console.log(entity);
// 	// 	var page = args.object;
// 	// 	page.bindingContext = { brand: entities[0]};
// 	// }, function(error) {
// 	// 	console.log(error);
// 	// }, function() {
// 	// 	console.log('finished pulling data');
// 	// });

// };
// exports.onNavBtnTap = function(args){
// 	console.log("backwards");
// 	var topmost = frameModule.topmost();
// 	topmost.navigate("view/login-Guest/login-guest");
// };
// exports.image = function(){

// 	var topmost = frameModule.topmost();
// 	topmost.navigate("view/Main-Guest - Copy/main-guest");
// };

// exports.GetPicture = function(){
// 	console.log("GetPicture");
// 	var milliseconds = (new Date).getTime();
// 	console.log(milliseconds);
// 	var that = this;
// 	var context = imagepicker.create({
// 		mode:"single"
// 	});
// 	console.log("picture");
// 	context.authorize().then(()=>{
// 		return context.present();
// 		console.log(context.present());
// 		console.log("context.present()");
// 	})
// 	.then((selection)=>{
// 		selection.forEach(function(selected){
// 			selected.getImage().then(function(imagesource){
// 				let folder = fs.knownfolders.documents();
// 				console.log(folder);
// 				var path = fs.path.join(folder.path, milliseconds+".png");
// 				console.log(folder);
// 				var saved = imagesource.saveToFile(path,"png");
// 				console.log(saved);
// 				that.myImage = path;
// 				console.log(that.myImage);
// 			})	
// 		})
// 	})

// };