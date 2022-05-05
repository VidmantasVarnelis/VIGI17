const express = require('express');
const cors = require('cors');
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
const cars = [];

app.get('/', (req, res) => {
	// res.send('Serveris veikia');
	// "Access-Control-Allow-Origin", "*"
	// res.setHeader('Access-Control-Allow-Origin', '*');
	res.json(cars);
});

app.post('/', (req, res) => {
	console.log(req.body);
	cars.push(req.body.car);
	res.json({
		status: 'Masina sukurta',
		cars,
	});
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
