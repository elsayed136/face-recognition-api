const authService = require('../services/auth');

class AuthController {
	async register(req, res) {
		try {
			const { name, email, password } = req.body;

			if (!email || !name || !password) {
				return res.status(400).json('incorrect form submission');
			}

			// hashing password
			// const hash = bcrypt.hashSync(password);

			const user = await authService.register({ name, email });

			res.status(201).json(user);
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = new AuthController();
