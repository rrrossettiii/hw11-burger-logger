// Import ORM;
const orm = require("../config/orm.js");

// Burger;
const burger = {
	selectAll: function (cb) {
		orm.all("burgers", function (res) {
			cb(res);
		});
	},
	// - columns and values as arrays;
	create: function (cols, values, cb) {
		orm.create("burgers", cols, values, function (res) {
			cb(res);
		});
	},
	update: function (objColValues, condition, cb) {
		orm.update("burgers", objColValues, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete("burgers", condition, function (res) {
			cb(res);
		});
	},
};
// - Exports to controller: (burgerController.js);
module.exports = burger;
