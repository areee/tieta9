"use strict";

let mallinimi = "Essi Esimerkki";
let aloituspisteet = 0;

/* let pelaajanSijainti; */
let pelaaja = { xKoord: 0, yKoord: 0 };

let aarre1 = { xKoord: 0, yKoord: 0 };
let aarre2 = { xKoord: 0, yKoord: 0 };
let aarre3 = { xKoord: 0, yKoord: 0 };
let aarre4 = { xKoord: 0, yKoord: 0 };

let pelaajakuvake = "url('img/player.png')";
let aarrekuvake = "url('img/coin.png')";

let nimialue = document.querySelector("#nimialue");
let nimi = document.querySelector("#nimi");


let pistealue = document.querySelector("#pistealue"); // tarpeeton...?
let pisteet = document.querySelector("#pisteet");


let ylos = document.querySelector("#ylos");
let alas = document.querySelector("#alas");
let vasen = document.querySelector("#vasen");
let oikea = document.querySelector("#oikea");

// nämä voinee poistaa...?
/* let ruutu11 = document.querySelector("#ruutu11");
let ruutu12 = document.querySelector("#ruutu12");
let ruutu13 = document.querySelector("#ruutu13");

let ruutu21 = document.querySelector("#ruutu21");
let ruutu22 = document.querySelector("#ruutu22");
let ruutu23 = document.querySelector("#ruutu23");

let ruutu31 = document.querySelector("#ruutu31");
let ruutu32 = document.querySelector("#ruutu32");
let ruutu33 = document.querySelector("#ruutu33"); */

nimialue.addEventListener('click', vaihdaNimi);
ylos.addEventListener('click', ylosToiminto);
alas.addEventListener('click', alasToiminto);
vasen.addEventListener('click', vasenToiminto);
oikea.addEventListener('click', oikeaToiminto);

function pelinAloitus() {
    // asetukset pelin alkua varten:
    nimi.textContent = mallinimi;
    pisteet.textContent = aloituspisteet + " $";
    /* document.body.style.backgroundColor = "#c72222"; */

    /* ruutu22.style.backgroundColor = "#c72222"; */
    /* ruutu22.textContent = "pöö"; */

    /* pelaajanSijainti = 22; */

    pelaaja.yKoord = 2;
    pelaaja.xKoord = 2;

    /* ruutu22.style.content = pelaajakuvake; */
    // edellistä riviä monipuolisempi versio:
    /* document.querySelector("#ruutu" + pelaajanSijainti).style.content = pelaajakuvake; */
    document.querySelector("#ruutu" + pelaaja.xKoord + pelaaja.yKoord).style.content = pelaajakuvake;

    aarre1.xKoord = 1;
    aarre1.yKoord = 2;

    aarre2.xKoord = 2;
    aarre2.yKoord = 1;

    aarre3.xKoord = 3;
    aarre3.yKoord = 2;

    aarre4.xKoord = 3;
    aarre4.yKoord = 3;

    document.querySelector("#ruutu" + aarre1.xKoord + aarre1.yKoord).style.content = aarrekuvake;
    document.querySelector("#ruutu" + aarre2.xKoord + aarre2.yKoord).style.content = aarrekuvake;
    document.querySelector("#ruutu" + aarre3.xKoord + aarre3.yKoord).style.content = aarrekuvake;
    document.querySelector("#ruutu" + aarre4.xKoord + aarre4.yKoord).style.content = aarrekuvake;

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

    if (pelaaja.xKoord > 1) {
        console.log("ennen ylös: " + pelaajanSijainti());
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = null;

        pelaaja.xKoord -= 1;
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = pelaajakuvake;
        console.log("jälkeen ylös: " + pelaajanSijainti());
    }

}

function alasToiminto() {
    /* pisteet.textContent = "alas"; */

    if (pelaaja.xKoord < 3) {
        console.log("ennen alas: " + pelaajanSijainti());
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = null;

        pelaaja.xKoord += 1;
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = pelaajakuvake;
        console.log("jälkeen alas: " + pelaajanSijainti());
    }
}

/* function pelaajanNykyinenRuutu() {
    return document.querySelector("#ruutu" + pelaajanSijainti).style.content;
} */

function vasenToiminto() {
    /* pisteet.textContent = "vasen"; */

    if (pelaaja.yKoord > 1) {
        console.log("ennen vasen: " + pelaajanSijainti());
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = null;

        pelaaja.yKoord -= 1;
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = pelaajakuvake;
        console.log("jälkeen vasen: " + pelaajanSijainti());
    }
}

function oikeaToiminto() {
    /* pisteet.textContent = "oikea"; */

    if (pelaaja.yKoord < 3) {
        console.log("ennen oikea: " + pelaajanSijainti());
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = null;

        pelaaja.yKoord += 1;
        document.querySelector("#ruutu" + pelaajanSijainti()).style.content = pelaajakuvake;
        console.log("jälkeen oikea: " + pelaajanSijainti());
    }
}

function pelaajanSijainti() {
    return pelaaja.xKoord + "" + pelaaja.yKoord;
}