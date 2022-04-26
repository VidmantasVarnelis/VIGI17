const array = ['As', 'esu', 'Vidmantas', 'Testuoju'];
// console.log(array.concat('Testas'));
// console.log(array.indexOf('Vidmantas'));
// console.log(array.slice(1));

// foreach
// foreach neturi returno - nepriskirsim kintamajam
// syntax
// array.forEach(() => {});
// foreach veikia panasiai kaip ciklas, kiek masyvo elementu yra tiek callbackas kartu ivyks
// array.forEach((value) => {
// 	console.log('log:', value);
// });
// array.forEach((value, index) => {
// 	console.log('log:', value, index);
// });
// array.forEach((value, index, arr) => {
// 	console.log('log:', value, index, arr);
// });
//========================
// array.forEach((index) => {
// 	console.log('log:', index);
// });
//========================
// array.forEach((_, index) => {
// 	console.log('log:', index);
// });

// Kiek ivyko callbackas
// let count = 0;
// array.forEach((v, _, arr) => {
// 	console.log(v + ' - callbackas ivyko kartu ' + count);
// 	count++;
// 	// console.log(arr.toString());
// 	// console.log(JSON.stringify(arr));
// 	console.table(arr);
// });
// ===================================================
// map metodas
// map metodas turi returna ir grazima mums masyva
// syntax
// array.map(() => {});
// be return
// array.map((value, index, arr) => {
// 	console.log(value, index, arr);
// });
// ============================

// const modifiedArray = array.map((value, index, arr) => {
// 	if (index === 2) {
// 		return value + '*';
// 	}
// });
// const modifiedArray = array.map((value, index, arr) => {
// 	if (index === 2) {
// 		return value + '******';
// 	} else return value;
// });
// const modifiedArray = array.map((value, index, arr) => {
// 	return value;
// });
// console.log(modifiedArray);
// ===================================================

//=================================================
// filter metodas
// sitas masyvo metodas turi returna grazina nauja filtruota masyva
//=================================================
// const filteredArray2 = array.filter((value, index) => {
// 	// console.log(value);
// 	return value !== 'Vidmantas';
// });
// console.log(filteredArray2);

// const filteredArray = array.filter((value, index) => {
// 	console.log(value, value.length);
// 	return value.length > 3;
// });

const filteredArray = array.filter((value, index) => {
	// if (value === 'Vidmantas') return true;
	// else {
	// 	return false;
	// }
	return value === 'Vidmantas';
});

console.log(filteredArray);

// function fn() {
// 	console.log('Testuoju');
// 	return;
// }

// const fn = () => {
// 	console.log('Testuoju');
// 	return;
// };
// const fn = () => console.log('Testuoju');
const fn = () => (true ? console.log('Testuoju') : console.log('first'));
// const fn = () => {
// 	if(){
// 		return;
// 	}
// });
const fn2 = () => 5;
// function fn2() {
// 	return 5;
// }
console.log(fn2());
