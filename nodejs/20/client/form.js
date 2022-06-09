const fetchIngredients = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/ingredients');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};
const displayIngredients = (data) => {
    const form = document.getElementById('checkbox');
    const divEl = document.createElement('div');
    data.forEach((item) => {
        const labelEl = document.createElement('label');
        const checkboxEl = document.createElement('input');
        labelEl.setAttribute('for', item.id);
        labelEl.textContent = item.name;
        checkboxEl.setAttribute('type', 'checkbox');
        checkboxEl.setAttribute('name', item.name);
        checkboxEl.setAttribute('id', item.id);
        divEl.append(checkboxEl, labelEl);
        form.append(divEl);
    });
};
document.addEventListener('DOMContentLoaded', async () => {
    const ingredients = await fetchIngredients();
    displayIngredients(ingredients);
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const checkboxArray = e.target.querySelectorAll(
            'input[type="checkbox"]'
        );
        const checkboxValues = [...checkboxArray]
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => Number(checkbox.id));
        const data = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            url: e.target.elements.url.value,
            cook: Number(e.target.elements.cook.value),
            prep: Number(e.target.elements.prep.value),
            prep: Number(e.target.elements.prep.value),
            ingredients: checkboxValues,
        };
        try {
            const response = await fetch('http://localhost:8080/api/recipes', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await response.json();
            if (res.details) {
                return alert('Blogi duomenys');
            } else {
                location.replace('./index.html');
            }
        } catch (err) {
            alert('Neirasyta');
        }
    });
});
