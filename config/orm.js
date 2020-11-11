// Import MySQL connection.
var connection = require("./connection");

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
      // - insert quotations around title;
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
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
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
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
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
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
// - Export to models: (burger.js);
module.exports = orm;
