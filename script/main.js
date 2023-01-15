const menuBtn = document.querySelector('.menu-btn');
const burgerItem1 = document.querySelector('.burger-item1');
const burgerItem2 = document.querySelector('.burger-item2');
const burgerItem3 = document.querySelector('.burger-item3');
const burgerItem4 = document.querySelector('.burger-item4');
const corpsburger = document.querySelector('.corps-burger');
const header = document.querySelector('header');
const body = document.querySelector('body');

const topbtn = document.querySelector('#topbtn');



// Fonction Ouvrir bouton burger

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    corpsburger.classList.add('corps-burger-open');
    header.classList.add('btn-open-nav');
    body.classList.add('body-null');
    menuOpen = true;
  } 
  
  else {
    menuBtn.classList.remove('open');
    corpsburger.classList.remove('corps-burger-open');
    header.classList.remove('btn-open-nav');
    body.classList.remove('body-null');
    menuOpen = false;
  }
});



// Fonction clic sur chaque élément du burger

burgerItem1.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    corpsburger.classList.remove('corps-burger-open');
    header.classList.remove('btn-open-nav');
    body.classList.remove('body-null');
    menuOpen = false;
});

burgerItem2.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  corpsburger.classList.remove('corps-burger-open');
  header.classList.remove('btn-open-nav');
  body.classList.remove('body-null');
  menuOpen = false;
});

burgerItem3.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  corpsburger.classList.remove('corps-burger-open');
  header.classList.remove('btn-open-nav');
  body.classList.remove('body-null');
  menuOpen = false;
});

burgerItem4.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  corpsburger.classList.remove('corps-burger-open');
  header.classList.remove('btn-open-nav');
  body.classList.remove('body-null');
  menuOpen = false;
});


// Fonction scroll

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        topbtn.classList.add('gotopbtn-scroll');
    }
    
    else {
        topbtn.classList.remove('gotopbtn-scroll');
    }
});