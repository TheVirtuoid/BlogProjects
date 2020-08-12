import processOperator from "./processOperator.js";
import collapseStacks from "./collapseStacks.js";

const calculateEquation = (equation = "") => {
	let numbers = [];
	let operators = ['('];
	let items = equation.trim().split(/([+\-*/()])/g);
	while (items.length) {
		let item = items.shift();
		if (item) {
			if (!isNaN(item)) {
				numbers.push(parseFloat(item));
			} else if ("+-*/()".indexOf(item) !== -1) {
				processOperator(operators, numbers, item);
			} else {
				throw new SyntaxError(`Invalid equation`);
			}
		}
	}
	collapseStacks(operators, numbers, ")");
	if (numbers.length) {
		return numbers.pop();
	} else {
		return null;
	}
}
export default calculateEquation;
