1.

import input = require('readline-sync');

let kertoma : number = 1; //Määritellään kertoma muuttuja
let numero : number = 0;  //Määritellään numero muuttuja
let kerroin = 1;  		  //Määritellään kerooin muuttuja
numero = parseFloat(input.question('Syota positiivinen kokonaisluku '));  //Kysytään käyttäjältä numero

while (kerroin <= numero) {
	
	kertoma = kertoma * kerroin  //Suoritetaan kertolasku
	kerroin++;  //Kasvatetaan kerrointa
	
}
console.log ('Luvun '+numero+' kertoma on '+kertoma) //Vastauksen tulostus




2.

import input = require('readline-sync');


let maara : number; // Kustannusten määrä
let kustannukset; //Kustannukset
let keskiarvo : number; //keskiarvo


maara = parseInt(input.question("Syota kustannusten maara "));  //Kysytään kustannusten määrä


let yhteensa :number = 0;  //Yhteesä muuttuja


for(let i : number = 0; i < maara; i++) // Laskuri laskee kustannukset määrään nähden
	
{
    kustannukset = parseFloat (input.question("Syota kustannukset " + (i+1))); //Kysytään kustannukset
	yhteensa = yhteensa + kustannukset; //yhteensä
	keskiarvo = yhteensa / maara; //keskiarvo
}
console.log(keskiarvo) //tulostetaan keskiarvo


3.

import input = require('readline-sync');

let fibonacci = []; //Fibonacci muuttuja [] on ryhmä
let numero : number; //numero muuttuja
fibonacci[0] = 0; //ryhmä
fibonacci[1] = 1; //ryhmä

numero = parseFloat(input.question('Anna vuoden jarjestyluku ')) //Kysytään vuoden järjestysnumero

for(let i :number = 2; i <= numero; i++) {   
	
fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; //Määritellään että Fibonacci on fibonacci i-2 + i-1 

console.log('Vuoden nro' + numero + ' kerroin on ' + fibonacci[i]); //tulostetaan vuosi ja sen fibonacci

}


//En tiedä toimiiko tämä tehtävä halutun lailla, mutta yritin ainakin jotain, en osannut kunnolla