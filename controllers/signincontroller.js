function signInFormGet(req, res) {
  res.render("signin");
}

function userDashBoardGet(req, res) {
  res.render("userdashboard");
}

module.exports = { signInFormGet, userDashBoardGet };
