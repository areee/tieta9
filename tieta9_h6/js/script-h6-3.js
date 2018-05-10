"use strict";

let lukunappi = document.querySelector("#lukunappi");
let tuloste = document.querySelector("#tuloste");
let sekoitusnappi = document.querySelector("#sekoitusnappi");

let lista;
let syote;
let syoteInt;

lukunappi.addEventListener('click', tuotaTuloste);
sekoitusnappi.addEventListener('click', sekoitaLuvutUudelleen);

function tuotaTuloste() {
    syote = prompt("Anna kokonaisluku", 10); // kysytään käyttäjältä kokonaisluku

    // tarkistetaan, ettei annettu syöte ole tyhjä:
    if (syote != null) {
        // muunnetaan annettu syöte kokonaisluvuksi:
        syoteInt = parseInt(syote);

        // tarkistus, onko syötteessä muita kuin numeroita:
        if (isNaN(syoteInt)) {
            tuloste.textContent = "Antamasi syöte ei ole luku!";
        } else {
            // arvotaan ja tulostetaan luvut annetun maksimiarvon perusteella:
            arvoJaTulostaLuvut(syoteInt);
        }
    } else {
        tuloste.textContent = "Jätit antamatta luvun.";
    }
}

function arvoJaTulostaLuvut(syoteInt) {
    let apu = 0;
    lista = new Array();

    // pyöritetään while-looppia niin kauan, kunnes listassa on syötteen maksimiluvun verran elementtejä:
    while (lista.length < syoteInt) {
        let satunnaisluku = arvoKokonaisluku(1, syoteInt); // ensimmäinen arvonta sisäistä while-looppia varten

        // arvotaan uusi satunnaisluku niin kauan, kunnes se ei ole jo päätynyt listalle:
        while (onListalla(satunnaisluku, lista)) {
            satunnaisluku = arvoKokonaisluku(1, syoteInt);
        }
        lista[apu] = satunnaisluku; // lisätään uusi kokonaisluku listan vapaaseen elementtiin
        apu++; // kasvatetaan apumuuttujaa jokaisella ulomman while-loopin kierroksella seuraavaa listalle lisättävää lukua varten
    }
    tuloste.textContent = "Satunnaislukuja: " + tulostaListaLapi(lista);
}

function arvoKokonaisluku(min, max) {
    //  arvotaan kokonaisluku, joka on annettujen minimi- ja maksimiarvojen välissä (mukaan lukien myös kyseiset arvot):
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onListalla(luku, lista) {
    // käydään lista läpi ja tarkistetaan, onko annettu luku jo lisätty listalle:
    for (let index = 0; index < lista.length; index++) {
        if (luku == lista[index]) {
            return true;
        }
    }
    return false;
}

function tulostaListaLapi(lista) {
    // tulostetaan jokainen listan elementti:
    let tuloste = "";
    for (let index = 0; index < lista.length; index++) {
        tuloste += lista[index] + "\t";
    }
    return tuloste;
}

function sekoitaLuvutUudelleen() {
    if (syoteInt != null) {
        // sekoitetaan luvut uudelleen satunnaiseen järjestykseen ja tulostetaan ne käyttäjälle:
        arvoJaTulostaLuvut(syoteInt);
    } else {
        tuloste.textContent = "Lukua ei ole syötetty! Anna ensin kokonaisluku, jotta voit sekoittaa lukuja.";
    }

}
