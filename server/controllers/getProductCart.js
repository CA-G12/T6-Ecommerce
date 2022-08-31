const { getProductCartQuery } = require("../database/queries");

const getProductsCart = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    const payload = token.split(".")[1];

    const parseJwt = (payload) =>
      JSON.parse(Buffer.from(payload, "base64").toString());
    const { id } = parseJwt(payload);

    getProductCartQuery(id)
      .then((data) => res.send(data.rows))
      .catch((err) => console.log(err));
  } else {
    res.json({ message: "notFound" });
  }
};

module.exports = getProductsCart;
