// Objektas susidaro is property ir metodu(funkcija)
console.log(window);
console.log(window.origin);
// console.log(window.alert('test'));
console.log(document);
// console.table([{ name: 'Vidmantas' }]);

//
// const carName = 'BMW';
// const carYear = 2004;
const car = {
	name: 'Audi',
	year: 2004,
	color: 'black',
	// ES5
	// run: function () {
	// 	console.log('Vaziuoja');
	// },
	//ES6 metodai
	run() {
		console.log('Vaziuoja');
	},
	stop() {
		console.log('stop');
	},
};
const person = {
	name: 'Vidmantas',
	age: 35,
	walk() {
		console.log('eina');
	},
	run() {
		console.log('run');
	},
};
console.log(car.color);
console.log(person.age);
// Methods
car.run();
person.walk();
// ====================================
// console.log(document.forms);
console.log(document.location);

console.log(document.location.search);

document.querySelector('button').addEventListener('click', () => {
	document.location.replace('/9 paskaita/index.html');
});
// document.location.reload();

// ==========================================
const user = {
	username: 'Vidmantas',
	password: 'codeacademy',
	oldUser: {
		name: ['Petras', 'Vidmantas'],
		password: 'codeAcademy',
	},
};
user.username = 'Tadas';
// console.log(user);
// console.log(user.username);
user['username'] = 'Lukas';
console.log(user['username']);

console.log(user.oldUser.name);
