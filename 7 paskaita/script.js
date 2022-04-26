const func = function () {
	console.log('CodeAcademy');
};
func();

function func2() {
	console.log('CodeAcademy2');
}
// func2();

// arrow function
const func3 = () => {
	console.log('CodeAcademy3');
};
// document.addEventListener('click', func2);
// ES5 standartas
// document.addEventListener('click', function () {
// 	console.log('CodeAcademy2');
// });
// ES6 standartas - anonymous function
document.addEventListener('click', () => {
	console.log('CodeAcademy2');
});
// ES5 - anonimine funkcija
document.addEventListener('click', function () {
	console.log('fsafa');
});

// Yra dvieju tipu funkcijos su pavadinimu ir be jo (anonymous)
// ES6
// Funkcija su pavadinimu panaudojant arrow funckija
const func4 = () => {
	console.log('first');
};
// ES5 funkcija su pavadinimu be arrow funkcijos
// function func4() {}

// Anoninimines funkcijos dabar busnaudojamos kitose funkcijose

// Funkcijos gali tureti return gali ir netureti
