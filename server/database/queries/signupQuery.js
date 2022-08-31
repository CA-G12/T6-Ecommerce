const connection = require('../config/connection');

const postSignupQuery = (data) => connection.query(
  'insert into users(first_name, last_name, email, password) values($1, $2, $3, $4)',
  data,
);

module.exports = postSignupQuery;
