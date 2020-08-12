const collapseStack = (params) => {
	let { operators, numbers } = params;
	if (operators.length) {
		if ("()".indexOf(operators[operators.length - 1]) !== -1) {
			throw new SyntaxError("Mismatch parenthesis");
		}
		if (numbers.length <= 1) {
			throw new SyntaxError("Too few numbers to perform operation");
		}
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
			if (num2 === 0) {
				throw new SyntaxError("Division by zero");
			}
			numbers.push(num1 / num2);
		}
	}
}

export default collapseStack;
