function parallaxAccueil() {
    var scrollTop = window.scrollY;
    var accueil = document.querySelector("#accueil");
    
    if (accueil) {
        var offset = scrollTop * 0.5;
        accueil.style.transform = `translateY(${offset}px)`;
        accueil.style.paddingBottom = `${offset}px`; // Ajoute un espace pour éviter le chevauchement
    }
}

window.addEventListener("scroll", parallaxAccueil);
