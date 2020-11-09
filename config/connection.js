// MYSQL;
// =============*
const mysql = require("mysql");
// -connection;
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "columbiaUniversity",
	database: "burger_db",
});
// -on connect;
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});
// - Exports;
module.exports = connection;
