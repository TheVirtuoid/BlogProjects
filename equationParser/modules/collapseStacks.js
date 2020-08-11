const collapseStacks = (operators, numbers, closing = "") => {
	if (operators.length) {
		if (closing === ")") {
			while (operators[operators.length - 1] !== "(") {
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
}

export default collapseStacks;