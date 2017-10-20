require('dotenv').config();
const db = require('../../knex');
const webToken = require('jsonwebtoken');

const loginAuth = (req,res,next) => {
	for(let requiredParameter of ['user_name', 'user_email', 'user_password']) {
		if(!req.body[requiredParameter]) {
			return res.status(200).json({
				error: `Missing required parameter of ${requiredParameter}`
			})
		}
	}

	const token = process.env.ADMIN_TOKEN
	console.log('token: ', token)

	return next()
}

module.exports = {
	loginAuth
}