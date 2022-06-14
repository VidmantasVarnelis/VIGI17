if (!localStorage.getItem('token')) {
    location.replace('./index.html');
}
const main = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (response.status === 401) {
            location.replace('./index.html');
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
main();
