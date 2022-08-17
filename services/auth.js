const authDAO = require('../dao/auth');

class AuthService {
	register(authDto) {
		const { email, name, joined } = authDto;
		return authDAO.register(email, name, joined);
	}
}

module.exports = new AuthService();
