// console.log(Math.floor(5.6)); // suapvalina i mazaja puse
// console.log(Math.ceil(5.2)); // suapvalina i didziaja puse
// console.log(Math.round(5.4));
// console.log(Math.PI);
// console.log('Didziausias skaicius', Math.max(10, 15, 40, 30));
// console.log('Maziausias skaicius', Math.min(10, 15, 40, 30));
// // console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10) + 1);
// // console.log(Math.floor(Math.ceil(5.7)));

// DOM - document model object
// window.console.log('CodeAcademy');
// window.alert('Testuoju');
// console.log(window);
// console.log(document);
console.log(document.querySelector('h1'));
console.log(document.querySelector('.codeacademy2'));
console.log(document.querySelectorAll('h1'));
console.log(document.querySelector('#codeacademy3'));
// paimti elementa is html su kitu metodu getElementById
console.log(document.getElementById('codeacademy3'));

const myText = document.querySelector('h1');
myText.textContent = 'Tai yra naujas tekstas';

// document.querySelector('h1').textContent = 'Tai yra trecioji reiksme';

document.querySelector('h1').innerHTML =
	'<div><a href="https://google.com">Test</a></div>';
// document.querySelector('h1').textContent = '<h6>Test</h6>';
// document.body.innerHTML = '....';

// Uzduotys

// 1 uzduotis
// document.body.innerHTML = '<h2>Vidmantas</h2>';
// const bodyEl = document.body;
// bodyEl.innerHTML = '<h2>Vidmantas</h2>';
// const ulEl = document.querySelector('ul');
// const listItemEl = ulEl.querySelectorAll('li');
// console.log(listItemEl[2]);
// console.log(listItemEl[3]);
// listItemEl[listItemEl.length - 1].textContent = 'Suris';
// document.getElementById('last-item').textContent = 'Suris';

// 3 uzduotis

const olEl = document.querySelector('ol');
const olItems = olEl.querySelectorAll('li');
const firstListItemText = olItems[0].textContent;
const secondListItemText = olItems[1].textContent;
olItems[0].textContent = secondListItemText;
olItems[1].textContent = firstListItemText;
// let bmw = document.querySelectorAll('li')[0].textContent;

// let vw = document.querySelectorAll('li')[1].textContent;

// document.querySelectorAll('li')[0].textContent = vw;

// document.querySelectorAll('li')[1].textContent = bmw;

const random = Math.floor(Math.random() * 15) + 1;
switch (random) {
	case 12:
		console.log('Automobilis');
		break;
	case 1:
	case 2:
	case 3:
		console.log('Televizorius');
		break;
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
		console.log('2 eurai');
		break;
	default:
		console.log('Nieko nelaimejot');
}
console.log(random);

console.log(Math.random() * 15);
// range 1 - 15
console.log(Math.ceil(Math.random() * 15));
console.log(Math.floor(Math.random() * 8) + 5);
