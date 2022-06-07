const fetchCompanies = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/company');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
{
    /* <div class="company">
<div class="company-item">
    <img src="https://picsum.photos/800" alt="No image" />
    <h1>Compaany</h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ut mollitia
    </p>
</div>
<div class="company-item">
    <img src="https://picsum.photos/800" alt="No image" />
    <h1>Compaany</h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ut mollitia
    </p>
</div> */
}
const displayData = (data) => {
    const companyEl = document.querySelector('.company');
    let html = '';
    data.forEach((item) => {
        html += `
        <div class="company-item">
        <img src=${item.img_url} alt="No image" />
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        </div>
    `;
    });
    companyEl.innerHTML = html;
};

const main = async () => {
    const data = await fetchCompanies();
    displayData(data);
};
main();
