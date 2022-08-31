const { getAllProductsQuery } = require('../database/queries');

const getAllProducts = (req, res) => {
  getAllProductsQuery()
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
};

module.exports = getAllProducts;
