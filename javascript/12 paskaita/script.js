// Boolean
const name = 'CodeAcademy';
const boolean = true;
console.log(boolean.toString());
// Number
const number = 15;
// console.log(number.toString());
// console.log(number.toString(2));
// console.log(number.toFixed());
// console.log(number.toFixed(5));
// console.log(number.valueOf());
// console.log(number.toPrecision(3));
// console.log(number.toExponential(1));
// String
let string = 'CodeAcademy';
// console.log(string.charAt(string.length - 1));
// console.log(string.charAt(2));
// console.log(string[2]);
// console.log(string.concat(' Lietuva', ' Vilnius', 'asfasgas'));
// console.log(string + ' Lietuva' + ' Vilnius' + 5);
// console.log(string.endsWith('Academy'));
// if (string.endsWith('Academy')) {
// 	alert('Baigiasi su Academy');
// }
// console.log(string.startsWith('C'));
// let email = 'vidmantas@gmail.com';
// console.log(string.includes('demy'));
// console.log(email.includes('@'));
// if (!email.includes('@') || !email.includes('.com')) {
// 	alert('Blogas email');
// }
// console.log(string.indexOf('A'));
// console.log(string.indexOf('X'));
// if (string.indexOf('cademy', 5) > -1) {
// 	console.log('egzistuoja');
// }
// console.log(string.charAt(string.indexOf('A')));

// console.log(string.length);
// console.log(string.repeat(4));
// console.log(string.replace('Code', 'Test'));
// console.log(string.replace(' ', '-'));
// console.log(string.replaceAll(' ', '-'));
// console.log(string.search('Academy'));
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// console.log(string.charAt(7).toUpperCase());

// let string2 = '        Code    Academy    ';
// console.log(string2.trimEnd());
// console.log(string2.trimStart());
// console.log(string2.trim());

//
// slice
// console.log(string.slice(0, 4));
// console.log(string.slice(4));
// console.log(string.slice(-1));
// console.log(string.slice(0, -2));
// console.log(string.slice(6, 4)); // pirmas indeksas turi buti anksciau uz antra
// console.log(string.slice(4, 6));

// console.log(string.substring(6, 4)); // veikia panasiai kaip slice.

// split
// console.log(string.split(''));
// console.log(string.split('a'));
const string3 = 'Code Academy Vilnius';
// console.log(string3.split(' '));
// console.log(string3.split(' ').join('/'));
// console.log(string3.replaceAll(' ', '/'));

const string4 = 'aNTANAS';
const correctName =
	string4.charAt(0).toUpperCase() + string4.slice(1).toLowerCase();

const string5 = 'Vidmantas Varnelis fasfas';
const name6 = document.createElement('h1');
name6.textContent = string5.split(' ')[0];
console.log(name6.textContent);
console.log(string5.replace(name6.textContent, '').slice(1));
