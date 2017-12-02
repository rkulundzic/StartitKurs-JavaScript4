/*
4.6. Napisati funkciju koja prima niz i vraća drugi niz sa obrnutim 
redosledom elemenata, tako da je poslednji element u prvom nizu bude prvi 
element u poslednjem nizu, pretposlednji drugi, itd... 
Primer: [15, 3, 9, 69, 100] > [100, 69, 9, 3, 15]
*/

var duzina = Number(prompt('Unesi duzinu niza:'));
var unos = [];

for (var i = 0; i < duzina; i++){
	unos.push(Number(prompt('Unesi jedan broj:')));
}

console.log(unos);

function Obrni (array) {

	var obrnutiNiz = [];

	for (var i = 0; i < array.length; i++) {
		obrnutiNiz.push(array[array.length - 1 - i]);
	}

	console.log(obrnutiNiz);
}

Obrni(unos);

