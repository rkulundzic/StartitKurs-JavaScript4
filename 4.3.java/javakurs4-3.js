/*
4.3. Napisati funkciju koja prima niz kao parameter i sabira prvi i poslednji element niza. 
Funkcija treba da podržava niz bilo koje veličine. 
Hint: iskoristiti length.
*/

var duzina = Number(prompt('Unesi duzinu niza:'))
var unos = [];

for (var i = 0; i < duzina; i++){
		unos.push(Number(prompt('Unesi jedan broj:')));
}

function PrviPoslednji (array) {

	var suma = array[0] + array[array.length - 1];

	console.log(suma);

}

PrviPoslednji(unos);