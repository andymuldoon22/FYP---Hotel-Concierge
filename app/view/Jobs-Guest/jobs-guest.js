var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Jobs');
var dataStore2 = Kinvey.DataStore.collection('Florist');
var page;
var pageData = new observable.Observable();
var dialogs = require("ui/dialogs");


exports.guest_main = function (args) {

	page = args.object;
	viewModel = new observable.Observable();

	const query = new Kinvey.Query();
	var userid = Kinvey.User.getActiveUser().data._id

	/*
		if the users role is "Guest" then query the datastore where userid = Guest
		else if the users role is "service-provider" query the datastore where userid = ServiceProvider
	*/
	if (Kinvey.User.getActiveUser().data.role == "Guest") {
		// args.object.bindingContext = pageData;
		query.equalTo('Guest', userid);

	} else if (Kinvey.User.getActiveUser().data.role == "service-provider") {
		// args.object.bindingContext = pageData;
		query.equalTo('ServiceProvider', userid);
	}

	/*
		find the data from the datastore based on the given query 
		and attach it to the viewmodel named myJobs 
	*/
	const subscription = dataStore.find(query)
		.subscribe(function (entities) {
			// ...
			viewModel.set("myJobs", entities);
			console.log(viewModel.get("myJobs"));

			page.bindingContext = viewModel;
		}, function (error) {
			console.log(error);
			// ...

		}, function () {
			// ...
		});


};


exports.accept = function (args) {

	var index = args.index;
	var vm = viewModel.get("myJobs", args.index);
	var id = vm[index]._id;

	/* 
		If a user has the role of service-provider, then they can click
		on an item in the list and accept the job
	*/
	if (Kinvey.User.getActiveUser().data.role == "service-provider") {

		if (vm[index].status == "requested") {

			/*
				Accept/reject job popup
			*/

			dialogs.confirm({
				title: "Accept/Reject Job",
				message: "Do you wish to accept or reject this job",
				okButtonText: "Accept",
				cancelButtonText: "Reject"
				// neutralButtonText: "Reject"
			}).then(function (result) {

				/*
					If accept is pressed then update the job status to accepted 
				*/

				if (result = true) {

					console.log(id);
					var promise = dataStore.save({
							_id: id,
							Guest: vm[index].Guest,
							ServiceProvider: vm[index].ServiceProvider,
							productName: vm[index].productName,
							productID: vm[index].productID,
							productPrice: vm[index].productPrice,
							Date: vm[index].Date,
							time: vm[index].time,
							// rating: service,
							status: 'accepted'
						})

						.then(function (entity) {
							// ...
							console.log(entity);
							alert("the job has been accepted");
						})
						.catch(function (error) {
							console.log(error);
							// ...
						});

				}

			});
		} else if (vm[index].status == "accepted") {
			dialogs.confirm({
				title: "Job completed?",
				message: "Is the job completed?",
				okButtonText: "Yes",
				cancelButtonText: "No"
				// neutralButtonText: "Reject"
			}).then(function (result) {

				/*
					If yes is pressed then update the job status to completed 
				*/

				if (result = true) {

					console.log(id);
					var promise = dataStore.save({
							_id: id,
							Guest: vm[index].Guest,
							ServiceProvider: vm[index].ServiceProvider,
							productName: vm[index].productName,
							productID: vm[index].productID,
							productPrice: vm[index].productPrice,
							Date: vm[index].Date,
							time: vm[index].time,
							status: 'completed'
						})

						.then(function (entity) {
							// ...
							console.log(entity);
							alert("the job has been completed");
						})
						.catch(function (error) {
							console.log(error);
							// ...
						});

				}

			});
		}
	} else if (Kinvey.User.getActiveUser().data.role == "guest") {

		if (vm[index].status == "completed") {

			dialogs.action({
				message: "Please select how many stars you would give this service",
				cancelButtonText: "Cancel",
				actions: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]
			}).
			then(function (result) {

				/*
					Sets rating variable based on the number of starts the user gave the service 
				*/

				if (result == "1 star") {
					var rating = 1;
					alert("reviewed");

				} else if (result == "2 stars") {
					var rating = 2;
					alert("reviewed");

				} else if (result == "3 stars") {
					var rating = 3;
					alert("reviewed");

				} else if (result == "4 stars") {
					var rating = 4;
					alert("reviewed");

				} else if (result == "5 stars") {
					var rating = 5;
					alert("reviewed");

				}

				var promise = dataStore.save({
						_id: id,
						Guest: vm[index].Guest,
						ServiceProvider: vm[index].ServiceProvider,
						productName: vm[index].productName,
						productID: vm[index].productID,
						productPrice: vm[index].productPrice,
						Date: vm[index].Date,
						time: vm[index].time,
						rating: rating,
						status: 'completed & reviewed'
					})

					.then(function (entity) {
						// ...
						console.log(entity);
						const query = new Kinvey.Query();
						var userid = Kinvey.User.getActiveUser().data._id
						var avgrating;
						query.equalTo('productID', vm[index].productID);
						const subscription = dataStore.find(query)
							.subscribe(function (entities) {
								var count = 0;
								var totalrating = 0;
								var avgrating = 0.0;
								var i;

								for (i in entities) {
									if (entities.hasOwnProperty(i)) {
										var productrating = entities[i].rating;
										totalrating = totalrating + productrating;
										count++;
									}
								}
								avgrating = totalrating / count;

								var promise = dataStore2.save({
									_id: vm[index].productID,
									rating: avgrating,
									count: count,
									price: vm[index].productPrice,
									ServiceProviderID: vm[index].ServiceProvider,
									Flower: "Lily"
								})

							}, function (error) {
								console.log(error);
								// ...

							}, function () {
								// ...
							});

					})
					.catch(function (error) {
						console.log(error);
						// ...
					});

			});


		} else {
			dialogs.confirm({
				title: "Delete Job",
				message: "Do you want to cancel this request?",
				okButtonText: "Confirm",
				cancelButtonText: "Cancel"
				// neutralButtonText: "Reject"
			}).then(function (result) {

				/*
					If yes is pressed then update the job status to completed 
				*/

				if (result = true) {

					var promise = dataStore.save({
							_id: id,
							Guest: vm[index].Guest,
							ServiceProvider: vm[index].ServiceProvider,
							productName: vm[index].productName,
							productID: vm[index].productID,
							productPrice: vm[index].productPrice,
							Date: vm[index].Date,
							time: vm[index].time,
							// rating: service,
							status: 'cancelled'
						})

						.then(function (entity) {
							// ...
							console.log(entity);
							alert("the job has been cancelled");
						})
						.catch(function (error) {
							console.log(error);
							// ...
						});

				}
			});
		}
	}
};