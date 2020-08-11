import processOperator from "./processOperator.js";
import collapseStacks from "./collapseStacks.js";

const calculateEquation = (equation = "") => {
	let numbers = [0];
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
				throw new SyntaxError(`Invalid symbol found in equation: ${item}`);
			}
		}
	}
	collapseStacks(operators, numbers, ")");
	return numbers.pop();
}
export default calculateEquation;