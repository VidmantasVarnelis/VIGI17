// Scopes - global - function - block
// global scope
const name = 'Vidmantas';
const name2 = 'Petras';
if (name) {
	console.log(name);
}
function fn() {
	console.log(name);
}
// function scope
function fn2() {
	// function scope
	// const name = 'Vidmantas';
	const test = 'test';
}
// console.log(test); // gauname klaida, nes kitamasis sukurtas funkcijoje

// blokinis scope
// if(){}
// for(){}
// while(){}
if ('Vidmantas') {
	// const name = 'Vidmantas';
	const test = 'test';
}
// console.log(test);

// ==============================
function fn3() {
	const name = 'Vidmantas';
	if (name) {
		const test = 'test';
		if (test) {
			const test2 = 'Test';
			console.log('testuojam', test);
		}
		// console.log('test2', test2);
		console.log(name);
		console.log(name2);
	}
	console.log(test);
}
fn3();
