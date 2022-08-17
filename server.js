const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const host = 'localhost';
const port = 8080;
const db = require('./db/db');

const authController = require('./controllers/auth');
// Body parser middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/', (req, res) => {
	const query = db.select().from('users');

	console.log(query.toString());
	query.then(rows => console.log(rows));

	res.send('home');
});

app.post('/register', authController.register);

app.listen(port, () => {
	console.log(`Example app listening http://${host}:${port}`);
});
