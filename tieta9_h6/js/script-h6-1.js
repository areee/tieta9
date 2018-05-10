"use strict";

let kieliasetus = document.querySelector("#kieliasetus");
let klonappi = document.querySelector("#klonappi");
let pvmnappi = document.querySelector("#pvmnappi");
let tuloste = document.querySelector("#tuloste");

let tamaPvm;

let paiva;
let viikonpaiva;
let kuukausi;

let tunnit;
let minuutit;
let sekunnit;

let kieli;

let ajastin;

let kuukaudetFin = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
let kuukaudetEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let vkonpvtFin = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
let vkonpvtEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

kieliasetus.addEventListener('change', vaihdaKielta);
klonappi.addEventListener('click', naytaAika);
pvmnappi.addEventListener('click', naytaPvm);


function vaihdaKielta() {
    clearInterval(ajastin); // pysäyttää kellon päivittymisen (extra-toiminto, ei vaadittu tehtävänannossa)
    tarkistaKieliJaPvm();
    tuloste.textContent = null; // tyhjennetään tuloste-rivi kielen vaihtamisen yhteydessä

    switch (kieli) {
        case "suomi":
            klonappi.textContent = "Näytä aika";
            pvmnappi.textContent = "Näytä päivä";
            break;
        case "englanti":
            klonappi.textContent = "Show time";
            pvmnappi.textContent = "Show day";
            break;
        default:
            klonappi.textContent = "Error";
            pvmnappi.textContent = "Error";
    }
}

function naytaAika() {
    clearInterval(ajastin); // pysäyttää kellon päivittymisen (extra-toiminto, ei vaadittu tehtävänannossa)

    tarkistaKieliJaPvm();

    tunnit = lisaaEtunolla(tamaPvm.getHours());
    minuutit = lisaaEtunolla(tamaPvm.getMinutes());
    sekunnit = lisaaEtunolla(tamaPvm.getSeconds());

    switch (kieli) {
        case "suomi":
            tuloste.textContent = "Kello on nyt: " + tunnit + ":" + minuutit + ":" + sekunnit;
            // aseta ajastin päivittämään kello yhden sekunnin välein (ks. https://www.w3schools.com/js/js_timing.asp):
            ajastin = setTimeout(naytaAika, 1000); // extra-toiminto, ei vaadittu tehtävänannossa
            break;
        case "englanti":
            tuloste.textContent = "Time is now: " + tunnit + ":" + minuutit + ":" + sekunnit;
            // aseta ajastin päivittämään kello yhden sekunnin välein:
            ajastin = setTimeout(naytaAika, 1000); // extra-toiminto, ei vaadittu tehtävänannossa
            break;
        default:
            tuloste.textContent = "Error: null value!";
    }
}

function lisaaEtunolla(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function naytaPvm() {
    clearInterval(ajastin); // pysäyttää kellon päivittymisen (extra-toiminto, ei vaadittu tehtävänannossa)

    tarkistaKieliJaPvm();

    viikonpaiva = tamaPvm.getDay();
    paiva = tamaPvm.getDate();
    kuukausi = tamaPvm.getMonth();

    switch (kieli) {
        case "suomi":
            tuloste.textContent = "Tänään on: " + vkonpvtFin[viikonpaiva] + ", " + paiva + ". " + kuukaudetFin[kuukausi] + "ta";
            break;
        case "englanti":
            tuloste.textContent = "Today is: " + vkonpvtEng[viikonpaiva] + ", " + paiva + " " + kuukaudetEng[kuukausi];
            break;
        default:
            tuloste.textContent = "Error: null value!";
    }
}

function tarkistaKieliJaPvm() {
    kieli = kieliasetus.value;
    tamaPvm = new Date();
}
