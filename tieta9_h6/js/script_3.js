// haetaan viittaukset syote-elementtiin, painikkeeseen ja
// kappaleeseen, johon viedään tervehdysteksti  
let inputfield = document.querySelector("#textBox");
let greetbutton = document.querySelector("#greetButton");
let outputmsg =  document.querySelector("#outputMessage");

// Kiinnitetaan tapahtumankuuntelijafunktio painikkeeseen
greetbutton.addEventListener('click',displayGreeting);

// esitellaan tapahtumankuuntelijafunktio
function displayGreeting() {
	// muuta kappale-elementin textContent 
	outputmsg.textContent = "Hello " + inputfield.value + "!";
	
}
