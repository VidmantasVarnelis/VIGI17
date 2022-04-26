// JS stiliai rasomi camelCase t.y borderTop
// css faile rasomi stiliai rasytusi border-top
const heading = document.querySelector('h1');
// heading.style.textAlign = 'center';
// heading.style.color = 'royalblue';
// heading.style.fontFamily = 'sans-serif';
// heading.style.cssText =
// 	'text-align: center; color: royalblue; font-family: sans-serif';

// heading.className = 'heading';
heading.classList.add('heading');
// heading.classList.add('heading', 'heading2');
// heading.classList.remove('heading');
// console.log(heading.classList.contains('heading'));
// heading.classList.toggle('heading');
document.getElementById('name').addEventListener('click', (event) => {
	// event.target.style.color = 'red';
	// event.target.style.fontSize = '4rem';
	// event.target.style.textAlign = 'center';
	event.target.style.cssText =
		'color: red;font-size: 4rem; text-align: center';
});

// tasks

// 4.
document.getElementById('text').addEventListener('input', (event) => {
	// console.log(event.target.value);
	if (event.target.value.length <= 2) {
		document.body.style.backgroundColor = 'red';
	} else {
		document.body.style.backgroundColor = 'royalblue';
	}
});
// console.log(document.getElementById('text').value);

let count = 0;
// document.querySelector('button').addEventListener('click', (event) => {
// 	count++;
// 	event.target.style = '';
// 	event.target.style.position = 'absolute';

// 	if (count % 2 === 0) {
// 		event.target.style.top = '0px';
// 		event.target.style.left = '0px';
// 	} else {
// 		event.target.style.bottom = '0px';
// 		event.target.style.right = '0px';
// 	}
// });
document.querySelector('button').addEventListener('click', (event) => {
	let btnEl = event.target;
	if (btnEl.className === 'btn-left') {
		btnEl.className = 'btn-right';
	} else if (btnEl.className === 'btn-right') {
		btnEl.className = 'btn-left';
	} else {
		btnEl.className = 'btn-left';
	}
});
// inset = 0px
// top: 0px; bottom: 0px; right: 0px; left: 0px
