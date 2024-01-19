/* ======================= scroll reveal ======================== */
ScrollReveal({
    // reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });
 
 ScrollReveal().reveal('.heading', { origin: 'top' });
 ScrollReveal().reveal('.products', { origin: 'bottom' });
 

/* ======================= toggle icon navbar ======================== */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ======================= scroll sections active link ======================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }); 
        }
    });
    /* ======================= sticky navbar ======================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    /* ======================= remove toggle icon and navbar when click navbar link (scroll)======================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const selectBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const option = document.getElementsByClassName('option');

selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');
});

for(options of option) {
    options.onclick = function() {
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    }
}

/* ========================================= POP-UP BUTTON ================================================= */

const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}