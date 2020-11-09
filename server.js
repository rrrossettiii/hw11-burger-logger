// DEPENDENCIES;
// =============
require("dotenv").config();
const express = require("express");
const expressHB = require("express-handlebars");
const routes = require("./controllers/burgerController.js");

// - PORT;
const PORT = process.env.PORT || 3000;
// - listener
app.listen(PORT, function () {
	console.log("Server listening on: http://localhost:" + PORT);
});

// Express;
// =============
const app = express();
// - Express data parsing;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  - Express-Handlebars;
app.engine("handlebars", expressHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// - ROUTES;
app.use(routes);
