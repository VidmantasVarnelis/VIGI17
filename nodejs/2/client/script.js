fetch('http://localhost:5000/about')
	.then((response) => response.json())
	.then((data) => {
		document.body.append(data.name);
	});
