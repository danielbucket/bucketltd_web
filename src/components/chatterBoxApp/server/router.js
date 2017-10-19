const express = require('express');
const router = express.Router();
const db = require('../../../../knexfile');

const loginController = require('./controllers/loginController');

router.get('/login', loginController.userLogin)

module.exports = {
	router,
	db
};
