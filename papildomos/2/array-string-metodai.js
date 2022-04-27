export const main = () => {
	const colors = ['black', 'white', 'red', 'blue', 'green'];
	// ===============================
	// FOREACH
	// ===============================
	// neturi returno.
	let count = 0;
	// colors.forEach((color, index, arr) => {
	// 	console.log(color);
	// 	console.log(index);
	// 	console.log(arr);
	// 	count++;
	// });
	// colors.forEach((color) => {
	// 	console.log(color);
	// });
	// colors.forEach((_, __, arr) => {
	// 	console.log(arr);
	// });
	// console.log('count', count);

	// ===============================
	// MAP
	// ===============================
	// map turi returna kuris yra naujas masyvas
	// kai mes norim pakeisti kazka masyve - modifikuoti
	// const newArr = colors.map((color) => {
	// 	if (color === 'black') {
	// 		return 'faskghasl';
	// 	}
	// 	return color;
	// });
	// console.log(newArr);

	// ===============================
	// filter
	// ===============================
	// grazina nauja filtruota masyva
	// true grazina reiksme i nauja masyva - false istrina
	// const newArr = colors.filter((color) => color === 'red');
	// const newArr = colors.filter((color, index) => index > 2);
	// const newArr = colors.filter((_, index) => (index > 2 ? true : false));
	// console.log('newArr', newArr);

	// ===============================
	// sort
	// ===============================
	// neturi returno modifikuoja esama masyva
	// colors.sort((a, b) => b.length > a.length);
	// colors.sort((a, b) => {
	// 	if (b.length > a.length) {
	// 		return 1;
	// 	} else {
	// 		return -1;
	// 	}
	// });
	// colors.sort((a, b) => a.localeCompare(b));

	// ===============================
	// reduce
	// ===============================
	const occ = colors.reduce((acc, curr) => {
		if (curr === 'black') {
			acc++;
			// acc += '1';
		}
		return acc;
	}, 1);
	const numbers = [1, 2, 3, 4, 5];
	const sum = numbers.reduce((acc, curr) => {
		return (acc += curr);
	});
	console.log(sum);
};
