const onRegister = async (data) => {
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
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        alert('err');
        console.log(err);
    }
};

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
    };
    const userData = await onRegister(input);
    if (userData.insertId) {
        location.replace('../login/login.html');
    } else {
        alert('Not Registered!');
    }
});
