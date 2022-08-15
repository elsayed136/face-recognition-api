const express = require('express');
const app = express();
const host = 'localhost';
const port = 8080;

// Body parser middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening http://${host}:${port}`);
});
