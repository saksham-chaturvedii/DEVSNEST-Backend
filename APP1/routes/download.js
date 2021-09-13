var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/:fileName", (req, res) => {
  //   console.log("params->", req.params);
  res.download(path.join(__dirname, "../public/images", req.params.fileName));
});

module.exports = router;
