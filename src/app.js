const compress = require('compression');
const express = require('express');
const cors = require('cors');

const app = express();

app.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	);
	next();
});

app.use(cors());
app.use(compress());
app.use(express.json());

module.exports = app;
