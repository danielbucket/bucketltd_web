const express = require('express');
const router = express.Router();

const loginController = require('./controllers/loginController');
const auth = require('./controllers/middleware/authorize')

router.post('/login', auth.loginAuth, loginController.userLogin)
router.get('/users', loginController.getAllUsers)

module.exports = router;
