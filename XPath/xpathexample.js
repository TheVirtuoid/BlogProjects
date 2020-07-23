const animalTable = document.getElementById("animalTable");
const xpathQuery = `//td[contains(text(), "Horse")]`;
const results = document.evaluate(
	xpathQuery,
	animalTable,
	null,
	// XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
	XPathResult.ORDERED_NODE_ITERATOR_TYPE,
	null
)
// console.log(results);
let node = null;
let horses = [];
while (node = results.iterateNext()) {
	horses.push(node.closest('tr'));
}
printResults(horses, document.getElementById("xpResults"));


const qsaAnimals = [...animalTable.querySelectorAll('tbody tr')];
const qsaHorses = qsaAnimals.filter( animal => animal.firstChild.textContent === "Horse");
printResults(qsaHorses, document.getElementById("qsaResults"));


function printResults(data, resultsTable) {
	resultsTable.appendChild(animalTable.querySelector('thead').cloneNode(true));
	const tbody = document.createElement('tbody');
	data.forEach( element => {
		tbody.appendChild(element.cloneNode(true));
	});
	resultsTable.appendChild(tbody);
}
