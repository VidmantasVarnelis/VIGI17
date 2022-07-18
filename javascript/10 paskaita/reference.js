let name = 'Vidmantas';
let secondName = name;
let thirdName = secondName;
name = 'Petras';
console.log(secondName);
console.log(thirdName);
console.log(name);

//reference data types object - array

const person = {
	name: 'Vidmantas',
};

const secondPerson = person;
// secondPerson.name = 'Petras';
// secondPerson.age = 20;
console.log(secondPerson);
console.log(person);

// es5
const uniquePerson = Object.assign({}, person);
//es6
const uniquePerson2 = { ...person };
uniquePerson2.name = 'Lukas';
person.name = 'Petras';
console.log(uniquePerson2);
