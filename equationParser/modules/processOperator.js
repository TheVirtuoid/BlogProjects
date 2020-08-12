import collapseStack from "./collapseStack.js";
const precedence = new Map();
precedence.set("+", 1);
precedence.set("-", 1);
precedence.set("*", 2);
precedence.set("/", 2);
precedence.set("(", 3);
precedence.set(")", -1);

const processOperator = (params) => {
	let { operators, numbers, operator } = params;
	let lastOperatorPrecedence;
	while (precedence.get(operator) <= (lastOperatorPrecedence = operators.length ? precedence.get(operators[operators.length - 1]) : 0)) {
		collapseStack( {operators, numbers });
	}
	operators.push(operator);
}
export default processOperator;