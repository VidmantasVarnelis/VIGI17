const fetchCompanies = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/company', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        alert('Unexpected error!');
        localStorage.clear();
        location.replace('../login/login.html');
        console.log(err);
    }
};

const displayCompanies = (data) => {
    const container = document.querySelector('.company-container');
    let html = '';
    data.forEach((company) => {
        html += `
        <div class="company">
            <h1>${company.name}</h1>
            <img src="${company.img_url}" alt="" />
        </div>
        
        `;
    });
    container.innerHTML = html;
};
document.addEventListener('DOMContentLoaded', async () => {
    if (!localStorage.getItem('token')) location.replace('../login/login.html');
    const companies = await fetchCompanies();
    displayCompanies(companies);
});
