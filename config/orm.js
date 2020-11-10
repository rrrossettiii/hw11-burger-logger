// Import MySQL connection.
const connection = require("./connection");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}
// The above helper function loops through and creates array of question marks and generates a string;

// Helper function to convert pairs to SQL syntax
function objToSql(ob) {
	var arr = [];

	// loop through var keys and push string int arr
	for (var key in ob) {
		var value = ob[key];
		// - skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
			// if string contains any spaces, insert quotations around title
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}

	// translate array of strings to (1) comma-separated string
	return arr.toString();
}

// ORM for all SQL statements;
var orm = {
	// - SELECT;
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// - INSERT;
	insert: function (table, cols, values, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(values.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, values, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// - UPDATE;
	update: function (table, objColValues, condition, cb) {
		let queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColValues);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// - DELETE;
	delete: function (table, condition, cb) {
		let queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
};
// - Export to models: (burger.js);
module.exports = orm;
