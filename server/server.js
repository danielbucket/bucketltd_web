const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./router');
const chatterboxRouter = require('../src/components/chatterBoxApp/server/router');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

const PORT = process.env.PORT || 4774;

app.set('port', PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended:true } ));

app.use('/chatterbox', chatterboxRouter);
app.use('/api/v1', router);


app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT}`)
});

module.exports = app;