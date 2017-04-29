const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const items = {};
const order = [];

app.get('/items', (req, res) => {
	const values = order.map(key => items[key]);
	res.send(values);
});

app.post('/new-item', (req, res) => {
	const key = req.body.id;
	order.push(key);
	const value = req.body;
	items[key] = value;
	res.end('successfully added');
});

app.get('/items/:id', (req, res) => {
	const value = items[req.params.id];
	res.send(value);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
