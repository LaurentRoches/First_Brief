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

//Fermeture du menu burger
let fermerMenu = () => {
  let input = document.getElementById('menu-cb');
  input.checked = false ;
  let fenetreNode = document.getElementById('menu-cote');
  fenetreNode.remove();
}
let changerEtatMenu = () => {
  let input = document.getElementById('menu-cb');
  let actif = input.checked;
  if (actif){
    let fenetreNode = document.createElement('div');
    fenetreNode.id = 'menu-cote';
    fenetreNode.className ='menu-cote';
    fenetreNode.addEventListener('click', fermerMenu);
    document.body.appendChild(fenetreNode);
  } else {
    let fenetreNode = document.getElementById('menu-cote');
    fenetreNode.remove();
  }
}
let input = document.getElementById('menu-cb');
input.addEventListener('click', changerEtatMenu);

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