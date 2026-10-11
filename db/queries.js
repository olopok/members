const pool = require("../config/pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMember(firstname, lastname, email, password) {
  await pool.query(
    "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)",
    [firstname, lastname, email, password],
  );
}

async function newUserPost(title, body, userId) {
  await pool.query(
    "INSERT INTO messages (title, body, user_id) VALUES ($1, $2, $3)",
    [title, body, userId],
  );
}

module.exports = { getAllMessages, newMember, newUserPost };
