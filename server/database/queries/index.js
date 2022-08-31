const selectUserEmail = require('./signIn');
const postSignupQuery = require('./signupQuery');
const getProductCartQuery = require('./getProductCartQuery');
const deleteCartQuery = require('./deleteCartQuery');
const getAllProductsQuery = require('./getAllProductsQuery');

module.exports = {
  selectUserEmail, postSignupQuery, getProductCartQuery, deleteCartQuery, getAllProductsQuery,
};
