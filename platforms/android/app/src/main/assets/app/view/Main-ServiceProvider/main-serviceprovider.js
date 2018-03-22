var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('collection-name');
var imagepicker = require("nativescript-imagepicker");
// import * as imageSourceModule from "image-source";
var fs = require("file-system");
var myImage;

exports.service_login_loaded = function(args) {
    var page = args.object;
    myImage = page.getViewById("myImage");
    page.bindingContext = {};
    // myImage.src = "https.//placehold.it/150x150";
	console.log(page);

};

function showSideDrawer(args) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
exports.showSideDrawer = showSideDrawer;

exports.GetPicture = function(){
	
	var context = imagepicker.create({
		mode:"single"
    });
    
    context.authorize().then(function() {
        return context.present();
    })
    .then(function(selection) {
        myImage.src = selection[0]._android;
    }).catch(function (error) {
        // process error
        console.log(error);
    });
};