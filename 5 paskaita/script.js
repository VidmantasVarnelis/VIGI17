// const random = Math.floor(Math.random() * 8) + 5;

// if(...){
//     const random2 = Math.floor(Math.random() * 17) + 20;
// }

// const random3 = Math.floor(Math.random() * 2) + 3;

// syntax - function funkcijosPAv(parametrai) { ... kodo blokas - execution }
function generateName(name, age) {
	console.log(name, age);
	// return 5;
}
// Funkcijos iskvietimas
// generateName('Petras', 5);
generateName('Vidmantas', 10);
generateName('Lukas', 15);
generateName('Antanatas', 16);
generateName('Mantas', 21);
const name2 = generateName('Petras', 5);
console.log(name2);

function addTwoNumbers(number1, number2) {
	const num = number1 + number2;
	if (num === 7) {
		return num;
	} else {
		return 'Ne 7';
	}
	// return num;
}
// console.log(addTwoNumbers(5, 5));
const number = addTwoNumbers(5, 25);
console.log(number);
console.log(addTwoNumbers(15, 5));
console.log(addTwoNumbers(17, 5));
console.log(addTwoNumbers(2, 5));
document.body.textContent = addTwoNumbers(2, 5);
