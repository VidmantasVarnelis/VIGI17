const getMyName = () => {
	return 'Vidmantas';
};
const getMyLastName = () => {
	return 'Varnelis';
};
// es6 - export
// node by default naudoja commanJs - module.exports = <ka mes norim eksportuoti>
// module.exports = getMyName
module.exports = {
	getMyName,
	getMyLastName,
};
