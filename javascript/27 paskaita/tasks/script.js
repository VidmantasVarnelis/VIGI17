import { getPokemon } from './src/api/requests.js';
import { displayPokemons } from './src/utils.js';

// getPokemon().then((pokemons) => {
// 	displayPokemons(pokemons.results);
// });
// const main = async () => {
// 	const pokemons = await getPokemon();
// 	displayPokemons(pokemons.results);
// };
const nextBtn = document.getElementById('next');
document.addEventListener('DOMContentLoaded', async () => {
	const pokemons = await getPokemon(
		'https://pokeapi.co/api/v2/ability/?limit=10'
	);
	console.log(pokemons);
	let count = 0;
	nextBtn.addEventListener('click', async () => {
		const nextPokemons = await getPokemon(
			`https://pokeapi.co/api/v2/ability/?offset=${count}&?limit=10`
		);
		displayPokemons(nextPokemons.results);
		count += 10;
	});
	displayPokemons(pokemons.results);
});
