const express = require('express');
const router = express.Router();

const loginController = require('./controllers/loginController');

router.post('/login', loginController.userLogin)
router.get('/users', loginController.getAllUsers)

module.exports = router;
