// es6 - import
// node by default naudoja commanJS modulius - require
const fn = require('./test-file');
const http = require('http');
const express = require('express');
const cors = require('cors');
const PORT = 5000;
//Node http modulio sukurtas serveris
// console.log(fn.getMyLastName());

// const server = http.createServer((request, response) => {
// 	if (request.url === '/') {
// 		response.write('Hello world');
// 		response.end();
// 	} else if (request.url === '/about') {
// 		response.write('Hello world this about page');
// 		response.end();
// 	}
// });
// server.listen(PORT);
// console.log(`server is running port: ${PORT}`);

// Express js sukurtas serveris

const app = express();

app.use(cors());

app.get('/', (request, response) => {
	response.write('Hello world I am Vidmantas');
	response.end();
});
app.get('/about', (req, res) => {
	// res.write('Hello world this about page');
	// res.end();
	// json
	// res.json({
	// 	name: 'Vidmantas',
	// });

	res.status(200).json({
		name: 'Vidmantas',
	});
});

app.listen(PORT, () => console.log(`server is running port: ${PORT}`));
