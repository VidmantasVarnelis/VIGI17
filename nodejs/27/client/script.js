const getWeather = async (city) => {
    try {
        const response = await fetch(
            `http://localhost:8080/api/weather?city=${city}`
        );
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const output = document.getElementById('output');
const displayWeather = (weatherArray) => {
    weatherArray.forEach(({ city, temp, feels_like, created_at }) => {
        const div = document.createElement('div');
        const heading = document.createElement('h1');
        const tempEl = document.createElement('h1');
        const feelsLike = document.createElement('h1');
        const created = document.createElement('h1');
        heading.textContent = `City - ${city}`;
        tempEl.textContent = `Temp - ${temp}`;
        feelsLike.textContent = `Feels-like - ${feels_like}`;
        created.textContent = `Created-At - ${new Date(
            created_at
        ).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}`;
        // new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
        div.append(heading, tempEl, feelsLike, created);
        output.append(div);
    });
};

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const weather = await getWeather(city);
    output.textContent = '';
    displayWeather(weather);
    console.log(weather);
    console.log('first');
});
