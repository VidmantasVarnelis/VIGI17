const getUser = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
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
    const { token, user } = await getUser(data);
    if (token) {
        localStorage.setItem(
            'userData',
            JSON.stringify({ token: token, user })
        );
        location.replace('../game/game.html');
    } else {
        alert('Login failed!');
    }
});
