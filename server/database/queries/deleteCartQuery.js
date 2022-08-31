const connection = require("../config/connection");

const deleteCartQuery = (id) => {
  return connection.query("delete * from cart where id = $1", [id]);
};

module.exports = deleteCartQuery;