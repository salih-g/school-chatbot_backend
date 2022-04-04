const formatMessage = (message) => {
	return message
		.toLowerCase()
		.replace('ğ', 'g')
		.replace('ü', 'u')
		.replace('ş', 's')
		.replace('ı', 'i')
		.replace('ö', 'o')
		.replace('ç', 'c');
};

const commands =
	'Yapabiliceklerim: <br> - Saat <br> -  "Şehir" hava durumu  örn: Düzce hava durumu';

module.exports = {
	formatMessage,
	commands,
};
