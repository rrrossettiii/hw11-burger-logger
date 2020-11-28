// DEPENDENCIES;
// =============
require("dotenv").config();
const express = require("express");
const expressHB = require("express-handlebars");

// - PORT;
const PORT = process.env.PORT || 8080;

// Express;
// =============
const app = express();
// - Express data parsing;
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  - Express-Handlebars;
app.engine("handlebars", expressHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// - ROUTES;
var router = require("./controllers/burgerController.js");
app.use(router);

// - listener
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
