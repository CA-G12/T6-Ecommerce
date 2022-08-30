const { Router } = require('express');
const controller = require('../controllers');

const router = Router();

router.post('/signin', controller.signIn);

module.exports = router;
