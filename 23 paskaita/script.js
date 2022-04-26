const loader = document.querySelector('.loader-container');
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {
		username: document.getElementById('username').value,
		password: document.getElementById('password').value,
		email: document.getElementById('email').value,
		name: document.getElementById('name').value,
		lastname: document.getElementById('lastname').value,
	};
	loader.classList.add('active');
	fetch('https://my-test-app2052.herokuapp.com/api/register', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			loader.classList.remove('active');
			if (data.status) {
				alert('Duomenys yra klaidingi. Vartotojas neuzregistruotas');
			} else {
				alert(
					`vartotojas uzregistruotas su vardu - ${data.name} username - ${data.username}`
				);
				location.replace('./users.html');
			}
		})
		.catch(() => {
			if (data.status) {
				alert('Vartotojas neuzregistruotas');
			}
		});
});
fetch('https://olive-bead-glazer.glitch.me', {
	method: 'POST',
	body: JSON.stringify({ brand: 'asf', model: 'asga' }),
	// headers: {
	// 	'Content-Type': 'application/json',
	// },
})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		const divEl = document.createElement('div');
		// if (data.error) {
		// 	divEl.textContent = data.error;
		// } else {
		// 	divEl.textContent = data.msg;
		// }
		// divEl.textContent = data.error ? data.error : data.msg;
		divEl.textContent = data.error || data.msg;
		document.body.append(divEl);
	})
	.catch((err) => console.log(err));
// es6 async/await
const onPost = async () => {
	// try catch block
	try {
		const response = await fetch('https://olive-bead-glazer.glitch.me', {
			method: 'POST',
			body: JSON.stringify({ brand: 'asf', model: 'asga' }),
			// headers: {
			// 	'Content-Type': 'application/json',
			// },
		});
		const data = await response.json();
		const divEl = document.createElement('div');
		divEl.textContent = data.error || data.msg;
		document.body.append(divEl);
		console.log('Mano data: ', data);
	} catch (err) {
		console.log(err);
	}
};
onPost();
