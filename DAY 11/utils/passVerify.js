// password regex verification

const passVerify = (password) => {
  const regex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  return regex.test(password);
};

module.exports = passVerify;
