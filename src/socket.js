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
	console.log(`${socket.id} connected`);

	let messages = [];

	messages.push({
		type: 'b',
		text: 'Hoşgeldin',
	});
	io.emit('messages', messages);
	socket.on('new_message', (message) => {
		console.log(message.text);
		// io.emit('messages', messages);
	});
});

module.exports = io;
