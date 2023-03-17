const btnMenu = document.getElementById('menu'),
    btnClose = document.getElementById('close'),
    navbar = document.getElementById('nav_list'),
    body = document.getElementById('body');


function navbarMobile(event) {
    if(event === 'open') {
        btnMenu.classList.remove('active');
        btnClose.classList.add('active');

        navbar.classList.add('active');
        body.classList.add('overflow');

    } else if (event === 'close'){
        btnMenu.classList.add('active');
        btnClose.classList.remove('active');

        navbar.classList.remove('active');
        body.classList.remove('overflow');
    }
}


const nav = document.querySelector('#nav');

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if(scrollPosition >  10) {
        if(!nav.classList.contains('scroll')) {
            nav.classList.add('scroll');
        }
    } else {
        if(nav.classList.contains('scroll')) {
            nav.classList.remove('scroll');
        }
    }
}

document.addEventListener("scroll", onScroll);