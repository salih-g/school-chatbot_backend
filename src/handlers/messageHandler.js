const { formatMessage, commands } = require('./helpers');
const utils = require('../util/index');

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

	async handleUserMessages(messageText) {
		const formatedMessage = formatMessage(messageText);

		if (formatedMessage.includes('saat')) {
			return this.pushBotMessages(
				`Saat şuanda: ${new Date().toLocaleTimeString('tr-TR')}`,
				500,
			);
		}
		if (formatedMessage.includes('hava')) {
			const city = formatedMessage.split(' ')[0];

			const response = await utils.fetchData(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=387db852a546843d50dc16e5bf0f9838&lang=tr`,
			);
			return this.pushBotMessages(
				`${city.toUpperCase()} hava durumu ${
					response.weather[0].description
				} ve sıcaklık yaklaşık ${(response.main.temp - 273).toFixed()} derece.`,
				500,
			);
		}
		// if (formatedMessage.includes('komut')) {
		// 	return this.pushBotMessages(new Date().toLocaleTimeString('tr-TR'), 500);
		// }

		if (formatedMessage.includes('komut')) {
			return this.pushBotMessages(commands, 500);
		}

		this.pushBotMessages('Yazdığını tanıyamadım.', 500);
		this.pushBotMessages('Yapabildiklerimi görmek için "Komut" yazabilirsin.');
	}
}

module.exports = MessageHandler;
