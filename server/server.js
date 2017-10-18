const express = require('express');
const app = express();
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env]
const db = require('knex')(config)

const PORT = process.env.PORT || 4774;

app.set('port', PORT)

app.get('/users', (req,res) => {
	db('users')
	.select('*')
	.then(data => res.status(200).json({ data }))
	.catch(error => res.status(500).json({ error }))
})


app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT}`)
})

module.exports = app