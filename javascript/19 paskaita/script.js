document.cookie = 'name=Vidmantas; expires=Tue, 05 Apr 2022 15:47:50 GMT';
document.cookie = 'name2=Petras';

console.log(document.cookie.split(';'));

// =========================================
// LocalStorage
// =========================================

localStorage.setItem('name', 'Vidmantas');
localStorage.setItem('name2', 'Petras');

console.log('localStorage', localStorage.getItem('name2'));
// localStorage.removeItem('name');
// localStorage.clear();

localStorage.setItem('array', '["Vidmantas", "asgasga", 5]');
let arr = ['Vidmantas', 'Lukas', { age: 18 }];

localStorage.setItem('arr2', JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem('arr2')));

sessionStorage.setItem('name', 'Vidmantas');
console.log(sessionStorage.getItem('name'));
// =================================================================
const outputEl = document.getElementById('output');
// document.forms[0].addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const storageArray = JSON.parse(localStorage.getItem('form-task'));
// 	const taskValue = event.target.querySelector('input[name="task"]').value;
// 	let tasksArray;
// 	if (storageArray) {
// 		tasksArray = [...storageArray, taskValue];
// 		// storageArray.push(taskValue);
// 		// tasksArray = storageArray;
// 	} else {
// 		tasksArray = [taskValue];
// 	}
// 	localStorage.setItem('form-task', JSON.stringify(tasksArray));
// 	outputEl.textContent = tasksArray;
// });
// outputEl.textContent = JSON.parse(localStorage.getItem('form-task'));
// JSON.parse(localStorage.getItem('form-task')).forEach(
// 	(item = console.log(item))
// );
document.forms[0].addEventListener('submit', (event) => {
	event.preventDefault();
	const inputValue = event.target.querySelector('input[name="task"]').value;
	const splitValue = inputValue.split(' ');
	const nameObjArr = [
		{
			name: splitValue[0],
			surname: splitValue[1],
		},
	];
	localStorage.setItem('name-array', JSON.stringify(nameObjArr));
	console.log(nameObjArr);
});
const localStorageValue = JSON.parse(localStorage.getItem('name-array'));
outputEl.textContent = localStorageValue[0].name + localStorageValue[0].surname;

if (document.cookie.includes('name')) {
	console.log('mygtukas');
} else {
	console.log('forma');
}
