"use strict";

let mallinimi = "Essi Esimerkki";
let aloituspisteet = 0;
let pelaajanSijainti;
let pelaajakuvake = "url('img/player.png')";
let aarrekuvake = "url('img/coin.png')";

let nimialue = document.querySelector("#nimialue");
let nimi = document.querySelector("#nimi");


let pistealue = document.querySelector("#pistealue");
let pisteet = document.querySelector("#pisteet");


let ylos = document.querySelector("#ylos");
let alas = document.querySelector("#alas");
let vasen = document.querySelector("#vasen");
let oikea = document.querySelector("#oikea");

let ruutu11 = document.querySelector("#ruutu11");
let ruutu12 = document.querySelector("#ruutu12");
let ruutu13 = document.querySelector("#ruutu13");

let ruutu21 = document.querySelector("#ruutu21");
let ruutu22 = document.querySelector("#ruutu22");
let ruutu23 = document.querySelector("#ruutu23");

let ruutu31 = document.querySelector("#ruutu31");
let ruutu32 = document.querySelector("#ruutu32");
let ruutu33 = document.querySelector("#ruutu33");

nimialue.addEventListener('click', vaihdaNimi);
ylos.addEventListener('click', ylosToiminto);
alas.addEventListener('click', alasToiminto);
vasen.addEventListener('click', vasenToiminto);
oikea.addEventListener('click', oikeaToiminto);

function pelinAloitus() {

    // asetukset pelin alkua varten:
    nimi.textContent = mallinimi;
    pisteet.textContent = aloituspisteet + " $";
    document.body.style.backgroundColor = "#c72222";

    /* ruutu22.style.backgroundColor = "#c72222"; */
    /* ruutu22.textContent = "pöö"; */
    pelaajanSijainti = 22;
    ruutu22.style.content = pelaajakuvake;
    /* TODO: lisää aarrekuvakkeet tähän alle */
}

function vaihdaNimi() {
    let syote = prompt("Syötä uusi nimi:");
    // ehto: syote ei saa olla tyhjä ja syotteen tulee olla vähintään 2 merkkiä
    if (syote != null && syote.length >= 2) {
        nimi.textContent = syote;
    }
}

function ylosToiminto() {
    /* pisteet.textContent = "ylös"; */

    if (pelaajanSijainti >= 21) {
        pelaajanSijainti -= 10;
    }

}

function alasToiminto() {
    /* pisteet.textContent = "alas"; */
}

function vasenToiminto() {
    /* pisteet.textContent = "vasen"; */
}

function oikeaToiminto() {
    /* pisteet.textContent = "oikea"; */
}