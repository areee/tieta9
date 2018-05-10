'use strict'
// Muutetaan edellinen esimerkki käyttämään talukkoa, jolloin
//  sivulla voisi olla input-elementteja miten monta tahansa

// haetaan kaikki input elementit elCollection-muuttujaan
// JavaScriptiin, painikkeet btns-muuttujaan ja tyhja 
// kappale viestiEL-muttujaan 
// Useita elementteja sisaltavat muuttujat ovat taulukonomaisoa
// "HTMLCollection" muuttujia
let elCollection = document.querySelectorAll("input");
let btns = document.querySelectorAll("button");
let viestiEl = document.querySelector("#output");

// liitetaan painikkeisiin tapahtumankasittelija-funtiot
btns[0].addEventListener('click', naytaMinArvo);
btns[1].addEventListener('click', naytaMaxArvo);

// tallennetaan input-elementtien sisallot taulukkoon
let kaikkiArvot = new Array();

// Noudetaan arvot taulukkoon kaikkiArvot
function haeArvot() {
	for (let i = 0; i < elCollection.length; i++) {
		kaikkiArvot[i] = parseInt(elCollection[i].value);
		if (isNaN(kaikkiArvot[i])) {
			viestiEl.textContent = "Kaikki antamasi arvot eivät olleet lukuja";
			return false;
		}
	}
	// taulukon sort-metodi tekee oletuksena akkostuksen, jos lajittelu 
	// halutaan luvuille, tulee antaa parametrina vertailufunktio, ks.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	kaikkiArvot.sort(function (a, b) { return a - b });
	return true;
}

function naytaMaxArvo() {
	let arvotOK = haeArvot();
	// kaydaan hakemassa input-elementtien nykyiset sisallöt
	if (arvotOK) {
		viestiEl.textContent = "Maksimi on " + kaikkiArvot[kaikkiArvot.length - 1];
	}
	else 
	viestiEl.textContent = "Kaikki arvot eivät ole lukuja";
}

function naytaMinArvo() {
	let arvotOK = haeArvot();
	// kaydaan hakemassa input-elementtien nykyiset sisallöt
	if (arvotOK) {
		viestiEl.textContent = "Minimi on " + kaikkiArvot[0];
	}
	else 
	viestiEl.textContent = "Kaikki arvot eivät ole lukuja";
}
