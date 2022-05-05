const { v4: uuidv4 } = require('uuid');
var casual = require('casual');

// absoliutus ir relatyvus keliai
// absoliutus kelias ex: cd /c/Users/VidmaWillDoIt/Documents/codeacademy/VIGI17/nodejs

// paleisti js faila per node turime paleisti terminale komanda node <failopav>
// console.log(window);

// console.log(global);

// setTimeout(() => {
// 	console.log('Vidmantas');
// 	console.log('Vidmantas');
// }, 2000);

function add(a, b) {
	return a + b;
}

console.log(add(5, 5));
console.log(uuidv4());
// console.log(casual.name_prefix + casual.first_name + casual.last_name);
const getFullName = (name, lastname) => {
	return `${casual.name_prefix} ${name} ${lastname}`;
};
console.log(getFullName(casual.first_name, casual.last_name));
console.log(`${casual.name_prefix} ${casual.first_name} ${casual.last_name}`);
