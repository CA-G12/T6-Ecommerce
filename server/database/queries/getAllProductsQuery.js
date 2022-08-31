const connection = require('../config/connection');

const getAllProductsQuery = () => connection.query('select * from products');

module.exports = getAllProductsQuery;
