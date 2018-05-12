"use strict";

let nimi = "Essi Esimerkki";
let pisteet = 0;

/* let pelaajanSijainti; */
let pelaaja = { yKoord: 0, xKoord: 0 };

let aarre1 = { yKoord: 0, xKoord: 0 };
let aarre2 = { yKoord: 0, xKoord: 0 };
let aarre3 = { yKoord: 0, xKoord: 0 };
let aarre4 = { yKoord: 0, xKoord: 0 };

// edelliset simppelimmässä muodossa:
let aarteet = [aarre1, aarre2, aarre3, aarre4];

let pelaajakuvake = "url('img/player.png')";
let aarrekuvake = "url('img/coin.png')";

let nimialue = document.querySelector("#nimialue");
let nimiSpan = document.querySelector("#nimi");


/* let pistealue = document.querySelector("#pistealue"); // tarpeeton...? */
let pisteetSpan = document.querySelector("#pisteet");


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
ylos.addEventListener('click', siirryYlospain);
alas.addEventListener('click', siirryAlaspain);
vasen.addEventListener('click', siirryVasemmallepain);
oikea.addEventListener('click', siirryOikeallepain);

function pelinAloitus() {
    // asetukset pelin alkua varten:
    nimiSpan.textContent = nimi;
    pisteetSpan.textContent = tulostaPisteet();
    /* document.body.style.backgroundColor = "#c72222"; */

    /* ruutu22.style.backgroundColor = "#c72222"; */
    /* ruutu22.textContent = "pöö"; */

    /* pelaajanSijainti = 22; */

    pelaaja.yKoord = 2;
    pelaaja.xKoord = 2;

    /* ruutu22.style.content = pelaajakuvake; */
    // edellistä riviä monipuolisempi versio:
    /* document.querySelector("#ruutu" + pelaajanSijainti).style.content = pelaajakuvake; */
    document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

    // aarteiden sijaintien asettaminen:
    aarre1.yKoord = 1;
    aarre1.xKoord = 2;

    aarre2.yKoord = 2;
    aarre2.xKoord = 1;

    aarre3.yKoord = 3;
    aarre3.xKoord = 2;

    aarre4.yKoord = 3;
    aarre4.xKoord = 3;

    // toteuta ruudukkoon aarteiden sijainnit:
    for (let index = 0; index < aarteet.length; index++) {
        document.querySelector(aarreRuudukossa(index)).style.content = aarrekuvake; // suorittaa saman kuin alla oleva
    }

    /* document.querySelector("#ruutu" + aarre1.xKoord + aarre1.yKoord).style.content = aarrekuvake;
    document.querySelector("#ruutu" + aarre2.xKoord + aarre2.yKoord).style.content = aarrekuvake;
    document.querySelector("#ruutu" + aarre3.xKoord + aarre3.yKoord).style.content = aarrekuvake;
    document.querySelector("#ruutu" + aarre4.xKoord + aarre4.yKoord).style.content = aarrekuvake; */

    /* console.log(aarteet[0].xKoord);
    console.log(aarteet[1]);
    console.log(aarteet); */

}

function aarreRuudukossa(index) {
    return "#ruutu" + aarteet[index].yKoord + aarteet[index].xKoord;
}

function pelaajaRuudukossa() {
    return "#ruutu" + pelaaja.yKoord + pelaaja.xKoord;
}

function siirryYlospain() {

    if (pelaaja.yKoord > 1) { // tarkistetaan, ettei olla ruudukon ylärivillä
        console.log("ennen ylös: " + pelaajaRuudukossa()); // pelaajanSijainti()
        document.querySelector(pelaajaRuudukossa()).style.content = null; // "#ruutu" + pelaajanSijainti()

        pelaaja.yKoord--;
        console.log("jälkeen ylös: " + pelaajaRuudukossa()); // pelaajanSijainti()
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake; // pelaajanSijainti

        tarkistaOsuma();
    }
}

function siirryAlaspain() {

    if (pelaaja.yKoord < 3) { // tarkistetaan, ettei olla ruudukon alarivillä
        console.log("ennen alas: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        pelaaja.yKoord++;
        console.log("jälkeen alas: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
}

/* function pelaajanNykyinenRuutu() {
    return document.querySelector("#ruutu" + pelaajanSijainti).style.content;
} */

function siirryVasemmallepain() {

    if (pelaaja.xKoord > 1) { // tarkistetaan, ettei olla ruudukon äärivasemmalla pystyrivillä
        console.log("ennen vasen: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        pelaaja.xKoord--;
        console.log("jälkeen vasen: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
}

function siirryOikeallepain() {

    if (pelaaja.xKoord < 3) { // tarkistetaan, ettei olla ruudukon äärioikealla pystyrivillä
        console.log("ennen oikea: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        pelaaja.xKoord++;
        console.log("jälkeen oikea: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
}

function onkoAarreRuudussa() {
    // jos siirron jälkeen pelaajan x-koordinaatti ja y-koordinaatti ovat samat kuin jonkin aarteista, palauta true; jos ei, palauta false
    for (let index = 0; index < aarteet.length; index++) {
        let x = aarteet[index].xKoord;
        let y = aarteet[index].xKoord2;
        if (pelaaja.yKoord == y && pelaaja.xKoord == x) {
            aarteet[index].xKoord = 0;
            aarteet[index].yKoord = 0;
            return true;
        }
    }
    return false;
}

function vaihdaNimi() {
    let syote = prompt("Syötä uusi nimi:");
    // ehto: syote ei saa olla tyhjä ja syotteen tulee olla vähintään 2 merkkiä
    if (syote != null && syote.length >= 2) {
        nimiSpan.textContent = syote;
    }
}

function tarkistaOsuma() {
    if (!onkoAarreRuudussa) {
        console.log("löytyi!");
        pisteet += 100;
        pisteetSpan.textContent = tulostaPisteet();
    }
    else {
        console.log("ohi!");
    }
}

function tulostaPisteet() {
    return pisteet + " $";
}

function pelaajanSijainti() { // voinee poistaa?
    return pelaaja.yKoord + "" + pelaaja.xKoord;
}