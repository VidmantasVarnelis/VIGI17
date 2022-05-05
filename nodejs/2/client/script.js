console.log('Veikia');
fetch('http://localhost:5000/about')
	.then((response) => response.json())
	.then((data) => console.log(data));
