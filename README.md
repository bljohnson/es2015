## What's new with ES2015?

* Working through a Code School tutorial on ES2015 features
* Declaring variables with let
	* Let variables are scoped to the nearest block (any code section within curly braces) and are NOT hoisted to the top of the function. They are trapped inside their respective blocks.
	* Variables declared with let can be reassigned new values, but cannot be redeclared within the same scope.
* Declarations with let in for loops
	* Problem with using var in for loops
		* var i is hoisted to the top of the function and shared across each iteration of the loop, so i is incremented on each iteration and when callbacks run, i holds the last value assigned to it from the loop
	* Use let instead of var
		* With let there's no sharing in for loops. A new variable is created on each iteration of the loop since let variables are not hoisted. Each callback function holds reference to own version of i.
