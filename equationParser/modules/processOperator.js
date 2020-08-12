import collapseStack from "./collapseStack.js";
const precedence = new Map();
precedence.set("+", 1);
precedence.set("-", 1);
precedence.set("*", 2);
precedence.set("/", 2);

const processOperator = (params) => {
	let { operators, numbers, operator } = params;
	if (operator === ")") {
		if (operators.indexOf("(") === -1) {
			throw new SyntaxError("Mismatch parenthesis");
		}
		while (operators.length && operators[operators.length - 1] !== "(") {
			collapseStack({ operators, numbers });
		}
		if (!operators.length) {
			throw new SyntaxError("Mismatch parenthesis");
		}
		operators.pop();    // remove "("
		return;
	}
	if (operator !== "(") {
		let lastOperatorPrecedence;
		let operatorPrecedence;
		while ((operatorPrecedence = precedence.get(operator)) <= (lastOperatorPrecedence = operators.length ? precedence.get(operators[operators.length - 1]) : 0)) {
			collapseStack({operators, numbers});
		}
	}
	operators.push(operator);
}
export default processOperator;
