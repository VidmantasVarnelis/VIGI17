const loader = document.querySelector('.loader-container');
document.querySelector('form').addEventListener('submit', async (event) => {
	event.preventDefault();
	const data = {
		username: document.getElementById('username').value,
		password: document.getElementById('password').value,
	};
	loader.classList.add('active');
	const response = await fetch(
		'https://my-test-app2052.herokuapp.com/api/login',
		{
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		}
	);
	const userData = await response.json();
	loader.classList.remove('active');
	if (!userData.error) {
		localStorage.clear();
		localStorage.setItem('token', userData.token);
		location.replace('./index.html');
		console.log(userData);
	}
});
