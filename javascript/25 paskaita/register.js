document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const data = {
		username: document.getElementById('username').value,
		password: document.getElementById('password').value,
		email: document.getElementById('email').value,
		name: document.getElementById('name').value,
		lastname: document.getElementById('lastname').value,
	};
	fetch('https://my-test-app2052.herokuapp.com/api/register', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.status) {
				alert('Duomenys yra klaidingi. Vartotojas neuzregistruotas');
			} else {
				alert(
					`vartotojas uzregistruotas su vardu - ${data.name} username - ${data.username}`
				);
				location.replace('./index.html');
			}
		})
		.catch(() => {
			alert('Vartotojas neuzregistruotas');
		});
});
