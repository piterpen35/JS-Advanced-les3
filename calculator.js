'use strict';

class Calculator {
	constructor(previousElement, currentElement) {
		this.previousElement = previousElement;
		this.currentElement = currentElement;
		this.previousOperand = previousElement.value;
		this.currentOperand = currentElement.value;
		this.operator = undefined;
	}

	clear() {
		this.previousOperand = '';
		this.currentOperand = '';
		this.operator = undefined;
		this.display();
	}
	delete() {
		this.currentOperand = this.currentOperand.slice(0, -1);
		this.display();
	}
	appendNumber(number) {
		if(number === '.' && this.currentOperand.includes('.')) return;
		if(number === '.' && this.currentOperand === ''){
			this.currentOperand = '0';
		}
		this.currentOperand += number;
		this.display();
	}
		chooseOperator(sign) {
		if(this.currentOperand === '') return;
		if(this.previousOperand !== '') {
			this.calculate();
		}
		if(sign !== '=') {
			this.operator = sign;
			this.previousOperand = this.currentOperand;
			this.currentOperand = '';
			}
		this.display();
	}
	calculate() {
		const prev = parseFloat(this.previousOperand);
		const curr = parseFloat(this.currentOperand);
		if(isNaN(prev) || isNaN(curr)) console.log('isNaN');;
		if(isNaN(prev) || isNaN(curr)) return;
		switch(this.operator) {
			case '+':
				this.currentOperand = (prev + curr).toString();
				break;
			case '-':
				this.currentOperand = (prev - curr).toString();
				break;
			case '*':
				this.currentOperand = (prev * curr).toString();
				break;
			case '/':
				this.currentOperand = (prev / curr).toString();
				break;
			default:
				return;
		}
		this.previousOperand = '';
		this.operator = undefined;
	}
	display() {
		this.currentElement.value = this.getStringFromNumber(this.currentOperand);
		this.changeSize();
		if(this.operator != undefined) {
			this.previousElement.value = this.getStringFromNumber(this.previousOperand) + ' ' + this.operator;
		}
		else {
			this.previousElement.value = '';
		}
		
	}
	changeSize() {
		switch(true) {
			case (this.currentElement.value.length <= 18):
				this.currentElement.style.fontSize = '30px';
				break;
			case (this.currentElement.value.length > 26):
				this.currentElement.style.fontSize = '18px';
				break;
			case (this.currentElement.value.length > 24):
				this.currentElement.style.fontSize = '20px';
				break;
			case (this.currentElement.value.length > 22):
				this.currentElement.style.fontSize = '22px';
				break;
			case (this.currentElement.value.length > 20):
				this.currentElement.style.fontSize = '24px';
				break;
			case (this.currentElement.value.length > 19):
				this.currentElement.style.fontSize = '26px';
				break;
			case (this.currentElement.value.length > 18):
				this.currentElement.style.fontSize = '28px';
				break;
		}
	}
	getStringFromNumber(string) {
		const integerDigits = parseInt(string);
		const decimalDigits = parseFloat(string.split('.')[1]);
		let resultString = '';
		if(!isNaN(integerDigits)) {
			resultString = integerDigits.toLocaleString('uk');
			if(string.includes('.')) {
				resultString += '.';
			}
			if(decimalDigits) {
				resultString += decimalDigits;
			}
		}
		return resultString;
	}
}
