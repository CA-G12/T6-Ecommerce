const { Router } = require('express');
const { signIn, postSignup, getProductsCart } = require('../controllers');

const router = Router();
router.get('/usercart', getProductsCart);
router.post('/signin', signIn);
router.post('/signup', postSignup);
module.exports = router;
