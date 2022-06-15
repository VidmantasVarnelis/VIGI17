if (localStorage.getItem('token')) {
    location.replace('../company/company.html');
}

const onLogin = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
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
    const { token } = await onLogin(input);
    if (token) {
        localStorage.setItem('token', token);
        location.replace('../company/company.html');
    } else {
        alert('Not logged in!');
    }
});
