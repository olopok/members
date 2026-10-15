function signInFormGet(req, res) {
  const [message] = req.session.messages ?? [];
  delete req.session.messages;
  res.render("signin", { message });
}

function userDashBoardGet(req, res) {
  res.render("userdashboard");
}

module.exports = { signInFormGet, userDashBoardGet };
