const logger = require('./logger');
const server = require('./server');
const socket = require('./socket');
const { PORT } = require('./config');

process.on('unhandledRejection', (reason, p) =>
	logger.error('Unhandled Rejection at: Promise ', p, reason),
);

server.on('listening', () =>
	logger.info(`App started on:http://localhost:${PORT}`),
);
socket.on('connection', () =>
	logger.info(`Socket listening on:http://localhost:${PORT}`),
);
