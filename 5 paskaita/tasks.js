const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];
function getLetter(array, index) {
	if (index > array.length) {
		return 'nera tokio elemento';
	}
	return array[index - 1];
}
console.log(getLetter(alphabet, 5));
// =====================================================================

// =======================================================================
function calcNumber(n1, n2, operator) {
	// if (operator === 'sum') {
	// 	return n1 + n2;
	// } else if (operator === 'sub') {
	// 	return n1 - n2;
	// } else if (operator === 'div') {
	// 	return n1 / n2;
	// } else if (operator === 'multi') {
	// 	return n1 * n2;
	// } else {
	// 	return 'Tokio operatoriaus nera';
	// }
	switch (operator) {
		case 'sum':
			return n1 + n2;
		case 'sub':
			return n1 - n2;
		case 'div':
			return n1 / n2;
		case 'multi':
			return n1 * n2;
		default:
			return 'Tokio operatoriaus nera';
	}
}
console.log(calcNumber(2, 2, 'multi'));
// =====================================================================

// =======================================================================

function generateRandomNumber(n1) {
	return Math.floor(Math.random() * n1) + 1;
}
function squareNum(n1) {
	return n1 * n1;
}
const randomNumber = generateRandomNumber(10);
console.log(squareNum(generateRandomNumber(10)));
// console.log(squareNum(randomNumber));

//======================================================
// EVENTS
// =======================================================
document.getElementById('first').addEventListener('click', onClickFirstBtn);
function onClickFirstBtn() {
	const random = generateRandomNumber(3);
	if (random === 1) {
		alert('Yay');
	} else {
		alert('Nay - skaicius buvo ' + random);
	}
}
document.getElementById('second').addEventListener('click', onClickSecondBtn);
function onClickSecondBtn() {
	const random = generateRandomNumber(3);
	if (random === 2) {
		alert('Yay');
	} else {
		alert('Nay - skaicius buvo ' + random);
	}
}
document.getElementById('third').addEventListener('click', onClickThirdBtn);
function onClickThirdBtn() {
	const random = generateRandomNumber(3);
	if (random === 3) {
		alert('Yay');
	} else {
		alert('Nay - skaicius buvo ' + random);
	}
}
// 10 uzduotis document.addEventListener('scroll', jusuFuncPavadinimas)
//4 uzduotis

document.getElementById('increment').addEventListener('click', counter);

function counter() {
	document.querySelector('h1').textContent++;
	// document.querySelector('h1').textContent += 1;
}

// 9 uzduotis
// document.querySelector('div').addEventListener('click', onClick2);
const buttons = document.querySelector('div').querySelectorAll('button');

for (let button of buttons) {
	console.log(button);
	button.addEventListener('click', onClick2);
}
// for (let index = 0; index < buttons.length; index++) {
// 	console.log(index);
// 	console.log(buttons[index]);
// 	buttons[index].addEventListener('click', onClick2);
// }
function onClick2() {
	document.querySelector('div').querySelector('h1').textContent =
		'Neklausot manes';
}
