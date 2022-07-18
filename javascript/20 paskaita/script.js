// setTimeout(() => {
// 	console.log('8');
// }, 2000);
// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');
// console.log('6');
// console.log('7');

//==========
// console.log('1');
// setTimeout(() => {
// 	console.log('2');
// }, 5000);
// setTimeout(() => {
// 	console.log('10');
// }, 0);
// console.log('3');

const myName = 'Vidmantas';
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (myName === 'Vidmantas') {
			resolve('Mano vardas Vidmantas');
		} else {
			reject('Neteisingas vardas');
		}
	}, 2000);
});
// promise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((err) => console.log(err))
// 	.finally(() => {
// 		console.log('Tai yra finally');
// 	});
// promise
// 	.then((value) => {
// 		// return 'tastfasfsa';
// 		console.log(value);
// 	})
// 	.then((msg) => console.log('asgsagasgs'))
// 	.catch((err) => console.log(err));

function fn(resolveCb, rejectCb) {
	if (myName === 'Vidmantas') {
		resolveCb('Mano vardas Vidmantas');
	} else {
		rejectCb('Neteisingas vardas');
	}
}
fn(
	(value) => {
		console.log(value);
	},
	(err) => {
		console.log(err);
	}
);
console.log('12');
