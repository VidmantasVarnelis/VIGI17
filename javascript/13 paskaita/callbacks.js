function task(number, callback) {
	console.log('CodeAcademy');
	callback();
}

task(10, function () {
	console.log('Daro kazka');
});

function task2(callback) {
	console.log('CodeAcademy');
	callback();
}

task2(function () {
	console.log('Daro kazka2');
});

function task3(callback) {
	console.log('CodeAcademy');
	callback(function () {
		console.log('kita funkcija');
	});
}

task3(function (cb) {
	console.log('Daro kazka2');
	cb();
});
document.addEventListener('click', () => {
	console.log('first');
});

setTimeout(function () {
	console.log('As esu vidmantas');
}, 1000);
