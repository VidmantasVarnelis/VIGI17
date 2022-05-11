const express = require('express');

const app = express();
const PORT = 3001;

const restaurants = [
	{
		id: 0,
		name: 'pizza_express',
		popularity: 1500,
	},
	{
		id: 1,
		name: 'grill_london',
		popularity: 5000,
	},
	{
		id: 2,
		name: 'talutti',
		popularity: 4000,
	},
];

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/api/restaurants', (req, res) => {
	res.json(restaurants);
});

app.get('/api/restaurants/names', (req, res) => {
	const restaurantNames = restaurants.map((restaurant) => restaurant.name);
	res.json(restaurantNames);
});

app.get('/api/restaurants/popularity', (req, res) => {
	const popularity = restaurants.reduce((acc, curr) => {
		if (curr.popularity > acc) {
			acc = curr.popularity;
		}
		return acc;
	}, 0);
	res.json(
		restaurants.find((restaurant) => restaurant.popularity === popularity)
	);
});

app.get('/api/restaurants/:id', (req, res) => {
	const id = parseInt(req.params.id);
	// const arr = restaurants.filter((restaurant) => restaurant.id === id);
	// console.log(arr);
	const restaurant = restaurants.find((restaurant) => restaurant.id === id);
	if (restaurant) {
		res.json(restaurant);
	} else {
		res.json({
			status: 'restorano nera',
		});
	}
});
app.get('/api/cars/:id', (req, res) => {
	const id = parseInt(req.params.id);
	// const arr = restaurants.filter((restaurant) => restaurant.id === id);
	// console.log(arr);
	const restaurant = restaurants.find((restaurant) => restaurant.id === id);
	if (restaurant) {
		res.json(restaurant);
	} else {
		res.json({
			status: 'restorano nera',
		});
	}
});

app.listen(PORT, () => console.log(`server is running port: ${PORT}`));
