// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
	$(".devour").on("click", function (event) {
		var id = $(this).data("id");
		var justDevoured = $(this).data("justDevoured");

		var devouredState = {
			devoured: justDevoured,
		};

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devouredState,
		}).then(function () {
			console.log("changed eaten to", justDevoured);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	// Submit Event;
	// =============:
	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		var newBurger = {
			name: $("bn").val().trim(),
			eaten: $("[name=devoured]:checked").val().trim(),
		};

		// POST Request;
		// =============:
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
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
			type: "DELETE",
		}).then(function () {
			console.log("deleted burger", id);
			// - Reload the page/update list;
			location.reload();
		});
	});
});