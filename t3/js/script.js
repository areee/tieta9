let hertat = document.querySelector("#hertat");
let ruudut = document.querySelector("#ruudut");
let ristit = document.querySelector("#ristit");
let padat = document.querySelector("#padat");

let pakka = document.querySelector("#pakka");
let paallimmainen = document.querySelector("#paallimmainen");


let maat = ["HE", "RU", "RI", "PA"];
let numerot = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let kortit = [];
let laskuri = 0;

function lajittele() {
    laskuri = 0;
    kortit = [];

    for (m in maat) {
        let maa = maat[m];
        for (n in numerot) {
            let numero = numerot[n];
            let kortti = {
                maa: maa,
                numero: numero,
                jarjestys: Math.floor(Math.random() * 5200) + 1
            };
            kortit.push(kortti);
        }
    }
    pakka.innerHTML = kortit.length;
    kortit = kortit.sort(function (a, b) {
        return (a.order < b.order ? -1 : 1)
    });
}


lajittele();