var express = require("express");
var router = express.Router();

const checksBeforeRegister = require("../middlewares/registerChecks.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", checksBeforeRegister);
module.exports = router;

/**
 * SECURITY, PERFORMANCE, EDGE CASES
 * To Do:
 *
 * 1. Email
 * -> regex match (include @ and .)
 * -> input mandatory (frontend)
 * -> Check if user already exists or not
 *
 * 2. Password
 * -> min 8 characters long
 * -> 1 lc, 1 UC, 1 number, 1 special char
 * -> encrypt password [add salt to password, hash password]
 * -> input mandatory (frontend)
 * -> Confirm Password -> pass == confirm pass
 *
 * 3. Security:
 * Handle SQL injection
 *
 * 4. Save into DB
 * -> connect to a db [Redis, Mongo, PostgreSQL]
 */
