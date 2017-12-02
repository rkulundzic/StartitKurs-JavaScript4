/*
4.5. Napisati funkciju koja prima niz i dva broja koji predstavljaju indexe. 
Zameniti vrednosti u nizu na datim indexima. 
Primer: ako su indexi 3 i 10  potrebno je zameniti vrednosti niz[3] i niz[10].
*/

var duzina = Number(prompt('Unesi dužinu niza:'));
var unos = [];
var zamena = 0;

if (duzina<=1){
	alert('Niz mora imati više članova!');
}

else{
	for (var i = 0; i < duzina; i++){
		unos.push(Number(prompt('Unesi jedan broj:')));
	}

	console.log(unos);
}

var index1 = Number(prompt('Unesi prvi index:'));
var index2 = Number(prompt('Unesi drugi index:'));

if (index1 > unos.length || index2 > unos.length) {
	alert('Index mora biti manji od broja članova niza!');
}

function ZamenaIndexa (array, a, b){
 	var zamena = array[a];
 	array[a] = array [b];
 	array[b] = zamena;
}

ZamenaIndexa(unos, index1, index2);
console.log(unos);