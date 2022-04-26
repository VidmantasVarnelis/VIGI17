// document.querySelector('button').addEventListener('click', () => {
// 	// document.body.innerHTML = '<img src="https://picsum.photos/200/300"/>';
// });

//STEP 1 susikurti norima elementa
console.log(document.createElement('h1'));
const headingEl = document.createElement('h1');
headingEl.textContent = 'CodeAcadeemy';
// Step 2 isvesti i ekrana sukurta elementa
const bodyEl = document.querySelector('body');
bodyEl.append(headingEl);

document.querySelector('button').addEventListener('click', () => {
	const imgEl = document.createElement('img');
	imgEl.src = 'https://picsum.photos/200/300';
	imgEl.alt = 'No Imgae';
	document.body.append(imgEl);
});

// append - prepend

const headingEl2 = document.createElement('h2');
headingEl2.textContent = 'Vidmantas';
// append - sukurta elementa prideda i gala nurodytam elementui
// document.body.append(headingEl2);
// prepend - sukurta elementa prideda i prieki nurodytam elementui
// document.body.prepend(headingEl2);

// document.body.append('Tai yra tekstas-stringas');
// document.body.appendChild('Tai yra tekstas-stringas');
