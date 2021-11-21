'use strict';

const form1 = document.forms[0];
const calculator = new SmartCalculator(form1.previous, form1.current);

form1.clear.onclick = () => calculator.clear();

form1.delete.onclick = () => calculator.delete();

form1.number.forEach(element => {
    element.onclick = (event) =>
    calculator.appendNumber(event.target.textContent);
});

form1.operator.forEach(element => {
    element.onclick = (event) =>
    calculator.chooseOperator(event.target.textContent);
});

form1.current.onkeydown = (event) => calculator.keyboard(event.key);

form1.current.oninput = () => calculator.changeSize();