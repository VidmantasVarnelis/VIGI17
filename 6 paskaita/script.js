// document.querySelector('form').addEventListener('submit', onSubmit);
// function onSubmit(event) {
// 	event.preventDefault();
// 	console.log(event);
// 	const usernameInput = event.target.querySelector('input[name="username"]');
// 	const passwordInput = event.target.querySelector('input[name="password"]');
// 	// const passwordInput = event.target.querySelector("input[name='password']");
// 	console.log(usernameInput.value, passwordInput.value);
// }

// document.querySelector('button').addEventListener('click', onClick);
// function onClick(event) {
// 	console.log(event.target);
// }
document.querySelector('form').addEventListener('submit', onSubmit);
function onSubmit(event) {
	event.preventDefault();
	const headingEl = document.querySelector('h1');
	const numberValue = Number(
		event.target.querySelector('input[name="number"]').value
	);
	const number2Value = +event.target.querySelector('input[name="number2"]')
		.value;
	const radioButtons = event.target.querySelectorAll('input[name="radio"]');
	let radioId;
	// const radio1 = event.target.querySelector('#sum');
	// if (radio1.checked) {
	// 	console.log('taip paspaustas');
	// }
	for (radioEl of radioButtons) {
		if (radioEl.checked) {
			radioId = radioEl.id;
		}
	}
	switch (radioId) {
		case 'sum':
			headingEl.textContent =
				'Jusu atsakymas: ' + (numberValue + number2Value);
			break;
		case 'sub':
			headingEl.textContent =
				'Jusu atsakymas: ' + (numberValue - number2Value);
			break;
		case 'div':
			headingEl.textContent =
				'Jusu atsakymas: ' + numberValue / number2Value;
			break;
		case 'multi':
			headingEl.textContent =
				'Jusu atsakymas: ' + numberValue * number2Value;
			break;
		default:
			headingEl.textContent = 'Nepasirinkote arba blogas radio button!';
	}
}
