const { getProductCartQuery } = require('../database/queries');

const getProductsCart = (req, res) => {
  const { token } = req.cookies;
  const payload = token.split('.')[1];

  const parseJwt = (payload) => JSON.parse(Buffer.from(payload, 'base64').toString());
  const { id } = parseJwt(payload);

  getProductCartQuery(id)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
};

module.exports = getProductsCart;
