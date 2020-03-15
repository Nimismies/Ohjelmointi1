import input = require('readline-sync') //Määritellään lukija

	let name : string; //Määritellään muuttuja etunimi
	let name2 : string; //Määritellään muuttuja sukunimi
	let age : number; //Määritellään muuttuja ikä

	name = input.question ('Anna etunimesi '); //Kysytään etunimi
	name2 = input.question ('Anna sukunimesi '); //Kysytään sukunimi
	age = parseFloat(input.question('Anna ikasi ')); //Kysytään ikä

	console.log("Syotetty tiedot asiakkaasta " + name + name2 + ", joka on " + age); //Console.log tulostaa asiakkaan teidot halutunlaisesti

__________________________________________________________________________________________________________________________________________________

import input = require('readline-sync') //Määritellään lukija

	let paino : number; //määritellään paino muuttuja
	let pituus : number; //määritellään pituus muuttuja
	let painoindexi : number; //määritellään painoindexi muuttuja

	paino = parseFloat(input.question('Syota paino ')); //Kysytään paino
	pituus = parseFloat(input.question('Syota pituus ')); //Kysytään pituus

	painoindexi = (paino / (pituus * pituus)); //painoindexi muuttuja laskee painoindexin

	console.log(painoindexi);

___________________________________________________________________________________________________________________________________________________

import input = require('readline-sync') //Määritellään lukija

	let nettohinta : number; //nettohinta muuttuja	
	let alv : number; //alv muuttuja

	nettohinta = parseFloat(input.question('Syota nettohinta ')); //kysytään nettohinta
	alv = parseFloat(input.question('Syota alv ')); //kysytään alv

	let bruttohinta : number; //määritellään bruttohinta muuttuja
	bruttohinta = (nettohinta + (nettohinta * alv / 100)); //lasketaan bruttohinta

	console.log(bruttohinta);