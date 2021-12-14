const navOpen = document.querySelector('.menu')
const navMenu = document.querySelector('.nav_menu')

navOpen.addEventListener('click', () => {
    navMenu.classList.toggle('show_menu')
})


// CLOSE NAV-MENU ON LINK CLICKED
const navLink = document.querySelectorAll('.nav_link')

navLink.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
})


// SCROLL HEADER 2
const scrollNav = document.querySelector('.navbar')
window.addEventListener('scroll', scrollHeader)

function scrollHeader() {
    if (window.scrollY > scrollNav.offsetHeight + 100) {
        scrollNav.classList.add('scroll')
    }

    else {
        scrollNav.classList.remove('scroll')
    }
}


// SHOW CONTACT CARD
const contactBtn = document.querySelector('.contact_btn');
const contactCard = document.querySelector('.contact_card');
const closeCard = document.querySelector('.close');

contactBtn.addEventListener('click', () => {
    contactCard.classList.add('show_card')
})

closeCard.addEventListener('click', () => {
    contactCard.classList.remove('show_card')
})


/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
