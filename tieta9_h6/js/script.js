
'use strict'
// Luodaan kolme muuttujaa
let price;
let quantity;
let total;

// Annetaan arvot hinta- ja maara-muuttujille
price = 5;
quantity = 14;
// lasketaan kokonaishinta
total = price * quantity;

// Haetaan viittaus elementtiin, jolla  id="cost"
let el = document.querySelector('#cost');

//elementin tekstisisalto voidaan asettaa metodilla "textContent"
el.textContent = "Total: $" + total;

/* 
metodilla "innerHTML" voidaan vieda elementin sisalloksi myos
html-koodia sisaltavaa tekstia, mutta silloin pitaa olla varma
etta se ei voi sisatlaa haitallista koodia (ei esimerkiksi suoraan 
kayttajalta saatua syotetta). Olisi voitu siis antaa myos:

el.innerHTML = '$' + total;

*/