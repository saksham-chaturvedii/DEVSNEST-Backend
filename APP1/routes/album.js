var express = require("express");
const res = require("express/lib/response");
var path = require("path");
var router = express.Router();

// router.use(express.static(path.join(__dirname, "../public")));

router.get("/", (req, res) => {
  res.render("index", { a1: "Z-1", a2: "Z-2", a3: "Z-3" });
});


module.exports = router;
