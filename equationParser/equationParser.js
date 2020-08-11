import calculateEquation from "./modules/calculateEquation.js";

const parserFormDom = document.getElementById("parserForm");
const equationDom = document.getElementById("equation");
const errorMessageDom = document.getElementById("errorMessage");
const resultDom = document.getElementById("result");

parserFormDom.addEventListener('submit', doCalculation);

function doCalculation (event) {
	event.preventDefault();
	clearError();
	let result;
	try {
		result = calculateEquation(equationDom.value);
		resultDom.textContent = result.toString();
	} catch (err) {
		setError(err.message);
		resultDom.textContent = "";
	}
}


function clearError() {
	errorMessageDom.style.display = "none";
}

function setError(message) {
	errorMessageDom.textContent = message;
	errorMessageDom.style.display = "block";
}
