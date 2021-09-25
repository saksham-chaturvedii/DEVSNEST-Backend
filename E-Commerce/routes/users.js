var express = require("express");
var router = express.Router();
const pool = require("../database/onlyPostgres");

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query('Select * from "User"', (err, result) => {
    console.log(8)
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
