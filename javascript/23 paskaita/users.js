const outputEl = document.getElementById('output');
const loader = document.querySelector('.loader-container');
function displayData(array) {
	array.forEach((user) => {
		const divEl = document.createElement('div');
		const username = document.createElement('h1');
		const email = document.createElement('p');
		const name = document.createElement('p');
		const lastname = document.createElement('p');
		username.textContent = user.username;
		email.textContent = user.email;
		name.textContent = user.name;
		lastname.textContent = user.lastname;
		divEl.append(username, email, name, lastname);
		outputEl.append(divEl);
	});
}

async function main() {
	loader.classList.add('active');
	const response = await fetch(
		'https://my-test-app2052.herokuapp.com/api/profiles'
	);
	const data = await response.json();
	loader.classList.remove('active');
	if (data.length > 0) displayData(data);
	else outputEl.textContent = 'No user found';
}
document.querySelector('button').addEventListener('click', () => {
	location.replace('./index.html');
});
main();
