"use strict";

let pituussyote = document.querySelector("#pituussyote");
let painosyote = document.querySelector("#painosyote");
let laskeBMINappi = document.querySelector("#laskeBMI");
let tuloste = document.querySelector("#tuloste");

laskeBMINappi.addEventListener('click', laskeBMI);

function laskeBMI() {
    let pituusCm = parseFloat(pituussyote.value);
    let painoKg = parseFloat(painosyote.value);
    
    if(!isNaN(pituusCm) && !isNaN(painoKg)){
    let pituusM = pituusCm/100;
    let pituudenNelio = Math.pow(pituusM,2);

    let BMI = painoKg/pituudenNelio;
    let bmiPyoristys = BMI.toFixed(2);

    tuloste.textContent = "BMI on " + bmiPyoristys + ", mikä vastaa " + BMISanallinenTieto(BMI) + ".";
    }else{
        tuloste.textContent = "Täytä kaikki kentät, jotta BMI-arvo voidaan laskea!";
    }

    
}

function BMISanallinenTieto(bmi) {
    if(bmi < 17){
        return "alipainoa";
    }else if(bmi >= 17 && bmi <=18.49){
        return "lievää alipainoa";
    }else if(bmi >= 18.5 && bmi <=24.99){
        return "normaalipainoa";
    }else if(bmi >= 25 && bmi <=29.99){
        return "lievää ylipainoa";
    }else if(bmi >= 30){
        return "ylipainoa";
    }else{
        return "virheellinen BMI";
    }
}