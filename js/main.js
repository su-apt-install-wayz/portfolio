
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav_list a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav_list a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals_left = document.querySelectorAll(".reveal_left");
    var reveals_right = document.querySelectorAll(".reveal_right");

    var revealFlag = false;

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
            revealFlag = true;
        } else {
            reveal.classList.remove("active");
        }
    });

    if (revealFlag) {
        // Activation de .reveal_left après un certain délai
        setTimeout(function () {
            reveals_left.forEach((reveal_left) => {
                reveal_left.classList.add("active");
            });
        }, 300);

        // Activation de .reveal_right après un certain délai
        setTimeout(function () {
            reveals_right.forEach((reveal_right) => {
                reveal_right.classList.add("active");
            });
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    reveal();
});

window.addEventListener("scroll", reveal);