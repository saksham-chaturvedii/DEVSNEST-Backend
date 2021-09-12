var express = require("express");
var path = require("path");

var indexRouter = require("./routes/index");
// var albumRouter = require("./routes/users");

var app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use("/", indexRouter);
// app.use("/album", albumRouter);

// app.use(, indexRouter);
// app.use("/users", usersRouter);

module.exports = app;
