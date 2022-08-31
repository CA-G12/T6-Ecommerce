const { deleteCartQuery } = require("../database/queries");

const deleteCart = (req, res) => {
  const { id } = req.body;
  deleteCartQuery(id)
    .then((data) => res.json({ message: "Item was deleted" }))
    .catch((err) => res.send("Internal Server Error"));
};

module.exports = deleteCart;