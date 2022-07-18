const output = document.getElementById('output');
const updateContainer = document.querySelector('.update-container');

const fetchUsers = async () => {
	try {
		const response = await fetch(
			'https://my-test-app2052.herokuapp.com/api/profiles'
		);
		// const data = await response.json()
		return await response.json();
	} catch (err) {
		console.log(err);
	}
};
const deleteUser = async (id) => {
	try {
		const response = await fetch(
			`https://my-test-app2052.herokuapp.com/api/user/${id}`,
			{
				method: 'DELETE',
			}
		);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
};
const displayUsers = (users) => {
	users.forEach((user) => {
		const div = document.createElement('div');
		const username = document.createElement('h1');
		const email = document.createElement('p');
		const name = document.createElement('h2');
		const id = document.createElement('p');
		const deleteBtn = document.createElement('button');
		const updateBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete user';
		updateBtn.textContent = 'Update user';
		username.textContent = user.username;
		email.textContent = user.email;
		name.textContent = user.name + ' ' + user.lastname;
		id.textContent = 'ID:' + user._id;
		div.append(username, email, name, id, deleteBtn, updateBtn);
		output.append(div);

		// Delete user
		deleteBtn.addEventListener('click', async () => {
			const data = await deleteUser(user._id);
			if (data.deletedCount > 0) {
				div.remove();
				alert('Useris istrintas vardu: ' + user.name);
			} else {
				alert('Useris neistrintas. Klaida');
			}
		});
		//Update User
		updateBtn.addEventListener('click', () => {
			updateContainer.classList.add('active');
			updateContainer
				.querySelector('form')
				.addEventListener('submit', async (event) => {
					event.preventDefault();
					const data = {
						username: event.target.querySelector(
							'input[name="username"]'
						).value,
						password: event.target.querySelector(
							'input[name="password"]'
						).value,
						email: event.target.querySelector('input[name="email"]')
							.value,
					};
					const response = await fetch(
						`https://my-test-app2052.herokuapp.com/api/user/${user._id}`,
						{
							method: 'PATCH',
							body: JSON.stringify(data),
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					const updatedData = await response.json();
					username.textContent = data.username;
					email.textContent = data.email;
					updateContainer.classList.remove('active');
				});
		});
	});
};

document.addEventListener('DOMContentLoaded', async () => {
	const users = await fetchUsers();
	displayUsers(users);
	console.log(users);
});
