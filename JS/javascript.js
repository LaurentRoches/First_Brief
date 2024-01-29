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


// Traduction du site

let checkboxValueLangue = 'on';
let checkboxLangue = document.querySelector('.checkboxLangue');
let trad1 = document.getElementById('trad1');
let tradContact1 = document.getElementById ('tradContact1');
let tradContact2 = document.getElementById ('tradContact2');
let trad2 = document.getElementById('trad2');
let tradBouton1 = document.getElementById('tradBouton1');
let tradBouton2 = document.getElementById('tradBouton2');
let tradBouton3 = document.getElementById('tradBouton3');
let trad3 = document.getElementById('trad3');
let trad4 = document.getElementById('trad4');
let trad5 = document.getElementById('trad5');
let trad6 = document.getElementById('trad6');
let trad7 = document.getElementById('trad7');
let trad8 = document.getElementById('trad8');
let trad9 = document.getElementById('trad9');
let trad10 = document.getElementById('trad10');
let trad11 = document.getElementById('trad11');
let trad12 = document.getElementById('trad12');
let trad13 = document.getElementById('trad13');
let trad14 = document.getElementById('trad14');
let trad15 = document.getElementById('trad15');


checkboxLangue.addEventListener('click', checkTrad);

function checkTrad() {
  if (checkboxValueLangue === 'on') {
    checkboxValueLangue = 'off';
    trad1.innerHTML = `Créez une communauté que vos fans adoreront`;
    tradContact1.innerHTML = `Nous contacter`;
    tradContact2.innerHTML = `Nous contacter`;
    trad2.innerHTML = `Huddle réimagine la façon dont nous construisons des communautés. Vous avez une voix, mais votre public aussi. Créez des liens avec vos utilisateurs en engageant une véritable discussion.`;
    tradBouton1.removeAttribute("value");
    tradBouton1.setAttribute("value", "Essai gratuit");
    tradBouton2.innerText = "Commencez gratuitement";
    tradBouton3.removeAttribute("value");
    tradBouton3.setAttribute("value", "Commencez gratuitement");
    trad3.innerText=`Grandir ensemble`;
    trad4.innerText=`Engagez des discussions fructueuses avec votre public et créez une communauté forte et loyale. Pensez aux conversations perspicaces que vous ratez avec un formulaire de retour d'information.`;
    trad5.innerText=`Suivre les Conversations`;
    trad6.innerText=`Vous ne pagineriez pas une conversation dans la vie réelle, alors pourquoi le faire en ligne ? Nos fils de discussion sont chargés en temps réelle pour un flux plus naturel.`;
    trad7.innerText=`Vos utilisateurs`;
    trad8.innerText=`L'intégration de Huddle à la solution d'authentification de votre application ne prend que peu de temps. Cela signifie qu'une fois connectés à votre application, vos utilisateurs peuvent commencer à chatter immédiatement.`;
    trad9.innerText=`Prêt à construire votre communauté ?`;
    trad10.innerHTML=`À propos de nous`;
    trad11.innerHTML=`Ce que nous faisons`;
    trad12.innerText=`FAQ`;
    trad13.innerHTML=`Carrière`;
    trad14.innerText=`Blog`;
    trad15.innerHTML=`© Copyright 2018 Huddle. Tous droits réservés.`;
  } else {
    checkboxValueLangue = 'on';
    trad1.innerHTML = `Build The Community Your Fans Will Love`;
    tradContact1.innerHTML = `Contact us`;
    tradContact2.innerHTML = `Contact us`;
    trad2.innerHTML = `Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.`;
    tradBouton1.removeAttribute("value");
    tradBouton1.setAttribute("value", "Try It Free");
    tradBouton2.innerText = "Get Started For Free";
    tradBouton3.removeAttribute("value");
    tradBouton3.setAttribute("value", "Get Started For Free");
    trad3.innerText=`Grow Together`;
    trad4.innerText=`Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.`;
    trad5.innerText=`Folowing conversations`;
    trad6.innerText=`You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.`;
    trad7.innerText=`Your Users`;
    trad8.innerText=` It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.`;
    trad9.innerText=`Ready To Build Your Community?`;
    trad10.innerHTML=`About Us`;
    trad11.innerHTML=`What We Do`;
    trad12.innerText=`FAQ`;
    trad13.innerHTML=`Career`;
    trad14.innerText=`Blog`;
    trad15.innerHTML=`© Copyright 2018 Huddle. All rights reserved.`;
  }
}


//Rendre la mouche mobile

let catchImpossible = document.getElementById('catchImpossible');
catchImpossible.addEventListener('mouseover', dplct);

function nombreAlea(min, max){
  return (Math.random()*(max-min)+min)*(Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1);
}
function dplct(){
  let random = nombreAlea(75, 250);
  let random2 = nombreAlea(75, 250);
  let random3 = nombreAlea(50, 181);
  catchImpossible.style.transform = `translateX(${random}px) translateY(${random2}px) rotate(${random3}deg)`;
  setTimeout(()=>{
  catchImpossible.removeAttribute("style");
  }, 120000);
}


// Function to open the modal
let popup = document.getElementById("popup");
function openPopup() {};

function openModal() {
  document.getElementById("myModal").style.display = "flex";
};
// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
};
// Close the modal if the overlay is clicked
window.onclick = function (event) {
  if (event.target === document.getElementById("myModal")) {
    closeModal();
  };
};