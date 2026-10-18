const db = require("../db/queries");

async function newMessagePost(req, res) {
  await db.newUserPost(req.body.messageTitle, req.body.new, req.body.userId);
  res.render("userdashboard", { oldMessages: [] });
}

async function oldMessagesListGet(req, res) {
  const oldMessages = await db.getMessagesByUserId(req.params.id);
  console.log(oldMessages);
  res.render("userdashboard", { oldMessages: oldMessages });
}

module.exports = { newMessagePost, oldMessagesListGet };
