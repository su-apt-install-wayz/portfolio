let burgerOpen = false;


const nav = document.getElementById('nav_list');
const burgerBtn = document.getElementById('burgerBtn');
document.addEventListener("click", function (event) {
    if (!burgerOpen) {
        nav.classList.add('active');
        burgerBtn.classList.add('active');
        burgerOpen = true;
    }
    else {
        nav.classList.remove('active');
        burgerBtn.classList.remove('active');
        burgerOpen = false;
    }
});

document.addEventListener("click", function (event) {
    if (burgerOpen) {
        if (event.target !== nav && event.target !== burgerBtn) {
            nav.classList.remove('active');
            burgerBtn.classList.remove('active');
            burgerOpen = false;
        }
    }
});
