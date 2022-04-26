class Square {
	constructor(size) {
		this.size = size;
		this.display();
	}
	display() {
		const output = document.getElementById('output');
		const divEl = document.createElement('div');
		// divEl.style.width = this.size + 'px';
		divEl.style.width = `${this.size}px`;
		divEl.style.height = this.size + 'px';
		divEl.style.backgroundColor = 'royalblue';
		// divEl.innerText =
		// 	'Perimetras - ' +
		// 	this.getPerimeter() +
		// 	'\n' +
		// 	'Plotas - ' +
		// 	this.getArea();
		divEl.innerText = `Perimetras - ${this.getPerimeter()} \n Plotas - ${this.getArea()}`;
		output.append(divEl);
	}
	getPerimeter() {
		console.log(4 * this.size);
		return 4 * this.size;
	}
	getArea() {
		return this.size * this.size;
	}
}

const square = new Square(100);
// square.display();
const square2 = new Square(200);
// square2.display();
console.log(square);
console.log(square.getPerimeter());
