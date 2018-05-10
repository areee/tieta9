// noudetaan viittaukset input-elementteihin 
// JavaScript muuttujiin
let selHedelmaEl = document.querySelector("#hedelmaLista");
let naytaBtnEl = document.querySelector("#naytaBtn");
let outputEl =  document.querySelector("#output");

// lisataan painikkeelle tapantumankuuntelijafunktio
naytaBtnEl.addEventListener('click',displayGreeting);

// tapahtumankuuntelijafunktio
function displayGreeting() {
	outputEl.textContent = selHedelmaEl.value;
}
