// export const header = document.createElement('h1');

// header.textContent = 'Hello World';

// header.style.color = 'red';
// export const header = () => {
// 	const headerEl = document.createElement('h1');
// 	headerEl.textContent = 'Hello World';
// 	headerEl.style.color = 'red';
// 	return headerEl;
// };

export const header = (app) => {
	app.innerHTML = '<div style="background-color: red">Header</div>';
};
