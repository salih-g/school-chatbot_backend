const socketIO = require('socket.io');

const server = require('./server');
const { CLIENT_URL } = require('./config');

const io = socketIO(server, {
	cors: {
		origin: CLIENT_URL,
		methods: ['GET', 'POST', 'DELETE'],
		credentials: true,
	},
	allowEIO3: true,
});


io.on('connection', (socket) => {
	socket.on('connect', (socket) => {
      console.log(`${socket.id} connected`)
	});

	
});

module.exports = io;
