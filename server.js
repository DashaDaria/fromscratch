var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("now on " + PORT);
});
