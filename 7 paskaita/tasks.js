// 2uzduotis
// ES5
// document.getElementById('form').addEventListener('submit', function () {});
document.getElementById('form').addEventListener('submit', (event) => {
	event.preventDefault();
	// const textInputValue = +document.getElementById('year').value;

	const textInputValue =
		+event.target.querySelector('input[name="year"]').value;
	if (
		textInputValue % 4 === 0 ||
		(textInputValue % 100 === 0 && textInputValue % 400 === 0)
	) {
		document.querySelector('h1').textContent = 'Keliamieji metai';
	} else {
		document.querySelector('h1').textContent = 'Nekeliamieji metai';
	}
});
console.log(8 / 4);
console.log(8 % 4);
// -------------
console.log(8 / 8);
console.log(8 % 8);

// 4 uzduotis
document.getElementById('form2').addEventListener('submit', (event) => {
	event.preventDefault();
	const emailInputValue = document.getElementById('email').value;
	const checkboxValue = document.getElementById('checkbox').checked;
	console.log(emailInputValue);
	// if (emailInputValue === '') {
	// 	alert('Blogas Email');
	// }
	if (!emailInputValue) {
		alert('Blogas Email');
	} else if (checkboxValue) {
		alert('Sekmingai uzregistruota ' + emailInputValue);
	} else {
		alert('Registracija nesėkminga');
	}
});
// 5 uzduotis
document.getElementById('form3').addEventListener('submit', (event) => {
	event.preventDefault();
	const nameInputValue =
		event.target.querySelector('input[name="name"').value;
	let countInputValue =
		+event.target.querySelector('input[name="count"').value;
	const ulEl = document.querySelector('ul');
	let text = '';
	while (countInputValue) {
		// text += '<li>' + nameInputValue + '</li>';
		text = text + '<li>' + nameInputValue + '</li>';
		countInputValue--;
	}
	ulEl.innerHTML = text;
});

function fn(number) {
	let str = '';
	let stars = '';
	for (let i = 0; i < number; i++) {
		stars += '*';
		str += stars + '\n';
	}
	document.querySelector('h1').innerText = str;
	return str;
}
console.log(fn(10));
