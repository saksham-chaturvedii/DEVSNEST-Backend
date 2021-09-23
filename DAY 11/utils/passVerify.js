/**
 * password regex verification
 *
 * Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
 */
const passVerify = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

module.exports = passVerify;
