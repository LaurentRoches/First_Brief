let retourTop = document.getElementById ('retourTop');

window.addEventListener ("scroll", boutonRetour);

function boutonRetour (){
    if (window.scrollY > 500){
        retourTop.classList.replace("invisible" , "visible");
    } else {
        retourTop.classList.replace("visible" , "invisible");
    }
}