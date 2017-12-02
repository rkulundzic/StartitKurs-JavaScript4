/*
4.2. Napisati funkciju koja prima 4 broja, posebno sabira pozitivne,
posebno negativne i vraća njihov proizvod (pozitivni * negativni)
*/

var unos = [];

for (var i = 0; i < 4; i++){
		unos.push(Number(prompt('Unesi jedan broj:')));
}

console.log(unos);

function Proizvod (array) {
	
	var sumaPoz = 0;
	var sumaNeg = 0;

	for ( var i=0; i < array.length; i++){

		if (array[i] < 0){
			sumaNeg = sumaNeg + array[i];
		}

		else {
			sumaPoz = sumaPoz + array[i];
		}
	}

	console.log(sumaPoz*sumaNeg);
}

Proizvod(unos);