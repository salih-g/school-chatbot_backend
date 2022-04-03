const { formatMessage } = require('./utils');

class MessageHandler {
	constructor(messages, io) {
		this.messages = messages;
		this.io = io;
	}

	pushBotMessages(text, timeout, type = 'b') {
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

		// switch (formatedMessage) {
		// 	case x:
		// 		formatedMessage;
		// 		// code block
		// 		break;
		// 	case y:
		// 		// code block
		// 		break;
		// 	default:
		// 		this.pushBotMessages;
		// }
	}
}

module.exports = MessageHandler;
