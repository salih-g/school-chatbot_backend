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

let messages = [];

io.on('connection', (socket) => {
	messages = [];
	console.log(`${socket.id} connected`);

	messages.push({
		type: 'b',
		text: 'Hoşgeldin',
	});

	io.emit('messages', messages);
	//Add typing
	pushBotMessages('Komutları görmek için komut yazabilirsin.', 1000);

	socket.on('new_message', (message) => {
		messages.push({
			type: 'u',
			text: message.text,
		});
		io.emit('messages', messages);

		if (message.text.includes('komut')) {
			pushBotMessages('Komutlar', 500);
		}
	});

	socket.on('disconnect', () => {
		messages = [];
	});
});

const pushBotMessages = (text, timeout) => {
	setTimeout(() => {
		messages.push({
			type: 'b',
			text,
		});
		io.emit('messages', messages);
	}, timeout);
};

module.exports = io;
