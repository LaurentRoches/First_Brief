// Faire apparaitre le bouton de retour au top
let retourTop = document.getElementById ('retourTop');

window.addEventListener ("scroll", boutonRetour);

function boutonRetour (){
    if (window.scrollY > 500){
        retourTop.classList.replace("invisible" , "visible");
    } else {
        retourTop.classList.replace("visible" , "invisible");
    }
}


//Switch entre Dark et light mode
let checkboxValue = 'on';
let checkbox = document.querySelector('.checkbox');
let bgColor = document.querySelector('.bgColor');
let bgColorMilieu = document.querySelector('.bgColorMilieu');
checkbox.addEventListener('click', checkValue);

function checkValue() {
  if (checkboxValue === 'on') {
    checkboxValue = 'off';
    bgColor.classList.replace("lightMode", "darkMode");
    bgColorMilieu.classList.replace("lightModeMilieu", "darkModeMilieu");
  } else {
    checkboxValue = 'on'
    bgColor.classList.replace("darkMode", "lightMode");
    bgColorMilieu.classList.replace("darkModeMilieu", "lightModeMilieu");
  }
}