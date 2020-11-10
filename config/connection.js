// MYSQL;
// =============*
var mysql = require("mysql");
// -connection;
var connection;
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: process.env.LOCAL_PASSWORD,
		database: "hmu73ykpml5lss96",
	});
}
// -on connect;
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});
// - Exports;
module.exports = connection;
