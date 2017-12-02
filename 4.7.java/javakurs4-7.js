/*
4.7. Napisati funkciju koja prima tri parametra. 
Prvi parametar treba da bude niz brojeva, drugi parametar početni index i 
drugi krajnji index. Sabrati elemente niza od početnog do krajnjeg indexa.
Primer ulaznih podataka [10, 33, 77, 50, 9, 17, 3, 120], 2, 5 > 
sabrati brojeve od 2. do 5. indexa uključujuci i 2. i 5.
Primer izlaznih podataka: 153
*/

var duzina = Number(prompt('Unesi duzinu niza:'));
var niz = [];

for (var i = 0; i < duzina; i++){
	niz.push(Number(prompt('Unesi jedan broj:')));
}

var prviI = Number(prompt('Unesi prvi index:'));
var drugiI = Number(prompt('Unesi drugi index:'));

if (prviI>drugiI) {
	alert('Prvi index mora biti manji od drugog!');
}
else if (prviI>duzina || drugiI>duzina){
	alert('Index mora biti manji od duzine niza!')
}

console.log(niz, prviI, drugiI);

function Sabiranje (array, a, b){
	
	var suma = 0;
	
	for (var i = [a]; i <= [b]; i++) {
		suma += array[i];
	}
		console.log("Zbir članova niza od " + a + ". do " + b + ".indexa je: " + suma);
}

Sabiranje(niz, prviI, drugiI);