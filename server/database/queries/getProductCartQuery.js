const connection = require("../config/connection");

const getProductCartQuery = (id) => {
  return connection.query(
    "select products.*, cart.id from products join cart on cart.product_id = products.id where user_id = $1",
    [id]
  );
};

module.exports = getProductCartQuery;
