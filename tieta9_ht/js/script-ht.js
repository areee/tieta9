"use strict";

let nimi = "Essi Esimerkki";
let pisteet = 0;

let pelaaja = { korkeus: 0, leveys: 0 };

let aarre0 = { korkeus: 0, leveys: 0, arvo: 100 };
let aarre1 = { korkeus: 0, leveys: 0, arvo: 150 };
let aarre2 = { korkeus: 0, leveys: 0, arvo: 300 };
let aarre3 = { korkeus: 0, leveys: 0, arvo: 500 };

// Viedaan aarteet kokoavaan taulukkoon:
let aarteet = [aarre0, aarre1, aarre2, aarre3];

// Pelaajan ja aarteiden maarittavat kuvakkeet:
let pelaajakuvake = "url('img/pelaaja.png')";

let aarrekuvake0 = "url('img/aarre0.png')";
let aarrekuvake1 = "url('img/aarre1.png')";
let aarrekuvake2 = "url('img/aarre2.png')";
let aarrekuvake3 = "url('img/aarre3.png')";

let aarrekuvakkeet = [aarrekuvake0, aarrekuvake1, aarrekuvake2, aarrekuvake3];

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
vasen.addEventListener('click', siirryVasemmallePain);
oikea.addEventListener('click', siirryOikeallePain);

// Painikkeiden lisaksi liikkuminen mahdollista myos nappaimiston nuolinappaimilla:
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
            siirryVasemmallePain();
            break;
        case "ArrowRight":
            siirryOikeallePain();
            break;
        default:
            break;
    }
}

// Asetukset pelin alkua varten:
function pelinAloitus() {

    nimiSpan.textContent = nimi;
    pisteetSpan.textContent = tulostaPisteet();
    document.body.style.backgroundColor = "#ffc107";

    // Asetetaan pelaajan sijainti pelin alussa:
    pelaaja.korkeus = 2;
    pelaaja.leveys = 2;

    // Asetetaan pelaajan kuvake nakymaan:
    pelaajakuvakkeenAsetus(true);

    // Asetetaan aarteiden sijainnit pelin alussa:
    aarre0.korkeus = 1;
    aarre0.leveys = 2;

    aarre1.korkeus = 2;
    aarre1.leveys = 1;

    aarre2.korkeus = 3;
    aarre2.leveys = 2;

    aarre3.korkeus = 3;
    aarre3.leveys = 3;

    // Asetetaan aarteiden kuvakkeet nakymaan:
    for (let index = 0; index < aarteet.length; index++) {
        aarrekuvakkeenAsetus(index);
    }
}

function aarreRuudukossa(index) {
    return "#ruutu" + aarteet[index].korkeus + aarteet[index].leveys;
}

function pelaajaRuudukossa() {
    return "#ruutu" + pelaaja.korkeus + pelaaja.leveys;
}

function vaihdaNimi() {
    let syote = prompt("Syötä uusi nimi:");
    // Ehto: syote ei saa olla tyhja ja syotteen tulee olla vahintaan 2 merkkia
    if (syote != null && syote.length >= 2) {
        nimiSpan.textContent = syote;
    } else {
        alert("Ei voitu vaihtaa nimeä. \nUuden nimen vähimmäispituus on kaksi merkkiä.");
    }
}

function siirryYlospain() {
    // Tarkistetaan, ettei pelaaja ole ruudukon ylarivilla:
    if (pelaaja.korkeus > 1) {

        // Asetetaan pelaajan kuvake pois nakyvista:
        pelaajakuvakkeenAsetus(false);

        // Pelaajan korkeus-arvo pienenee, kun siirrytaan ylospain:
        pelaaja.korkeus--;

        // Asetetaan pelaajan kuvake nakymaan:
        pelaajakuvakkeenAsetus(true);

        // Tarkistetaan, osuttiinko aarteen kanssa samaan ruutuun:
        tarkistaOsuma();
    }
    // Else: voisi tulla virheviesti "ei voida poistua ruudukosta" (sama else voisi olla myos muissa siirtymisfunktioissa)
}



function siirryAlaspain() {
    // Tarkistetaan, ettei pelaaja ole ruudukon alarivilla:
    if (pelaaja.korkeus < 3) {

        // Asetetaan pelaajan kuvake pois nakyvista:
        pelaajakuvakkeenAsetus(false);

        // Pelaajan korkeus-arvo kasvaa, kun siirrytaan alaspain:
        pelaaja.korkeus++;

        // Asetetaan pelaajan kuvake nakymaan:
        pelaajakuvakkeenAsetus(true);

        // Tarkistetaan, osuttiinko aarteen kanssa samaan ruutuun:
        tarkistaOsuma();
    }
}

function siirryVasemmallePain() {
    // Tarkistetaan, ettei pelaaja ole ruudukon aarivasemmalla pystyrivilla:
    if (pelaaja.leveys > 1) {

        // Asetetaan pelaajan kuvake pois nakyvista:
        pelaajakuvakkeenAsetus(false);

        // Pelaajan leveys-arvo pienenee, kun siirrytaan vasemmalle pain:
        pelaaja.leveys--;

        // Asetetaan pelaajan kuvake nakymaan:
        pelaajakuvakkeenAsetus(true);

        // Tarkistetaan, osuttiinko aarteen kanssa samaan ruutuun:
        tarkistaOsuma();
    }
}

function siirryOikeallePain() {

    // Tarkistetaan, ettei pelaaja ole ruudukon aarioikealla pystyrivilla:
    if (pelaaja.leveys < 3) {

        // Asetetaan pelaajan kuvake pois nakyvista:
        pelaajakuvakkeenAsetus(false);

        // Pelaajan leveys-arvo kasvaa, kun siirrytaan oikealle pain:
        pelaaja.leveys++;

        // Asetetaan pelaajan kuvake nakymaan:
        pelaajakuvakkeenAsetus(true);

        // Tarkistetaan, osuttiinko aarteen kanssa samaan ruutuun:
        tarkistaOsuma();
    }
}

function pelaajakuvakkeenAsetus(arvo) {
    // Jos arvo === true, asetetaan pelaajakuvake, muuten poistetaan kuvake:
    if (arvo) {
        document.querySelector(pelaajaRuudukossa()).style.content = pelaajakuvake;
    } else {
        document.querySelector(pelaajaRuudukossa()).style.content = null;
    }
}

function aarrekuvakkeenAsetus(index) {
    document.querySelector(aarreRuudukossa(index)).style.content = aarrekuvakkeet[index];
}

function tarkistaOsuma() {
    // Jos aarre on samassa ruudukossa, kasvatetaan pisteita ja naytetaan pisteet pistealueella:
    if (onkoAarreRuudussa()) {
        asetaPisteet();
    }
}

function asetaPisteet() {
    pisteetSpan.textContent = tulostaPisteet();
}

function onkoAarreRuudussa() {
    /* Jos siirron jalkeen pelaajan korkeus ja leveys ovat samat kuin jonkin aarteista,
    nollataan aarteen sijainti, asetetaan pisteet ja palautetaan true.
    Muussa tapauksessa palautetaan false: */
    for (let index = 0; index < aarteet.length; index++) {
        let aarteenLeveys = aarteet[index].leveys;
        let aarteenKorkeus = aarteet[index].korkeus;
        if (pelaaja.korkeus == aarteenKorkeus && pelaaja.leveys == aarteenLeveys) {
            annaPisteet(index);
            nollaaAarteenSijainti(index);
            return true;
        }
    }
    return false;
}

function annaPisteet(index) {
    // Annetaan pisteita sen mukaan, mika aarre ruudussa on:
    pisteet += aarteet[index].arvo;
}

function nollaaAarteenSijainti(index) {
    aarteet[index].leveys = 0;
    aarteet[index].korkeus = 0;
}

function mikaAarreOnRuudussa() {
    for (let index = 0; index < aarteet.length; index++) {

    }
}

function tulostaPisteet() {
    return pisteet + " $";
}

// Laitetaan peli kayntiin:
pelinAloitus();