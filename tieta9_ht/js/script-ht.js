"use strict";

let nimialue = document.querySelector("#nimialue");
let nimi = document.querySelector("#nimi");

nimi.textContent = "Anna Puu";

let pistealue = document.querySelector("#pistealue");
let pisteet = document.querySelector("#pisteet");

pisteet.textContent = "0";

let ylos = document.querySelector("#ylos");
let alas = document.querySelector("#alas");
let vasen = document.querySelector("#vasen");
let oikea = document.querySelector("#oikea");

nimialue.addEventListener('click', vaihdaNimi);
/* ylos.addEventListener('click', ylosToiminto); */
/* alas.addEventListener('click', alasToiminto); */
/* vasen.addEventListener('click', vasenToiminto); */
/* oikea.addEventListener('click', oikeaToiminto); */

function vaihdaNimi() {
    let syote = prompt("Nimi", "Elli Esimerkki");
    // ehto: syotteen tulee olla vähintään 2 merkkiä
    nimi.textContent = syote;
}