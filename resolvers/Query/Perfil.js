const { perfis } = require('../../data/db');
module.exports = {
	listPerfis() {
		return perfis;
	}
};