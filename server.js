var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static( __dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require our routes 
var routes = require('./controllers/routes.js');
app.use("/", routes)


var port = 3000;
app.listen(port);