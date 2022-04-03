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

const MessageHandler = require('./handlers/messageHandler');

io.on('connection', (socket) => {
	console.log(`${socket.id} connected`);
	let messages = [];
	const h = new MessageHandler(messages, io);

	h.pushBotMessages('Hoşgeldin', 0);
	h.pushBotMessages('Yapabildiklerimi görmek için "Komut" yazabilirsin.', 1000);

	socket.on('new_message', (message) => {
		h.pushBotMessages(message.text, 0, 'u');
		h.handleUserMessages(message.text);
	});
});

module.exports = io;
