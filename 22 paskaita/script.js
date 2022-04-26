//==============================================
// 1 task:
//==============================================

// fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
// 	.then((response) => response.json())
// 	.then((value) => {
// 		console.log(value);
// 		const person = value.find(
// 			(person) => person.name === 'Kristupas Lapeika'
// 		);
// 		if (person) {
// 			// if (person.vip) {
// 			// 	document.body.textContent = `${person.name} yra Vip`;
// 			// }
// 			// document.body.textContent = person.vip
// 			// 	? `${person.name} yra Vip`
// 			// 	: '';
// 			document.body.textContent = person.vip && `${person.name} yra Vip`;
// 		} else {
// 			document.body.textContent = 'Tokio zmogaus nera';
// 		}
// 	});

// Async/await es6

// async function randomFn() {
// 	const response = await fetch(
// 		'https://boiling-reaches-93648.herokuapp.com/week-3/party'
// 	);
// 	const data = await response.json();
// 	const person = data.find((person) => person.name === 'Kristupas Lapeika');
// 	if (person) {
// 		// if (person.vip) {
// 		// 	document.body.textContent = `${person.name} yra Vip`;
// 		// }
// 		// document.body.textContent = person.vip ? `${person.name} yra Vip` : '';
// 		document.body.textContent = person.vip && `${person.name} yra Vip`;
// 	} else {
// 		document.body.textContent = 'Tokio zmogaus nera';
// 	}
// 	// data.then((data) => {
// 	// 	console.log(data);
// 	// });
// }
// randomFn();

// const fetchData = async () => {
// 	const response = await fetch(
// 		'https://boiling-reaches-93648.herokuapp.com/week-3/party'
// 	);
// 	const data = await response.json();
// 	return data;
// };

// function display() {
// 	const data = fetchData();
// 	data.then((value) => {
// 		console.log('testuoju', value);
// 	});
// }

// display();

// function fn1() {
// 	console.log(1);
// }
// async function fn2() {
// 	fn1();
// 	return 'Testuoju';
// }
// function fn3() {
// 	console.log(fn2());
// }
// fn3();

//=====================================================
// Task2
//=====================================================

const checkboxEl = document.querySelector('input[type="checkbox"]');
const searchEl = document.querySelector('input[type="text"]');
const outputEl = document.getElementById('output');
const main = async () => {
	const response = await fetch(
		'https://random-data-api.com/api/company/random_company?size=30'
	);
	const data = await response.json();
	displayData(data);
	checkboxEl.addEventListener('change', (event) => {
		if (event.target.checked) {
			const newArray = data.filter((item) => item.id < 500);
			outputEl.textContent = '';
			displayData(newArray);
		} else {
			outputEl.textContent = '';
			displayData(data);
		}
	});
	searchEl.addEventListener('input', (event) => {
		if (event.target.value) {
			const newArray = data.filter((item) =>
				item.business_name
					.toLowerCase()
					.includes(event.target.value.toLowerCase())
			);
			outputEl.textContent = '';
			displayData(newArray);
		} else {
			outputEl.textContent = '';
			displayData(data);
		}
	});
};

function displayData(array) {
	array.forEach((item) => {
		const divEl = document.createElement('div');
		const imgEl = document.createElement('img');
		const headingEl = document.createElement('h1');
		const paragraphEl = document.createElement('p');
		imgEl.src = item.logo;
		headingEl.textContent = item.business_name;
		paragraphEl.textContent = item.industry;
		divEl.append(imgEl, headingEl, paragraphEl);
		outputEl.append(divEl);
	});
}

main();
