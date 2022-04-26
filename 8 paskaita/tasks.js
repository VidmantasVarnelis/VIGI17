document.getElementById('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const inputValue = event.target.querySelector('input').value;
	const text = fn(inputValue);
	document.querySelector('div').innerText = text;
});

function fn(number) {
	let str = '';
	let letters = '';
	for (let i = 0; i < number; i++) {
		// str = str + 'L';
		letters += 'L ';
		if (i === number - 1) {
			str += letters;
			break;
		}
		str += 'L' + '\n';
	}
	return str;
}
const text = fn(5);
console.log(text);
