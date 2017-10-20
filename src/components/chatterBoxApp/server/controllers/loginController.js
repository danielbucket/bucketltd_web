const db = require('../knex')

const userLogin = (req,res) => {
	const user = {
		user_name: req.body.user_name,
		user_email: req.body.user_email
	}
	const user_password = req.body.user_password

	db('users').where(user)
	.select('user_password')
	.then(password => {
		if(password[0].user_password === user_password) {
			return res.status(200).json(Object.assign(user, {loginStatus: true}))
		} else {
			return res.status(400).json({ error: "credentials not found"})
		}
	})
	.catch(error => res.status(500).json({ error }))
}

const getAllUsers = (req,res) => {
	db('users')
	.select('*')
	.then(users => res.status(200).json({ users }))
	.catch(error => res.stutus(200).json({ error }))
}

module.exports = {
	userLogin,
	getAllUsers
}