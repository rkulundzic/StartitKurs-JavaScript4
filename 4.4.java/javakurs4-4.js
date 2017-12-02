/*
4.4. Napisati funkciju koja prima niz brojeva i sabira poslednja tri. 
Funkcija treba da podržava niz bilo koje veličine.
*/

var duzina = Number(prompt('Unesi duzinu niza:'));
var unos = [];

if (duzina<3) {
	alert('Niz mora da ima bar tri člana!');
}
else{
	for (var i = 0; i < duzina; i++){
		unos.push(Number(prompt('Unesi jedan broj:')));
	}
}

console.log(unos);

function PoslednjaTri (array) {

	var suma = array[array.length - 1] + array[array.length - 2] + array[array.length - 3];

	console.log(suma);
}

PoslednjaTri(unos);