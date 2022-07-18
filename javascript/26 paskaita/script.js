const map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM(),
		}),
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([25.279652, 54.687157]),
		zoom: 11,
	}),
});

const fetchWeather = async (city) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87dff5349bcdb39cdaabd549071c788d`
		);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
};

document.querySelector('input').addEventListener('change', async (event) => {
	const tempEl = document.getElementById('temp');
	const feelsLikeEl = document.getElementById('feels_like');
	const windSpeedEl = document.getElementById('wind_speed');
	const descEl = document.getElementById('description');
	const weather = await fetchWeather(event.target.value);
	console.log(weather);
	if (!weather.message) {
		tempEl.textContent = Math.round(weather.main.temp - 273);
		feelsLikeEl.textContent = Math.round(weather.main.feels_like - 273);
		windSpeedEl.textContent = weather.wind.speed;
		descEl.textContent = weather.weather[0].description;
		map.getView().setCenter(
			ol.proj.transform(
				[weather.coord.lon, weather.coord.lat],
				'EPSG:4326',
				'EPSG:3857'
			)
		);
	}
});

// async function getSkills() {
// 	const skills = await fetch('https://zany-skitter-caper.glitch.me/skills');
// 	const experiences = await fetch(
// 		'https://zany-skitter-caper.glitch.me/experiences'
// 	);
// 	console.log(await skills.json());
// 	console.log(await experiences.json());
// }
// getSkills();
