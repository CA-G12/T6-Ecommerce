const { Router } = require("express");
const { signIn } = require("../controllers");
const { postSignup } = require("../controllers");

const router = Router();

router.post("/signin", signIn);
router.post("/signup", postSignup);
module.exports = router;
