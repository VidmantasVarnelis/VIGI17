// Ternary operator
// const age = 180;
// console.log(
// 	age < 0 || age >= 120
// 		? 'Invalid age'
// 		: age >= 18
// 		? 'Pilnametis'
// 		: 'Nepilnametis'
// );
// for (let index = 0; index < 10; index++) {
// 	console.log(index + '.Vidmantas');
// }

// Failu pavadinimai .js
// lower-case
// calculate-age.js
// kintamuju pavadinimai ir funkcijos
// camelCase
// const calculateAge = 10
// const calculateAgeSecond = 10

//const a = 10;
//const age = 10;

// While loop, do while,
// for in ir for of - ES6 - kurie skirti array ir objektam
let count = 0;
while (count < 10) {
	console.log('CodeAcademy' + count);
	count++;
	// count = count + 1;
	// count += 1;
}
let count2 = 10;
while (count2 >= 0) {
	console.log(count2 % 2);
	if (count2 % 2 === 0) {
		console.log('lyginis skaicius ' + count2);
	} else {
		console.log('nelyginis skaicius ' + count2);
	}
	count2--;
}
let count3 = 0;
do {
	console.log('do-while ' + count3);
	count3++;
} while (count3 < 10);

// Nesvarbu ar kondicija whilo viduje teisinga esantis kodas do bloke visada viena karta ivyks
// let count3 = 15;
// do {
// 	console.log('do-while ' + count3);
// 	count3++;
// } while (count3 < 10);

// for of - skirtas masyvams
// const colors = ['black', 'white', 'blue', 'red'];

// for (let color of colors) {
// 	console.log(color);
// }
const colors = ['black', 'white', 'blue', 'red'];
// console.log(colors.includes('black'));
for (let color of colors) {
	// console.log(color);
	if (color === 'black') {
		console.log('spalva juoda');
	}
}
// for in - tai skirtas ciklas objektam

const me = {
	name: 'Vidmantas',
	lastName: 'Varnelis',
};
for (let value in me) {
	console.log('objekto property', value);
	console.log('objekto reiksme', me[value]);
}

//let name = ''
//let count = 0
// while ciklas - jo viduje turime prideti teksta prie sukurto kintamojo name
