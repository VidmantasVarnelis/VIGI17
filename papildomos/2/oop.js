export const oopES5 = () => {
	// es5
	function Person(name, lastName, age) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		// 1budas
		this.calcAge = function () {
			return this.age / 2;
		};
	}
	// 2budas - geresnis
	Person.prototype.calcAge2 = function () {
		return this.age / 2;
	};
	const vidmantas = new Person('Vidmantas', 'Varnelis', 30);
	const petras = new Person('Petras', 'Pavardenis', 20);
	console.log(vidmantas.calcAge());
	console.log(vidmantas.calcAge2());
	console.log(vidmantas);
	console.log(petras);
};

export const oopES6 = () => {
	//es6
	class Person {
		constructor(name, lastName, age) {
			this.name = name;
			this.lastName = lastName;
			this.age = age;
		}
		calcAge(newAge) {
			console.log(newAge);
			return this.age / 2;
		}
	}
	const vidmantas = new Person('Vidmantas', 'Varnelis', 30);
	const petras = new Person('Petras', 'Pavardenis', 20);
	console.log(vidmantas.calcAge(500));
};
