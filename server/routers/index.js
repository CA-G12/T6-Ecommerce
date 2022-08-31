const { Router } = require("express");
const {
  signIn,
  postSignup,
  getProductsCart,
  deleteProductCart,
  getAllProducts,
  logOut,
} = require("../controllers");

const router = Router();

router.get("/delete/product/cart/:id", deleteProductCart);
router.get("/usercart", getProductsCart);
router.get("/products", getAllProducts);

router.post("/signin", signIn);
router.post("/signup", postSignup);
router.get("/logout", logOut);

module.exports = router;
