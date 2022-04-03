const { formatMessage, commands } = require('./helpers');

class MessageHandler {
	constructor(messages, io) {
		this.messages = messages;
		this.io = io;
	}

	pushBotMessages(text, timeout = 1000, type = 'b') {
		setTimeout(() => {
			this.messages.push({
				type,
				text,
			});
			this.io.emit('messages', this.messages);
		}, timeout);
	}

	handleUserMessages(messageText) {
		const formatedMessage = formatMessage(messageText);

		if (formatedMessage.includes('komut')) {
			return this.pushBotMessages(commands, 500);
		}

		this.pushBotMessages('Yazdığını tanıyamadım.', 500);
		this.pushBotMessages('Yapabildiklerimi görmek için "Komut" yazabilirsin.');
	}
}

module.exports = MessageHandler;
