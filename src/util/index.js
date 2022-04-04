const axios = require('axios');

const utils = {
	fetchData: async (url) => {
		try {
			return await axios.get(url).then((response) => response.data);
		} catch (error) {
			return error.message || error;
		}
	},
};

module.exports = utils;
