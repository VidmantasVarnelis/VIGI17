// step 1 - turime paimti per JS elementa is DOM'o
// step 2 - pridedame prie paimto elemento metoda addEventListener
// step 3 - nurodom evento tipa pirmu parametru ir sukuriam funkcija antru
// step 4 - atliekam kazkokia logika - funkcijoje
console.log(document.querySelector('button'));
const btnEl = document.querySelector('button');
// autocomplete - atidaryti su CTRL + space
btnEl.addEventListener('click', onClick);
function onClick() {
	console.log('Paspaudziau mygtuka');
}
// document.querySelector('button').addEventListener('click', onClick);

// ==========================
// change
// ========================

document.querySelector('input').addEventListener('change', onChange);
function onChange() {
	console.log('first');
	console.log(document.querySelector('input').value);
}
function onCopy() {
	alert('Nukopijuota');
}
document.querySelector('p').addEventListener('copy', onCopy);
