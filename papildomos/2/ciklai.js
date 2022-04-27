export const mainFn = () => {
	//for
	// su index
	let sum = 0;
	for (let index = 0; index < 5; index++) {
		// sum = sum + 1;
		// sum += 1;
		sum += index;
	}
	console.log('rezultatas', sum);

	let cars = ['BMW', 'VW', 'Audi'];
	for (let index = 0; index < cars.length; index++) {
		// cars[index] === 'VW'
		// if (index === 1) {
		// 	// break; isejau is ciklo ir ciklas nebevyksta
		// 	// continue; praleidziam/skipiname VW reiksme
		// }
		console.log(index);
		console.log('for ciklas - ', cars[index]);
	}
	// ES6 for ciklas skirtas masyvam - for of
	for (let car of cars) {
		if (car === 'VW') {
			break;
		}
		console.log('for - of ciklo masinos', car);
	}
	// cars.forEach((car, index, arr) => {
	// 	console.log(index);
	// 	console.log(arr[0]);
	// });
	//while

	// while (true) {
	//     break;
	// }
	// let index = 0;
	// while (index < cars.length) {
	// 	console.log(index);
	// 	index++;
	// }
	let index = 0;
	while (true) {
		index++;
		console.log(index);
		if (cars[index] === 'Audi') {
			break;
		}
	}
};
