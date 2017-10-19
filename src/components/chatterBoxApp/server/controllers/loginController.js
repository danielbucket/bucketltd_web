const db = require('../router')

const userLogin = (req,res) => {
	console.log('dbaseee: ', db)
}

module.exports = {
	userLogin
}