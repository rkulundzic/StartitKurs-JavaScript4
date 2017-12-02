/*
4.1. Napisati funkciju koja prima broj od 1-10. 
Unutar funkcije generisati nasumičan broj (Math.random)
od 1-10 i ispisati korisniku da li je pogodio broj ili ne.
*/

var unos = Number(prompt('Unesi neki broj od 1 do 10:'));
var broj = Math.floor(Math.random() * 10 + 1);

console.log(unos);
console.log(broj);

function Pogodak(number){
	if (number == broj){
		console.log('Pogodio si!')
	}
	else{
		console.log('Promašaj. Pogađaj ponovo!')
	}
}

Pogodak(unos);
