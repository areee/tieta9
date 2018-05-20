"use strict";

let nimi = "Essi Esimerkki";
let pisteet = 0;

let pelaaja = { korkeus: 0, leveys: 0 };

let aarre1 = { korkeus: 0, leveys: 0 };
let aarre2 = { korkeus: 0, leveys: 0 };
let aarre3 = { korkeus: 0, leveys: 0 };
let aarre4 = { korkeus: 0, leveys: 0 };

// viedään aarteet kokoavaan taulukkoon:
let aarteet = [aarre1, aarre2, aarre3, aarre4];

let pelaajakuvake = "url('img/pelaaja.png')";
let aarrekuvake = "url('img/aarre.png')";

let nimialue = document.querySelector("#nimialue");
let nimiSpan = document.querySelector("#nimi");

let pisteetSpan = document.querySelector("#pisteet");


let ylos = document.querySelector("#ylos");
let alas = document.querySelector("#alas");
let vasen = document.querySelector("#vasen");
let oikea = document.querySelector("#oikea");

nimialue.addEventListener('click', vaihdaNimi);
ylos.addEventListener('click', siirryYlospain);
alas.addEventListener('click', siirryAlaspain);
vasen.addEventListener('click', siirryVasemmallepain);
oikea.addEventListener('click', siirryOikeallepain);

window.addEventListener('keydown', jokinNappainPainettu);

function jokinNappainPainettu(e) {
    switch (e.key) {
        case "ArrowUp":
            siirryYlospain();
            break;
        case "ArrowDown":
            siirryAlaspain();
            break;
        case "ArrowLeft":
            siirryVasemmallepain();
            break;
        case "ArrowRight":
            siirryOikeallepain();
            break;
        default:
            break;
    }
}

function pelinAloitus() {
    // asetukset pelin alkua varten:
    nimiSpan.textContent = nimi;
    pisteetSpan.textContent = tulostaPisteet();
    document.body.style.backgroundColor = "#ffc107";

    pelaaja.korkeus = 2;
    pelaaja.leveys = 2;

    document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

    // aarteiden sijaintien asettaminen:
    aarre1.korkeus = 1;
    aarre1.leveys = 2;

    aarre2.korkeus = 2;
    aarre2.leveys = 1;

    aarre3.korkeus = 3;
    aarre3.leveys = 2;

    aarre4.korkeus = 3;
    aarre4.leveys = 3;

    // toteuta ruudukkoon aarteiden sijainnit:
    for (let index = 0; index < aarteet.length; index++) {
        document.querySelector(aarreRuudukossa(index)).style.content = aarrekuvake; // suorittaa saman kuin alla oleva
    }
}

function aarreRuudukossa(index) {
    return "#ruutu" + aarteet[index].korkeus + aarteet[index].leveys;
}

function pelaajaRuudukossa() {
    return "#ruutu" + pelaaja.korkeus + pelaaja.leveys;
}

function siirryYlospain() {

    if (pelaaja.korkeus > 1) { // tarkistetaan, ettei olla ruudukon ylärivillä
        console.log("ennen ylös: " + pelaajaRuudukossa());
        // asetetaan pelaajakuvake pois poissiirryttävästä ruudusta:
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        // korkeus-arvo pienennee, kun siirrytään ylöspäin:
        pelaaja.korkeus--;
        console.log("jälkeen ylös: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
    // else: voisi tulla virheviesti "ei voida poistua ruudukosta" (sama else voisi olla myös muissa siirtymäfunktioissa)
}

function siirryAlaspain() {

    if (pelaaja.korkeus < 3) { // tarkistetaan, ettei olla ruudukon alarivillä
        console.log("ennen alas: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        pelaaja.korkeus++;
        console.log("jälkeen alas: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
}

function siirryVasemmallepain() {

    if (pelaaja.leveys > 1) { // tarkistetaan, ettei olla ruudukon äärivasemmalla pystyrivillä
        console.log("ennen vasen: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        pelaaja.leveys--;
        console.log("jälkeen vasen: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
}

function siirryOikeallepain() {

    if (pelaaja.leveys < 3) { // tarkistetaan, ettei olla ruudukon äärioikealla pystyrivillä
        console.log("ennen oikea: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = null;

        pelaaja.leveys++;
        console.log("jälkeen oikea: " + pelaajaRuudukossa());
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;

        tarkistaOsuma();
    }
}

function onkoAarreRuudussa() {
    /* jos siirron jälkeen pelaajan x-koordinaatti ja y-koordinaatti ovat samat kuin 
    jonkin aarteista, palauta true; jos ei, palauta false */
    for (let index = 0; index < aarteet.length; index++) {
        let leveys = aarteet[index].leveys;
        let korkeus = aarteet[index].korkeus;
        if (pelaaja.korkeus == korkeus && pelaaja.leveys == leveys) {
            aarteet[index].leveys = 0;
            aarteet[index].korkeus = 0;
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
    } else {
        alert("Ei voitu vaihtaa nimeä. \nUuden nimen vähimmäispituus on kaksi merkkiä.");
    }
}

function tarkistaOsuma() {
    if (onkoAarreRuudussa()) {
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
