// Abstrakcija
function Person(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	// this.calcAge2 = function () {
	// 	const age = this.age / 2;
	// 	return age;
	// };
}
Person.prototype.calcAge = function () {
	const age = this.age / 2;
	return age;
};
const person = new Person('Vidmantas', 'Varnelis', 55);

//======================================
// Encapsulation
//======================================

// function PersonEncaps(name, surname, age) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// }

// const personEncaps = new PersonEncaps('Vidmantas', 'Varnelis', 55);
// personEncaps.age = 15;
// console.log(personEncaps);

//======================================
// Paveldejimas
//======================================

function House(houseName, address, rooms) {
	this.houseName = houseName;
	this.address = address;
	this.rooms = rooms;
}

function Person3(name, surname, age, houseName, address, rooms) {
	House.call(this, houseName, address, rooms);
	this.name = name;
	this.surname = surname;
	this.age = age;
	// this.test = function () {
	// 	return this.houseName;
	// };
}
Person3.prototype = Object.create(House.prototype);
Person3.prototype.constructor = Person3;

const mainHouse = new House('Pagrindinis', 'Seimyniskiu g.', 5);
const vidmantas = new Person3(
	'Vidmantas',
	'Varnelis',
	55,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
console.log(mainHouse);
console.log(vidmantas);

//======================================
// Polymorfizmas
//======================================

function House3(houseName, address, rooms) {
	this.houseName = houseName;
	this.address = address;
	this.rooms = rooms;
}
House3.prototype.getHouseName = function () {
	return this.houseName;
};
function Person3(name, surname, age, houseName, address, rooms) {
	House3.call(this, houseName, address, rooms);
	this.name = name;
	this.surname = surname;
	this.age = age;
}
Person3.prototype = Object.create(House3.prototype);
Person3.prototype.constructor = Person3;
Person3.prototype.getHouseName = function () {
	return 150;
};
function Person4(name, surname, age, houseName, address, rooms) {
	House3.call(this, houseName, address, rooms);
	this.name = name;
	this.surname = surname;
	this.age = age;
}
Person4.prototype = Object.create(House3.prototype);
Person4.prototype.constructor = Person4;

const mainHouse3 = new House3('Pagrindinis', 'Seimyniskiu g.', 5);
const vidmantas3 = new Person3(
	'Vidmantas',
	'Varnelis',
	55,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
const vidmantas4 = new Person4(
	'Vidmantas',
	'Varnelis',
	55,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
console.log('vidmantas3', vidmantas3.getHouseName());
console.log('vidmantas4', vidmantas4.getHouseName());

const set = new Set([1, 2, 2, 3]);
console.log(set);
// spread operator
console.log(...set);
console.log([...set, 'Vidmantas', ...set]);
