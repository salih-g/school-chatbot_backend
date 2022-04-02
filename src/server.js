const app = require('./app');
const { PORT } = require('./config');

const server = app.listen(PORT);

module.exports = server;
