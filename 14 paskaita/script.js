// const array = ['As', 'esu', 'Vidmantas', 'is', 'CodeAcademy'];

// find returnina rasta reiksme is masyvo
// const me = array.find((value) => value === 'Vidmantas');
// if (me) alert('Kad radau is savo masyvo ieskota reiksme');

// some
// returnina true arba false jeigu randa ieskoma reiksme masyve
// console.log(array.some((value) => value === 'Petras'));

// every
// returnina true arba false jeigu randa visos ieskomos reiksmes atitinka kondicija masyve

// const abc = ['a', 'a', 'a'];
// console.log(abc.every((value) => value === 'a'));

// foreach
// let count = 0;
// array.forEach(() => {
// 	count++;
// });
// console.log(count);

// array.shift();
// array.pop();

//========================================================================================
//========================================================================================

// Sort

// const abc = ['b', 'c', 'd', 'e', 'k', 'a', 'D', 'A', 3, 1];
// sort metodas negrazina nieko, bet modifikuoja esama masyva
// be callback mes naudosim defaultini sorto veikima
// abc.sort();

// const numbers = [5, 4, 3, 2, 11];
// const numbers = [115, 113, -2, 3];
// [11, 1, 2, 3];
// [1, 11, 2, 3];
// =================
//[12, 11,2,3]
//[11,12,2,3]
// numbers.sort();
// const abc = ['A1D', 'A1d'];
// abc.sort();
// console.log(abc);
const numbers = [5, 2, 3, 4, 12, 11];
// numbers.sort((num1, num2) => {
// 	return 1; // apsuka
// 	return 0; // nedarys nieko
// 	return -1; // neapsuka
// });
//nuo didziausio iki maziausio
numbers.sort((num1, num2) => 1);
console.log(numbers);

//nuo maziausio iki didziausio
numbers.sort((num1, num2) => num1 - num2);
const array = ['As', 'esu', 'Vidmantas', 'is', 'CodeAcademy'];
array.sort((a, b) => b.length - a.length);
const abc = ['b', 'c', 'd', 'ę', 'ą', 'k', 'k', 'a', 'D', 'A', 2, 2];

// abc.sort((a, b) => b > a);
// abc.sort((a, b) => a.localeCompare(b));
abc.sort((a, b) => {
	if (isNaN(a) || isNaN(b)) {
		return a.localeCompare(b);
	}
});
// console.log(abc);

// console.log(abc);
// console.log('A'.charCodeAt());

const nums2 = [1, 2, 5, 8, 10];

// reduce naudojamas sutraukti masyva i viena reiksme jis turi returna

// by default reduce ima pirma masyvo reiksme jeigu neperasome patys
console.log('nums2', nums2);
const sum = nums2.reduce((prev, curr) => {
	prev = prev + curr;
	console.log('curr', curr);
	console.log('prev', prev);
	return prev;
});
console.log('sum', sum);
