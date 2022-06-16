const createUser = async (data) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const user = await response.json();
        return user;
    } catch (err) {
        console.log(err);
    }
};

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
    };
    if (!data.username || !data.password) return;
    const user = await createUser(data);
    if (user.insertId) {
        location.replace('../login/login.html');
    } else {
        alert('User is not created!');
    }
});
