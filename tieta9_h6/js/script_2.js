// Aulikki Hyrskykari - Javascript tervehdys
'use strict'

function greetUser() {
  // noudetaan aluksi viittaus p-elementtiin JavaScript muuttujaan greetElem
  let greetElem = document.querySelector("p.greeting");  
  let greetText = "";
  let now = new Date(); // JavaScriptin built-in olio
  let inHours = now.getHours();
    
  if (inHours > 21 || inHours < 1) {
      greetText = 'Good night!';
  } else if (inHours > 18) {
      greetText = 'Good evening!';
  } else if (inHours > 11) {
      greetText = 'Good afternoon!';
  } else if (inHours > 5) {
      greetText = 'Good morning!';
  } else {
      greetText = 'You should be sleeping"';
  }
  // viedään teksti p-elementin sisällöksi
  greetElem.innerHTML = greetText;
}

// ====================================================== 
greetUser();  // kutsutaan funktiota