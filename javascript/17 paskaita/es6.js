// Abstrakcija
class Person2 {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	calcAge() {
		const age = this.age / 2;
		return age;
	}
}
const person2 = new Person2('Vidmantas', 'Varnelis', 55);
console.log(person2.calcAge());

//======================================
// Encapsulation
//======================================
class Person2Encapsulation {
	hairColor;
	#age;
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.#age = age;
		this.hairColor = 'black';
	}
	#calcAge() {
		return this.#age / 2;
	}
	test() {
		return this.#calcAge();
	}
	// Getter
	getAge() {
		return this.#age;
	}
}
const person2Encaps = new Person2Encapsulation('Vidmantas', 'Varnelis', 55);
console.log(person2Encaps['#age']);
console.log(person2Encaps.getAge());
//======================================
// Paveldejimas
//======================================

class House6 {
	constructor(houseName, address, rooms) {
		this.houseName = houseName;
		this.address = address;
		this.rooms = rooms;
	}
	getRooms() {
		return this.rooms;
	}
	getHouseName() {
		return this.houseName;
	}
}
class Person6 extends House6 {
	constructor(name, surname, age, houseName, address, rooms) {
		super('Pagrindinis', 'test', 5);
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
}

const mainHouse2 = new House6('Pagrindinis', 'Seimyniskiu g.', 5);
const person6 = new Person6(
	'Vidmantas',
	'Varnelis',
	33,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
const perso = new Person6(
	'Vidmantas',
	'Varnelis',
	33,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
console.log('person6', perso.getHouseName());

//======================================
// Polymorfizmas
//======================================
class House7 {
	constructor(houseName, address, rooms) {
		this.houseName = houseName;
		this.address = address;
		this.rooms = rooms;
	}
	getRooms() {
		return this.rooms;
	}
	getHouseName() {
		return this.houseName;
	}
}
class Person7 extends House7 {
	constructor(name, surname, age, houseName, address, rooms) {
		super(houseName, address, rooms);
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	getHouseName() {
		return this.age / 2;
	}
}
class PersonNew extends House7 {
	constructor(name, surname, age, houseName, address, rooms) {
		super(houseName, address, rooms);
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
}
const person7 = new Person7(
	'Vidmantas',
	'Varnelis',
	33,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
const personNew = new PersonNew(
	'Vidmantas',
	'Varnelis',
	33,
	mainHouse.houseName,
	mainHouse.address,
	mainHouse.rooms
);
console.log('person7', person7.getHouseName());
console.log('personNew', personNew.getHouseName());
