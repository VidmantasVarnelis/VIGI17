document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	// paimame output elementa duomenu isvedimui i ekrana
	const outputEl = document.getElementById('output');
	//
	// Paimame reiksmes is input elementu
	const nameElValue = event.target.elements.name.value;
	const priceElValue = event.target.elements.price.value;
	const urlElValue = event.target.elements.url.value;
	//
	// Tikriname ar reiksmes yra teisingos
	// if(validateText(nameElValue) === false){}
	if (!isNaN(nameElValue) || isNaN(priceElValue) || !isNaN(urlElValue)) {
		alert('Blogi duomenys');
		return;
	}
	//
	//susikuriame elementus ir priskiriame jiems tekstus/atributus
	const headingEl = document.createElement('h1');
	headingEl.textContent = nameElValue;
	const priceEl = document.createElement('p');
	priceEl.textContent = priceElValue;
	const imageEl = document.createElement('img');
	imageEl.src = urlElValue;
	const containerEl = document.createElement('div');
	// isvedame sukurtus elementus i ekrana
	// outputEl.append(imageEl);
	// outputEl.append(headingEl);
	// outputEl.append(priceEl);
	containerEl.append(imageEl);
	containerEl.append(headingEl);
	containerEl.append(priceEl);
	outputEl.append(containerEl);
});

// function validateText(value) {
// 	//isNan - is not a number
// 	return isNaN(value);
// }
