var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Florist');
var imagepicker = require("nativescript-imagepicker");
// import * as imageSourceModule from "image-source";
var fs = require("file-system");

var myImage, flowerName, price, page;

exports.service_login_loaded = function(args) {
    page = args.object;
    myImage = page.getViewById("myImage");
    page.bindingContext = {};
    // myImage.src = "https.//placehold.it/150x150";
	console.log(page);

};


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

exports.submit = function(){
    flowerName = page.getViewById("flowerName");
    price = page.getViewById("price");
    console.log("User ID" + Kinvey.User.getActiveUser().data._id);
    console.log("image " + myImage.src)
	// alert("Your order was sent, you will be notified when a company has accepted your order");
	var promise = dataStore.save({
		price: price.text,
		serviceProviderID: Kinvey.User.getActiveUser().data._id,
        Flower: flowerName.text,
        image: myImage.src

	})
	.then(function(entity) {
		  // ...
	      console.log(entity);
		  alert("Your request was sent, you will be notified when your request has been processed");
	})
	.catch(function(error) {
		  // ...
		  console.log(error);
	});
};