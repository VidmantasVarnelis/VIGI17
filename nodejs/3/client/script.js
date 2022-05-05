const getCars = async () => {
	try {
		const response = await fetch('http://localhost:3001/');
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

const outputEl = document.getElementById('output');
const main = async () => {
	const cars = await getCars();
	console.log(cars);
	if (cars.length === 0) {
		outputEl.textContent = 'Automobiliu nera';
		return;
	}
	cars.forEach((car) => {
		const p = document.createElement('p');
		p.textContent = car;
		outputEl.append(p);
	});
};
main();
