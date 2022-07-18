const numButtonElements = document.querySelectorAll('.button--white');
const operatorButtonElements = document.querySelectorAll('.button--grey');
const btnEl = document.querySelector('.button--blue');
const prevValueEl = document.querySelector('.prev__value');
const currValueEl = document.querySelector('.curr__value');

const operatorArray = [...operatorButtonElements, btnEl];

class Calculator {
	#currValue;
	#prevValue;
	#prevOperator = '';
	#operator;
	constructor() {
		this.#currValue = '';
		this.#prevValue = '';
		this.#operator = '';
		this.#prevOperator = '';
	}
	addValue(value) {
		if (this.#operator) {
			this.#prevOperator = this.#operator;
			this.#operator = '';
			this.#currValue = '';
		}
		this.#currValue += value;
	}
	updateDisplay() {
		currValueEl.textContent = this.#currValue;
		prevValueEl.textContent = this.#prevValue + ' ' + this.#prevOperator;
	}
	operation(operator) {
		if (this.#prevOperator) {
			this.calculate(operator);
			return;
		}
		this.#operator = operator;
		this.#prevOperator = operator;
		this.#prevValue = this.#currValue;
	}
	calculate(operator) {
		//todo:
		this.#prevValue = number;
		this.#operator = this.#prevOperator;
		this.#prevOperator = operator;
	}
	clearDisplay() {
		this.#currValue = '';
		this.#prevValue = '';
		this.#operator = '';
		this.#prevOperator = '';
	}
}

const calculator = new Calculator();
numButtonElements.forEach((buttons) => {
	buttons.addEventListener('click', (event) => {
		calculator.addValue(event.target.textContent);
		calculator.updateDisplay();
	});
});
operatorArray.forEach((buttons) => {
	buttons.addEventListener('click', (event) => {
		calculator.operation(event.target.textContent);
		calculator.updateDisplay();
	});
});
