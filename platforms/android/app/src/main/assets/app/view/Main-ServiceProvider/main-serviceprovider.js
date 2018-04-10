var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Products');
var imagepicker = require("nativescript-imagepicker");
// import * as imageSourceModule from "image-source";
var fs = require("file-system");

var myImage, page;

exports.service_login_loaded = function (args) {
	page = args.object;
	console.log(page);
	// myImage = page.getViewById("myImage");
	// page.bindingContext = {};
	// // myImage.src = "https.//placehold.it/150x150";
	// console.log(page);

};

exports.GetPicture = function () {

	var context = imagepicker.create({
		mode: "single"
	});

	context.authorize().then(function () {
			return context.present();
		})
		.then(function (selection) {
			myImage.src = selection[0]._android;
			console.log(selection.data);
			// fileData = UIImageJPEGRepresentation(image, 90);
			// //fileData = [NSData dataWithContentsOfURL:videoURL];
			// var fileLength = [fileData length];
			// console.log("fileLength:%u",fileLength);
		}).catch(function (error) {
			// process error
			console.log(error);
		});
};
exports.onNavBtnTap = function (args) {
	console.log("Show SideDrawer tapped.");
	// Show sidedrawer ...
	var topmost = frameModule.topmost();
	topmost.navigate("view/Jobs-Guest/jobs-guest");
};

exports.submit = function () {
	// var addressline2 = page.getViewById("addressline2");
	var productname = page.getViewById("pn");
	console.log(productname);
	var price = page.getViewById("price");
	console.log(price);
	// console.log("User ID" + Kinvey.User.getActiveUser().data._id);
	// console.log("image " + myImage.src)
	// // alert("Your order was sent, you will be notified when a company has accepted your order");
	// var filePath = fs.path.join(fs.knownFolders.currentApp().path, myImage.src);
	// var file = fs.File.fromPath(filePath);
	// var metadata = {
	// 	filename: "file.name",
	// 	mimeType: 'image/jpeg',
	// 	size: file.readSync().length
	// };
	// var promise = Kinvey.Files.upload(file, metadata)
	// 	.then(function (file) {
	// 		// ...
	// 		console.log(file);
	// 	})
	// 	.catch(function (error) {
	// 		// ...
	// 	});

	var promise = dataStore.save({
			price: price.text,
			serviceprovider: Kinvey.User.getActiveUser().data.username,
			product: productname.text,
			// image: myImage.src,
			timesused: 0,
			rating: 3

		})
		.then(function (entity) {
			// ...
			console.log(entity);
			alert("Your request was sent, you will be notified when your request has been processed");
		})
		.catch(function (error) {
			// ...
			console.log(error);
		});
};