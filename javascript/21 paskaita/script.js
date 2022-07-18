// fetch - metodas skirtas siusti uzklausa
// const p1 = new Promise((res, rej) => rej('test'));
// console.log(p1);

// const promise = fetch('./data.json');
// promise
// 	.then((resp) => resp.json())
// 	.then((data) => {
// 		data.forEach((item) => {
// 			console.log(item);
// 		});
// 	});
// const promise = fetch('./data.json', {
// 	method: 'GET',
// });
// promise
// 	.then((resp) => resp.json())
// 	.then((data) => {
// 		data.forEach((item) => {
// 			console.log(item);
// 		});
// 	});
const tableBody = document.querySelector('tbody');
const outputEl = document.getElementById('output');
fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
	.then((response) => response.json())
	.then((value) => {
		// for (let item of value) {
		// 	const tableRow = document.createElement('tr');
		// 	const nameCell = document.createElement('td');
		// 	const attendCell = document.createElement('td');
		// 	const plusOneCell = document.createElement('td');
		// 	nameCell.textContent = item.name;
		// 	attendCell.textContent = item.attending ? '+' : '-';
		// 	plusOneCell.textContent = item.plusOne ? '+' : '-';
		// 	tableRow.append(nameCell, attendCell, plusOneCell);
		// 	tableBody.append(tableRow);
		// }
		// for (let item = 0; item < value.length; item++) {
		// 	const tableRow = document.createElement('tr');
		// 	const nameCell = document.createElement('td');
		// 	const attendCell = document.createElement('td');
		// 	const plusOneCell = document.createElement('td');
		// 	nameCell.textContent = value[item].name;
		// 	attendCell.textContent = value[item].attending ? '+' : '-';
		// 	plusOneCell.textContent = value[item].plusOne ? '+' : '-';
		// 	tableRow.append(nameCell, attendCell, plusOneCell);
		// 	tableBody.append(tableRow);
		// }
		value.forEach((item) => {
			const tableRow = document.createElement('tr');
			const nameCell = document.createElement('td');
			const attendCell = document.createElement('td');
			const plusOneCell = document.createElement('td');
			nameCell.textContent = item.name;
			attendCell.textContent = item.attending ? '+' : '-';
			plusOneCell.textContent = item.plusOne ? '+' : '-';
			tableRow.append(nameCell, attendCell, plusOneCell);
			tableBody.append(tableRow);
		});
		const count = value.reduce(
			(acc, curr) => {
				if (curr.attending) acc.attending += 1;
				if (curr.attending && curr.plusOne) acc.test += 1;
				if (curr.plusOne) acc.plusOne += 1;
				return acc;
			},
			{
				attending: 0,
				plusOne: 0,
				test: 0,
			}
		);
		// outputEl.innerText = 'Zmoniu skaicius:' + value.length;
		outputEl.innerText = `Zmoniu skaicius: ${value.length}\n Attending: ${count.attending}\n PlusOne: ${count.plusOne}\n Is attending ateina tiek zmoniu su plusOne ${count.test}\n\n`;
	});
