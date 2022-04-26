console.log(5 + 5);
console.log('first' + 5);
console.log(typeof ('5' + 5 + true + undefined + null));
let x = 5;
console.log(x++);
console.log(x);
console.log(++x);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(10 % 2);

// CTRL + / - komentavimui shortcutas
// alert('X - verte: ' + x);
// const name = prompt('Irasykite varda');
// console.log(name + 20);

let y = 5;
console.log(5 == y);
console.log('tikrinam dviguba lygybe', 5 == '5');
console.log('tikrinam dviguba lygibe2', 'Vidmantas' == 'Vidmantas');
console.log('tikrinam dviguba lygibe3', true == 'Vidmantas');
console.log('tikrinam dviguba lygibe4', ['Vidmantas'] == 'Vidmantas');
console.log(5 === 25);
console.log('tikrinam triguba lygibes zenkla', 5 === '5');
console.log('tikrinam triguba lygibes zenkla2', 5 === 5);
console.log('tikrinam triguba lygibes zenkla3', 5 === true);
console.log('tikrinam triguba lygibes zenkla3', ['Vidmantas'] === 'Vidmantas');

// const value = +prompt('Jusu reiksme - skaicius');
// console.log(value === 'Vidmantas');
//************************************************** */
// NaN - not a number - gauname kai bandome paversti teksta i skaiciu
//************************************************** */
// console.log(+value);
// console.log(+value === 5);
// console.log(parseInt(value) === 5);

// console.log(value > 10);
// console.log(value < 7);
// console.log(value <= 7);
// console.log(value >= 17);
// console.log(17 > 17);

console.log(5 === 5 && 'Vidmantas' === 'Vidmantas'); // true
console.log(5 === 20 && 'Vidmantas' === 'Vidmantas'); // false
console.log(5 === 5 && 'Vidmantas' === 'Vidmantas' && 10 === 10); // true
console.log(5 === 5 || 'Petras' === 'Vidmantas');
console.log(5 === 15 || 'Petras' === 'Vidmantas' || 25 === 25);
console.log(5 === 15 || 'Petras' === 'Vidmantas' || 25 === 5);
console.log(2 === 2 && ('Vidmantas' === 'Vidmatas' || 5 === 5));
// ------------------------------------
// true ir false su situ operatoriumi && false
// true ir true su situ operatoriumi && true
// false ir false su situ operatoriumi && false
// ------------------------------------
// true ir true su situ operatoriumi || true
// false ir true su situ operatoriumi || true
// false ir false su situ operatoriumi || false
let value2 = 10;
if (5 === 5) {
	console.log('Tai istikruju yra tiesa');
} else {
	console.log('Tai nera tiesa');
}

if (value2 === 15) {
	console.log('Tai istikruju yra tiesa');
} else {
	console.log('Tai nera tiesa');
}
const promtValue = +prompt('Iveskite skaiciu');
// if (promtValue === 15) {
// 	console.log('Tai istikruju yra tiesa ir tai yra 15');
// } else {
// 	console.log('Tai nera tiesa');
// }
if (promtValue === 15) {
	console.log('Tai istikruju yra tiesa ir tai yra 15');
} else if (promtValue === 20) {
	console.log('Tai istikruju yra tiesa ir tai yra 20');
} else if (promtValue === 50) {
	console.log('Tai istikruju yra tiesa ir tai yra 50');
} else {
	console.log('Tai nera nei vienas is isvardintu skaiciu');
}

console.log(5 !== 15); // ar tai nera lygu
