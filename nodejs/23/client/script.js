document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
    };
    const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const user = await response.json();
    if (user.token) {
        localStorage.setItem('token', user.token);
        location.replace('./users.html');
    }
});
