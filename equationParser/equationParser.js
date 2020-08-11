const parserFormDom = document.getElementById("parserForm");
const equationDom = document.getElementById("equation");
const errorMessageDom = document.getElementById("errorMessage");
const result = document.getElementById("result");

parserFormDom.addEventListener('submit', calculateEquation);

function calculateEquation (event) {
	let numbers = [0];
	let operators = ['('];
	event.preventDefault();
	clearError();
	let items = equationDom.value.split(/([+\-*/()])/g);
	while (items.length) {
		let item = items.shift();
		if (item) {
			if (!isNaN(item)) {
				numbers.push(parseFloat(item));
			} else if ("+-*/()".indexOf(item) !== -1) {
				processOperator(operators, numbers, item);
			} else {
				setError();
			}
		}
	}
	collapseStacks(operators, numbers, ")");
	console.log(numbers);
	console.log(operators);
	result.textContent = numbers.pop().toString();
}

function processOperator(operators, numbers, operator) {
	let allDone = false;
	while (!allDone) {
		if (operators.length === 1) {
			operators.push(operator);
			allDone = true;
		} else {
			const lastOperator = operators[operators.length - 1];
			if (operator === "+" || operator === "-") {
				collapseStacks(operators, numbers);
			} else if ((operator === "*" || operator === "/") && (lastOperator === "*" || lastOperator === "/")) {
				collapseStacks(operators, numbers);
			} else if (operator === ")") {
				collapseStacks(")");
			} else {
				operators.push(operator);
				allDone = true;
			}
		}
	}
}

function collapseStacks(operators, numbers, closing = "") {
	if (operators.length && operators[operators.length - 1] === "(") {
		return;
	}
	if (closing === ")") {
		while (operators.length && operators[operators.length - 1] !== "(") {
			collapseStacks(operators, numbers);
		}
		operators.pop();  // removes the "("
	} else {
		const num2 = numbers.pop();
		const num1 = numbers.pop();
		const operator = operators.pop();
		if (operator === "+") {
			numbers.push(num1 + num2);
		} else if (operator === "-") {
			numbers.push(num1 - num2);
		} else if (operator === "*") {
			numbers.push(num1 * num2);
		} else if (operator === "/") {
			numbers.push(num1 / num2);
		}
	}
}

function clearError() {
	errorMessageDom.style.display = "none";
}

function setError() {
	errorMessageDom.style.display = "block";
}
