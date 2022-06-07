document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        name: event.target.querySelector('input[name=name]').value,
        size: event.target.querySelector('input[name=size]').value,
        img_url: event.target.querySelector('input[name=img_url]').value,
        address: event.target.querySelector('input[name=address]').value,
        field: event.target.querySelector('input[name=field]').value,
        year: event.target.querySelector('input[name=year]').value,
        description: event.target.querySelector('textarea[name=desc]').value,
    };
    try {
        const response = await fetch('http://localhost:8080/api/company', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const respData = await response.json();
        if (respData.status || respData.message) {
            alert('Duomenys neirasyti');
        } else {
            window.location.replace('./index.html');
        }
        console.log(respData);
    } catch (err) {
        alert('Duomenys neirasyti');
        console.log(err);
    }
});
