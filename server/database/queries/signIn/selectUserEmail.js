const connection = require('../../config/connection');

const selectUserEmail = (email) => connection.query('SELECT id, password FROM users WHERE email = $1', [email]);

module.exports = selectUserEmail;
