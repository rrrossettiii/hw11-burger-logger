// DEPENDENCIES;
// =============
require("dotenv").config();
var express = require("express");
var expressHB = require("express-handlebars");
var router = require("./controllers/burgerController.js");

// - PORT;
var PORT = process.env.PORT || 8080;

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
app.use(router);

// - listener
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
