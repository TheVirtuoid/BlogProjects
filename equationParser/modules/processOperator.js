import collapseStacks from "./collapseStacks.js";

const processOperator = (operators, numbers,operator) => {
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
export default processOperator;