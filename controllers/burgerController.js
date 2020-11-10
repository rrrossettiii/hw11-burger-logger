// DEPENDENCIES;
// =============:
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Routes;
// =============:
router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = {
			burgers: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// POST;
// =============:
router.post("/api/burgers", function (req, res) {
	burger.create(
		["name", "devoured"],
		[req.body.name, req.body.devoured],
		function (result) {
			// - Send back ID;
			res.json({ id: result.insertId });
		}
	);
});

// PUT;
// =============:
router.put("/api/burgers/:id", function (req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update(
		{
			eaten: req.body.devoured,
		},
		condition,
		function (result) {
			if (result.changedRows == 0) {
				// If no rows were changed, then the ID must not exist, so 404
				return res.status(404).end();
			} else {
				res.status(200).end();
			}
		}
	);
});

// Delete;
// =============:
router.delete("/api/burgers/:id", function (req, res) {
	var condition = "id = " + req.params.id;

	burger.delete(condition, function (result) {
		if (result.affectedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// - Export to: (server.js);
module.exports = router;
