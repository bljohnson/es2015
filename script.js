// declaring variables with let
function loadProfiles (userNames) {
	if (userNames.length > 3) {
		let loadingMessage = 'This may take awhile!';
		// loadingMessage scoped to if block
		console.log('loadingMessage: ', loadingMessage);
		// let variables are not hoisted to top of function
		// flashMessage trapped inside else block so will give reference error
		console.log('flashMessage:', flashMessage);
	} else {
		let flashMessage = 'Loading!';
	}
}

loadProfiles(['Max', 'Adam', 'Nancy', 'Cedar']);

// declarations with let in for loops
function newFunction(userNames) {
	for(let i in userNames) {
			// outputs correct value for each iteration through loop
			console.log('Fetched for ', userNames[i]);
		}
}

newFunction(['Max', 'Adam', 'Nancy', 'Cedar']);
