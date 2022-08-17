const db = require('../db/db');

class AuthDAO {
	async register(email, name, joined = new Date()) {
		const [user] = await db('users')
			.insert({ email, name, joined })
			.returning('*');
		return user;
	}
}

module.exports = new AuthDAO();
