"use strict";

let nimialue = document.querySelector("#nimialue");
let nimi = document.querySelector("#nimi");

nimi.textContent = "Kaija Koo";

let pistealue = document.querySelector("#pistealue");
let pisteet = document.querySelector("#pisteet");

pisteet.textContent = "0$";

let ylos = document.querySelector("#ylos");
let alas = document.querySelector("#alas");
let vasen = document.querySelector("#vasen");
let oikea = document.querySelector("#oikea");

nimialue.addEventListener('click', vaihdaNimi);

ylos.addEventListener('click', ylosToiminto);
alas.addEventListener('click', alasToiminto);
vasen.addEventListener('click', vasenToiminto);
oikea.addEventListener('click', oikeaToiminto);

function vaihdaNimi() {
    let syote = prompt("Syötä uusi nimi:");
    // ehto: syote ei saa olla tyhjä ja syotteen tulee olla vähintään 2 merkkiä
    if (syote != null && syote.length >= 2) {
        nimi.textContent = syote;
    }
}

function ylosToiminto() {
    pisteet.textContent = "ylös";
}

function alasToiminto() {
    pisteet.textContent = "alas";
}

function vasenToiminto() {
    pisteet.textContent = "vasen";
}

function oikeaToiminto() {
    pisteet.textContent = "oikea";
}