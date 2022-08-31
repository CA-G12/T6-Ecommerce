const { Router } = require("express");
const { signIn, postSignup, getProductsCart, deleteProductCart } = require("../controllers");

const router = Router();
router.get("/delete/product/cart/:id", deleteProductCart);
router.get("/usercart", getProductsCart);
router.post("/signin", signIn);
router.post("/signup", postSignup);
module.exports = router;
