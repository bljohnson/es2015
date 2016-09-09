var names = ["Max", "Adam", "Nancy", "Cedar"];

function loadProfiles (userNames) {
	if (userNames.length > 3) {
		let loadingMessage = "This may take awhile!";
		// loadingMessage scoped to if block
		console.log('loadingMessage: ', loadingMessage);
		// let variables are not hoisted to top of function
		// flashMessage trapped inside else block so will error out
		console.log('flashMessage:', flashMessage);
	} else {
		let flashMessage = "Loading!";
	}
}

loadProfiles(names);
