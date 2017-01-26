// Wait for the document to load and run the init function
document.addEventListener("DOMContentLoaded", init);



function init(ev) {

	//Create a variable to hold all elements (btns) with a class of "link"
	var pl = document.querySelectorAll(".link");

	// create a variable to hold all sections with a data-role of 'page'
	var pages = document.querySelectorAll("[data-role=page]");

	// Use a for each loop to pass each button an event listener
  [].forEach.call(pl, function (obj, index) {

		// Add an event listener of "touchend" to each element 
		obj.addEventListener("touchend", function (ev) {

			// prevent further action on the selected element
			obj.preventDefault();
			// 
			ev.currentTarget.preventDefault();
			this.preventDefault();
			this.click();
		});

		// Add a click event listener on the element and run the 'navigate' function
		obj.addEventListener("click", navigate);

	});


	// Use a for Each loop to pass variable pages to a function
  [].forEach.call(pages, function (obj, index) {

		// Giving every element in pages a class of "inactive-page" at the beginning of the application
		obj.className = "inactive-page";

	});
}

// Navigation handling happens here
function navigate(ev) {

	// Prevent the default action 
	ev.preventDefault();

	//Create a variable to hold the href using the element passed
	var href = ev.target.href;

	// Isolate the id by splitting the href after '#'
	var id = href.split("#")[1]; // splits the link at '#' 

	// create a handle to all the sections with data-role= 'page'
	var pages = document.querySelectorAll("[data-role=page]");

	// Use a for each loop to iterate through each section and compare its id
  [].forEach.call(pages, function (obj, index) {

		//If the current page id is exactly equal to the id clicked....
		if (obj.id == id) {

			// check if the object does not have a class of 'active-page'
			if (obj.className != "active-page") {

				// If it does not, then give it said class and show
				obj.className = "active-page";
			}
			// Else if the current page id is not exactly equal to id clicked...
		} else {
			//If the object does not have a class of 'inactive-page'
			if (obj.className != "inactive-page") {

				//Set object with said class and hide
				obj.className = "inactive-page";
			}
		}

	});
}