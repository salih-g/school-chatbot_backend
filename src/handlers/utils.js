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

module.exports = {
	formatMessage,
};
