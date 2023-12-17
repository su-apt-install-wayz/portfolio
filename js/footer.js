const year = document.getElementById('year');
year.innerHTML = "Copyright &copy " + new Date().getFullYear() + " - Wustenberghs Théo. Tous droits réservés.";

let footerOpen = false;

function enableFooter() {
    const footer = document.getElementById('footer');
    const touche = document.getElementById('touche');
    const laTouche = document.getElementById('laTouche');
    if (!footerOpen) {
        footer.classList.add('active');
        laTouche.classList.add('active');
        footerOpen = true;
    }
    else {
        footer.classList.remove('active');
        laTouche.classList.remove('active');
        footerOpen = false;
    }

    document.addEventListener("click", function (event) {
        if (footerOpen) {
            if (event.target !== footer && event.target !== touche) {
                footer.classList.remove('active');
                laTouche.classList.remove('active');
                footerOpen = false;
            }
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "f" || event.key === "F") {
        enableFooter()
    }
});

function disableFooter() {
    footer.classList.remove('active');
    laTouche.classList.remove('active');
    footerOpen = false;
}