const dog = {
	name: 'dog',
	age: 5,
	color: 'black',
	// Methods
	run() {
		console.log('run');
	},
};
const bird = {
	name: 'bird',
	age: 2,
	color: 'white',
	// Methods
	run() {
		console.log('run');
	},
};
const cat = {
	name: 'cat',
	age: 7,
	color: 'black',
	// Methods
	run() {
		console.log('run');
	},
};
// 1 budas ctrl + d
// 2 budas find ctrl + find
// ES6 - class
// klases pavadinimas - is didziosios raides - PascalCase
// class Animal {}
class Animal {
	constructor(name, age, color) {
		this.name = name;
		this.color = color;
		this.age = age;
		this.run();
	}
	run() {
		console.log('run');
	}
	calcAge() {
		const age = this.age * 100;
		this.newAge = age;
		return age;
	}
}
const dog2 = new Animal('dog', null, 'black');
const cat2 = new Animal('cat', 10, 'white');

console.log(dog2);
const age = cat2.calcAge();
console.log(cat2.newAge);
document.body.textContent = age;
// ================================================================
// ES5
// ================================================================
// constructor
function Car(make, year, color) {
	this.make = make;
	this.year = year;
	this.color = color;
	// this.run = function () {
	// 	console.log('masina vaziuoja');
	// };
	// this.run();
}
Car.prototype.run = function () {
	console.log('masina vaziuoja');
};
Car.prototype.stop = function () {
	console.log('masina stabdo');
};

const audi = new Car('Audi', 2019, 'black');
const bmw = new Car('BMW', 2012, 'white');
console.log('audi', audi);
console.log('bmw', bmw);
