var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var dataStore = Kinvey.DataStore.collection('Jobs');
var dataStore2 = Kinvey.DataStore.collection('Florist');
var dataStore3 = Kinvey.DataStore.collection('ServiceProvider');
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

						.then(function (entity2) {
							// ...
							console.log(entity2);
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

		/*
			If the job has been completed, the guest has the option to review the job,
			by giving it an overall rating of 1-5 stars
		*/

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
				} else if (result == "2 stars") {
					var rating = 2;
				} else if (result == "3 stars") {
					var rating = 3;
				} else if (result == "4 stars") {
					var rating = 4;
				} else if (result == "5 stars") {
					var rating = 5;
				}

				/*
					The entity in the Jobs collection is updated to show the rating the guest gave the job,
					and to update the status to "completed & reviewed"
				*/
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

					.then(function (entity3) {
						// ...
						console.log(entity3);
						/*
							The Jobs collection is querried to find all the jobs for the product with the same ID.
							This gets the rating of each job to get the avgrating for the product and counts
							how many times it has been used
						*/
						const query2 = new Kinvey.Query();
						var userid = Kinvey.User.getActiveUser().data._id
						var avgrating;
						query2.equalTo('productID', vm[index].productID);
						const subscription2 = dataStore.find(query2)
							.subscribe(function (entities) {
								var count = 0;
								var totalrating = 0;
								var avgrating = 0.0;
								var i;
								var length = entities.length;
								if (length !== 0) {
									for (i = 0; i < length; i++) {
										var productrating = entities[i].rating;
										if (productrating != undefined) {
											totalrating = totalrating + productrating;
											count++;
										};
									}
								}
								// for (i in entities) {
								// 	if (entities.hasOwnProperty(i)) {
								// 		var productrating = entities[i].rating;
								// 		if (productrating != undefined) {
								// 			totalrating = totalrating + productrating;
								// 			count++;
								// 		}
								// 	}
								// }
								avgrating = totalrating / count;
								// break;
								/*
									The florist collection is updated to store the avgrating and the number of times a product
									has been used
								*/
								var promise = dataStore2.save({
										_id: vm[index].productID,
										rating: avgrating,
										count: count,
										price: vm[index].productPrice,
										ServiceProviderID: vm[index].ServiceProvider,
										Flower: "Lily"
									}).then(function (entity4) {
										// ...
										console.log(entity4);
										// alert("the job has been completed");
										/*
											Gets all the information about the updated product in the database
											so that we can get the avgrating and the number of times a service provider is used
										*/

										var subscription3 = dataStore2.findById(vm[index].productID)
											.subscribe(function (entity5) {
												// ...
												var count = 0;
												var totalrating = 0;
												var avgrating = 0.0;
												var i;
												var length = entity5.length;
												if (length !== 0) {
													for (i = 0; i < length; i++) {
														var productrating = entity5[i].rating;
														if (productrating != undefined) {
															totalrating = totalrating + productrating;
															count++;
														}
													}
												}
												// for (i in entity5) {
												// 	if (entity5.hasOwnProperty(i)) {
												// 		var productrating = entity5[i].rating;
												// 		if (productrating != undefined) {
												// 			totalrating = totalrating + productrating;
												// 			count++;
												// 		}

												// 	}
												// }
												avgrating = totalrating / count;

												var promise = dataStore3.save({
													rating: avgrating,
													timesused: count,
													name: "doubles?#"
												})
												// break;
											}, function (error) {
												// ...
											}, function () {
												// ...
											});

									})
									.catch(function (error) {
										console.log(error);
										// ...
									});

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

						.then(function (entity6) {
							// ...
							console.log(entity6);
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