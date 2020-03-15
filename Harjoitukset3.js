1.

import input = require('readline-sync'); //lukija

let name : string; //Määritellään muuttuja etunimi
let name2 : string; //Määritellään muuttuja sukunimi
let age : number; //Määritellään muuttuja ikä
let ajokortti : string //Määritellään muuttuja ajokortti

name = input.question ('Anna etunimesi '); 
//Kysytään etunimi
name2 = input.question ('Anna sukunimesi '); 
//Kysytään sukunimi
age = parseFloat(input.question('Anna ikasi ')); 
//Kysytään ikä
ajokortti = input.question ('Onko sinulla ajokortti(K/E)' ); //Kysytään ajokortti K tai E
	
if (ajokortti == 'K') {
		console.log('Syotetty tiedot asiakkaasta ' + name + ', joka on ' + age + ' vuotta vanha' + ' ,jolla on ajokortti');
		} //Tulostaa tiedot jos on ajokortti
		
	else if (ajokortti == 'E') {
		console.log('Syotetty tiedot asiakkaasta ' + name + ', joka on ' + age + ' vuotta vanha' + ' ,jolla ei ole ajokorttia');
		} //Tulostaa tiedot jos ei ole ajokorttia


2.

import input = require('readline-sync'); //lukija
let arvosana : number; //Määritellään arvosana muuttuja

arvosana = parseFloat (input.question('Anna arvosana (0-5)')); //Kysytään arvosana

switch (arvosana) { // Switch rakenteen avulla ohjelma päättää tulosteen
  case 0 : console.log ('Palaute oli huonoa'); break;
  case 1 : console.log ('Palaute oli kohtalaista'); break;
  case 2 : console.log ('Palaute oli tyydyttavaa'); break;
  case 3 : console.log ('Palaute oli hyvaa'); break;
  case 4 : console.log ('Palaute oli kiitettavaa'); break;
  case 5 : console.log ('Palaute oli erinomaista'); break;
  default: console.log ('Virhe palautteessa, anna arvosana 0-5'); break;
}



3.


import input = require('readline-sync'); //lukija
let kuukausi : number; //Määritellään kuukausi muuttuja

kuukausi = parseFloat (input.question('Anna kuukauden numero (1-12)')); //Kysytään kuukauden numero

switch (kuukausi) { // Switch rakenteen avulla ohjelma päättää tulosteen
  case 1 : console.log ('Tammikuu'); break;
  case 2 : console.log ('Helmikuu'); break;
  case 3 : console.log ('Maaliskuu'); break;
  case 4 : console.log ('Huhtikuu'); break;
  case 5 : console.log ('Toukokuu'); break;
  case 6 : console.log ('Kesakuu'); break;
  case 7 : console.log ('Heinakuu'); break;
  case 8 : console.log ('Elokuu'); break;
  case 9 : console.log ('Syyskuu'); break;
  case 10 : console.log ('Lokakuu'); break;
  case 11 : console.log ('Marraskuu'); break;
  case 12 : console.log ('Joulukuu'); break;
  default: console.log ('Virhe kuukaudessa, anna numero 1-12'); break;
}