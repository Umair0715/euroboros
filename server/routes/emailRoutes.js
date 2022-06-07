const router = require('express').Router();
const emailController = require('./../controllers/emailController')

router.post('/sendEmail' , emailController.sendEmail);

module.exports = router;