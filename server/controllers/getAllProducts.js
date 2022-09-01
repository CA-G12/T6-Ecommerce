const { getAllProductsQuery } = require('../database/queries');

const getAllProducts = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    getAllProductsQuery()
      .then((data) => data.rows)
      .then(result => res.json(result))
      .catch((err) => console.log(err));
  } else {
    res.json({ message: 'not-login' });
  }
};

module.exports = getAllProducts;
