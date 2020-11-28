// *********************
// DOM Handlers;
// *********************

// Devoured;
// =============:
$(function () {
	$(".devoured").on("click", function (event) {
		const id = $(this).data("id");
		const justDevoured = $(this).data("devoured");
		const devouredState = {
			devoured: justDevoured
		};

		// - PUT Request;
		let currentURL = window.location.origin;
		$.ajax(currentURL + "/api/burgers/devoured" + id, {
			type: "PUT",
			data: devouredState
		}).then(function () {
			console.log("changed devouredState to", justDevoured);
			// - Reload the page/update list;
			location.reload();
		});
	});

	// Submit Event;
	// =============:
	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		const newBurger = {
			burger_name: $("#burger-name").val().trim(),
			devoured: $("[name=devoured]:checked").val().trim()
		};

		// POST Request;
		// =============:
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function () {
			console.log("created new burger");
			// - Reload the page/update list;
			location.reload();
		});
	});

	$(".delete-burger").on("click", function (event) {
		var id = $(this).data("id");

		// DELETE Request;
		// =============:
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(function () {
			console.log("deleted burger", id);
			$(".devoured-burger" + id).remove();
			// - Reload the page/update list;
			location.reload();
		});
	});
});
