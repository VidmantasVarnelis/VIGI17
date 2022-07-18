const createElement = (type, text) => {
	const el = document.createElement(type);
	if (text) el.textContent = text;
	return el;
};

export const displayPokemons = (array) => {
	array.forEach((pokemon) => {
		const output = document.getElementById('output');
		const div = createElement('div');
		const heading = createElement('h1', pokemon.name);
		const url = createElement('p', pokemon.url);
		div.append(heading, url);
		output.append(div);
	});
};
