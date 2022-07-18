// reduce
const numbers = [20, 26, 206, 12, 67, 174];
// reduce grazina reiksme priskirsim kintamaji jam saugot
// default reduce veikimas : kaupiamoji reiksme yra masyvo pirmas elementas
// const average =
// 	numbers.reduce((acc, curr) => {
// 		acc = acc + curr;
// 		console.log(acc, curr);
// 		return acc;
// 	}, 0) / numbers.length;

// const average = numbers.reduce(
// 	(acc, curr) => {
// 		// acc.sum = acc.sum + curr;
// 		acc.sum += curr;
// 		return acc;
// 	},
// 	{
// 		sum: 0,
// 	}
// );
// const average = numbers.reduce((acc, curr) => {
// 	// acc.sum = acc.sum + curr;
// 	// acc.sum += curr;
// 	if (!acc.sum) {
// 		acc.sum = 0;
// 	}
// 	acc.sum += curr;

// 	return acc;
// }, {});
// console.log('average : ', average);

// Math.max(20,20,206,12,67,174)
// console.log(...numbers);
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

const max = numbers.reduce((acc, curr) => {
	console.log('kaupiamoji reiksme', acc);
	if (acc < curr) {
		acc = curr;
	}
	return acc;
});

const bikes = [
	{
		name: 'Scott',
		year: 2019,
		color: 'red',
		isAvailable: true,
	},
	{
		name: 'Cube',
		year: 2009,
		color: 'black',
		isAvailable: true,
	},
	{
		name: 'Scott',
		year: 2000,
		color: 'black',
		isAvailable: false,
	},
	{
		name: 'Cube',
		year: 2021,
		color: 'blue',
		isAvailable: true,
	},
	{
		name: 'Scott',
		year: 2020,
		color: 'black',
		isAvailable: false,
	},
	{
		name: 'Cube',
		year: 2010,
		color: 'white',
		isAvailable: true,
	},
];

// { isAvailable: 5, notAvailable: 1}
// const num = bikes.reduce((acc, curr) => {
// 	return curr.isAvailable ? acc + 1 : acc;
// }, 0);
const num = bikes.reduce(
	(acc, curr) => {
		if (curr.isAvailable) acc.isAvailable++;
		else acc.notAvailable++;
		if (curr.color === 'black') acc.black++;
		return acc;
	},
	{
		isAvailable: 0,
		notAvailable: 0,
		black: 0,
	}
);
console.log('isAvailable', num);

//naujam for
let isAvailableBike = 0;
let notAvailableBike = 0;
bikes.forEach((bike) => {
	if (bike.isAvailable) {
		isAvailableBike++;
	} else {
		notAvailableBike++;
	}
});

// ==========================================================
// task1
// 'alus' -> 'sula');
function isPalindrome(str1, str2) {
	const reverse = str1.split('').reverse().join('');
	if (reverse === str2) {
		return 'Tai palindromas';
	} else return 'Tai ne palindromas';
}
console.log(isPalindrome('alus', 'sula'));
// ==========================================================
// Task2
// sort
const bike = bikes
	.sort((a, b) => b.year - a.year)
	.filter((bike) => bike.isAvailable);
// .find((bike) => bike.name === 'Cube');
console.log('bikes', bikes);
console.log('bike', bike);

function removeChar(str1, str2) {
	return str1
		.split('')
		.map((letter) => (str2.includes(letter) ? '' : letter))
		.join('');
}
// console.log(removeChar('Mano Tekstas', 's'));
console.log(removeChar('Vidmantas', ['s', 'a']));
for (let i = 0; i < 'Vidmantas'.length; i++) {
	console.log('first');
}

function fn(arr) {
	arr.sort;
}
let birthday = new Date('December 17, 1995 03:24:00');
console.log(birthday.getDate());
