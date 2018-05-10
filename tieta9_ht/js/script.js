

'use strict'
// haetaan viittaukset painikkeeseen ja
// kappaleeseen, johon viedään tervehdysteksti  
let greetbutton = document.querySelector("#greetButton");
let outputmsg =  document.querySelector("#outputMessage");

// Kiinnitetaan tapahtumankuuntelijafunktio painikkeeseen
greetbutton.addEventListener('click',displayGreeting);

// esitellaan tapahtumankuuntelijafunktio
function displayGreeting() {
    // prompt palautta merkkijonon annetun merkkijonon (jos painettiin' ok')
    // tai arvon null (jos painettiin 'cancel')
    let inputText = prompt("Anna nimesi", "Ella Esimerkki");
    if (inputText!=null) {
	// liitetaan kappale-elementtiin tekstsisisaltoö textContent ominaisuudella 
        outputmsg.textContent = "Hei " + inputText + "!";
    } else {
        outputmsg.textContent = "Hei kuitenkin vaikka et halua kertoa nimeäsi."
    }

	
}