const pool = require("../config/pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT u.id AS user_id, u.first_name, u.last_name, u.username, u.status, m.id AS message_id, m.title, m.body, m.created_at FROM messageS m JOIN users u ON u.id = m.user_id ORDER BY m.created_at DESC",
  );
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
