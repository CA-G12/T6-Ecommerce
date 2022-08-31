const signIn = require('./signIn');
const postSignup = require('./signup');
const getProductsCart = require('./getProductCart');
const getAllProducts = require('./getAllProducts');
const deleteProductCart = require('./deleteProductCart');

module.exports = {
  signIn, postSignup, getProductsCart, deleteProductCart, getAllProducts,
};
