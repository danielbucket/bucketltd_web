const db = require('../knex')

const userLogin = (req,res) => {
	console.log(req.body)
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