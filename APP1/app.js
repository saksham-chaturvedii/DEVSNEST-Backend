var express = require("express");
var path = require("path");

var albumRouter = require("./routes/album");
var downloadRouter = require("./routes/download");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/albums", albumRouter);
app.use("/download/images", downloadRouter);
app.use('/', (req, res)=>{res.redirect('/albums');});
module.exports = app;
// port-> 1111
