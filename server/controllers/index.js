const signIn = require("./signin");
const postSignup = require("./signup");
const getProductsCart = require("./getProductCart");
const getAllProducts = require("./getAllProducts");
const deleteProductCart = require("./deleteProductCart");
const logOut = require("./logout");

module.exports = {
  signIn,
  postSignup,
  getProductsCart,
  deleteProductCart,
  getAllProducts,
  logOut,
};
