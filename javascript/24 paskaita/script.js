const output = document.querySelector('.box');

async function onFetch() {
	try {
		const response = await fetch(
			'https://my-test-app2052.herokuapp.com/api/me',
			{
				method: 'GET',
				headers: {
					token: localStorage.getItem('token'),
				},
			}
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
function displayUser(user) {
	const name = document.createElement('span');
	const lastname = document.createElement('span');
	const email = document.createElement('p');
	const username = document.createElement('p');
	name.textContent = `Name - ${user.name}`;
	lastname.textContent = ` Lastname - ${user.lastname}`;
	email.textContent = `Email - ${user.email}`;
	username.textContent = `Username - ${user.username}`;
	output.append(username, email, name, lastname);
	console.log(user);
}
const main = async () => {
	const user = await onFetch();
	displayUser(user[0]);
};
main();
// fetch('https://radial-reinvented-shoe.glitch.me', {
// 	method: 'POST',
// 	body: JSON.stringify({
// 		image: 'https://radial-reinvented-shoe.glitch.me',
// 		city: 'Vilnius',
// 		price: 500,
// 		description: 'tekstas',
// 	}),
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// })
// 	.then((data) => data.json())
// 	.then((data) => console.log(data));
const buttonContainer = document.querySelector('.button_container');
document.addEventListener('click', (event) => {
	if (event.target.matches('button')) {
		console.log('paspaudziau buttona');
		if (event.target.textContent === 'Pirmas') {
			console.log('pirmas buttonas');
		}
	}
});
