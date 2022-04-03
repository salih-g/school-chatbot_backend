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
		const formatedMessage = messageText
			.toLowerCase()
			.replace('ğ', 'g')
			.replace('ü', 'u')
			.replace('ş', 's')
			.replace('ı', 'i')
			.replace('ö', 'o')
			.replace('ç', 'c');
	}
}

module.exports = MessageHandler;
