// Tehtävä 1


import input = require ('readline-sync') 							 //lukija

let merkki : string  												//määritellään pääohjelman muuttuja

merkki = Vastaus (); 												 //Merkki on sama kuin funktio

console.log (merkki); 												 //tulostus


function Vastaus () : string { 										 //funktio Vastaus

let merkki : string = input.question('Anna vastaus muotoa K/E ');   //Määritellään ja kysytään vastaus
	
return (merkki);   													//Palautetaan funktion vastaus
}


// Tehtävä 2

import input = require ('readline-sync')  	// lukija

let tulostus : string  						//pääohjelman muuttuja

tulostus = Tulostus ();  					//Funktiosta tulee sama kuin pääohjelman muutuja

console.log(tulostus)   					//tulostetaan funktion arvo



function Tulostus (lkm : number = 2 )  {    //Funktio alkaa


let tulostus = '';                        //Tyhjä merkkijono

for (let i : number = 0; i < 2; i++) {    //Kasvatetaan laskuria aina kaheteen saakka
	tulostus += 'Asiaa! ';				  // tulostus = 'Asiaa!'	
}
return (tulostus)						  //Palautetaan funktion tulos
	
}


// Tehtävä 3

import input = require ('readline-sync') 					 //lukija

let summa : number											//summa on numero
summa = NelioSumma ();										//summa = Funktio

console.log(summa.toFixed(2))								//tulostetaan funktion arvo fiksattuna


function NelioSumma () : number {							//funktio alkaa

let summa, summa1, summa2 : number;							//määritellään paikalliset muuttujat
let luku1, luku2 : number 									//^sama

luku1 = parseFloat(input.question('Anna joku luku '));		//kysytään luku1
luku2 = parseFloat(input.question('Anna joku luku '));		//kysytään luku2

summa1 = luku1 * luku1										//ensimmäinen tulo
summa2 = luku2 * luku2										//toinen tulo

summa = summa1 + summa2										//ekan ja tokan tulon summa

return (summa)												//palautetaan funktion arvo

}


// Tehtävä 4

import input = require('readline-sync');  //Lukija

let kerroin: number 					 //kerroin on numero

kerroin = Kertoma ();  					//kerroin = funktio

console.log(kerroin)					//Tulostetaan funktion tulo




function Kertoma () : number  {			//Funktio alkaa

let numero1 : number = 10				//Asetetaan haluttu arvo sitä voi muuttaa tarvittaessa
let i : number							//Määritellään laskuri
let kerroin = 1							//Annetaan kertoimen arvoksi 1

for (i = 10; i >= 1; i--) {				//Laskuri
	
	kerroin *= i;						//Kertolasku 
}
return(kerroin)							//palautetaan funktion arvo
}
	