// DEPENDENCIES;
// =============
require("dotenv").config();
var express = require("express");
var expressHB = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

// - PORT;
var PORT = process.env.PORT || 3000;

// Express;
// =============
var app = express();
// - Express data parsing;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  - Express-Handlebars;
app.engine("handlebars", expressHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// - ROUTES;
app.use(routes);

// - listener
app.listen(PORT, function () {
	console.log("Server listening on: http://localhost:" + PORT);
});
