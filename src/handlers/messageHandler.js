const { formatMessage } = require('./utils');

class MessageHandler {
	constructor(messages, io) {
		this.messages = messages;
		this.io = io;
	}

	pushBotMessages(text, type, timeout) {
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
	}
}

module.exports = MessageHandler;
