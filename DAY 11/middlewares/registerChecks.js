/**
 * regex match (include @ and .)
 * min 6 characters long
 * 1 lc, 1 UC, 1 number, 1 special char
 *
 */

const emailVerify = require("../utils/emailVerify");
const passVerify = require("../utils/passVerify");

const checksBeforeRegister = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    email.length > 0 &&
    typeof password === "string" &&
    emailVerify(email) &&
    passVerify(password) &&
    password === confirmPassword
  ) {
    // res.status(200).send("Data Validity Confirmed");
    next()
  } else {
    res.status(401).send("Initial Checks Failed.");
  }
};

module.exports = checksBeforeRegister;
