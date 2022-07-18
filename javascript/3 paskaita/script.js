// console.log('25' * '5');
// console.log('Petras' && 0);

// let truthy = true;
// truthy && console.log('loginis operatorius');
// if ('Petras' && 10) {
// 	console.log('first');
// } else {
// 	console.log('hkljglhjkashklg');
// }

// const myValue = truthy && 'Vidmantas';
// console.log(myValue);

const age = 23;
if (age > 100 || age < 0) {
	console.log('invalid age');
} else if (age >= 1 && age <= 18) {
	console.log('child');
} else if (age >= 19 && age <= 99) {
	console.log('adult');
}
// const car = 'BMW';

// if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
// 	console.log('Tai yra BMW grupe');
// } else {
// 	console.log('Tai yra VW grupe');
// }

// Switch
const myName = 'Las';
// switch (myName) {
// 	case 'Petras':
// 		console.log('Petras');
// 		break;
// 	case 'Vidmantas':
// 		console.log('tai mano vardas - Vidmantas');
// 		break;
// }
// switch (myName) {
// 	case 'Povilas':
// 	case 'Lukas':
// 	case 'Petras':
// 		console.log('Petras');
// 		break;
// 	case 'Vidmantas':
// 		console.log('tai mano vardas - Vidmantas');
// 		break;
// }
switch (myName) {
	case 'Povilas':
	case 'Lukas':
	case 'Petras':
		console.log('Lukas');
		break;
	case 'Vidmantas':
		console.log('tai mano vardas - Vidmantas');
		break;
	default:
		console.log('Tai neatitinka nei vieno case');
}
// if ('Vidmntas' === 'Petras') {
// 	console.log('Petras');
// } else if ('Vidmntas' === 'Vidmntas') {
// 	console.log('tai mano vardas - Vidmantas');
// }
const age2 = 18;
switch (age2) {
	case 18:
	case 17:
	case 16:
	case 15:
		console.log('Tai yra amzius tarp 15 - 18');
		break;
}

if (age2 >= 15 || age2 <= 18) {
	console.log('Tai yra amzius tarp 15 - 18');
}

// ================================================================================
//  Ternary operator
// ==================================================

const myAge3 = 30;
const condition =
	myAge3 >= 15 && myAge3 <= 18
		? console.log('teigiamas reiskinys')
		: console.log('neigiamnas reiskinys');

console.log(myAge3 ? '30' : '20');
if (myAge3) {
	console.log('30');
} else {
	console.log('20');
}
//==================================================
// Ciklas
// ================================================

// for(kintamasis; kondicija; kintamasis kuri mes didiname)

// for (let index = 0; index < 10; index++) {
// 	console.log('Vidmantas', index);
// }
// for (let index = 10; index >= 10; index--) {
// 	console.log('Vidmantas', index);
// }
// for (let index = 10; index >= 10; index--) {
// 	console.log('Vidmantas', index);
// }
for (let index = 0; index < 10; index++) {
	const variable = 'tasfv';
	console.log('Vidmantas', index);
	if (index === 5) {
		console.log('tai yra penkta ciklo iteracija');
	}
}
console.log('first');
console.log('Vidmantas'.length);
