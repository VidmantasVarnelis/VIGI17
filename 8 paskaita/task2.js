// for ir while ciklus kuri naudot? Nera skirtumo
// rekomenduoju pasirinkti viena ir ji gerai ismokti

// if else ar switch
//1.jeigu if else yra ilgas 3-4 if else sakiniu pagalvokit apie switcha
//kai turime stringa,number etc.

// if else - naudosim dazniausiai su bool(truthy - falsy) reiksmem
const name = 'Vidmantas';
if (name === 'Petras') {
	console.log('vardas petras');
} else if (name === 'Vidmantas') {
	console.log('vardas Vidmantas');
} else if (name === 'Arunas') {
	console.log('vardas Arunas');
}
// ---------------------------------------------------
// for (let i = 0; i < 2; i++) {
// 	console.log('i', i);
// 	for (let j = 0; j < 2; j++) {
// 		console.log('j', j);
// 	}
// }
// pirmasis ciklo kintamasis i arba index, antrojo ciklo kintamasis j pavadinimu

// 2.
function fn(number) {
	let horizontalLetters = '';
	let verticalLetters = '';
	for (let i = 0; i < number; i++) {
		horizontalLetters += '| ';
		if (i !== 0 && i !== number - 1) verticalLetters += '|' + '\n';
		// horizontalLetters = horizontalLetters + '|';
	}
	// let count = number;
	// while (count) {
	// 	horizontalLetters += '| ';
	// 	if (count !== 1 && count !== number) verticalLetters += '|' + '\n';
	// 	count--;
	// }
	// console.log('horizontalLetters', horizontalLetters);
	// console.log('verticalLetters', verticalLetters);
	const combinedLetters =
		horizontalLetters + '\n' + verticalLetters + horizontalLetters;
	return combinedLetters;
}
console.log(fn(5));

document.getElementById('form2').addEventListener('submit', (event) => {
	event.preventDefault();
	const firstNumber = +document.getElementById('number2').value;
	const secondNumber = +document.getElementById('number3').value;
	const firstNumberSub = Math.abs(firstNumber - 100);
	const scondNumberSub = Math.abs(secondNumber - 100);
	if (firstNumber === secondNumber) {
		alert('Skaiciai lygus');
	} else if (firstNumberSub < scondNumberSub) {
		alert(firstNumber);
	} else {
		alert(secondNumber);
	}
});
