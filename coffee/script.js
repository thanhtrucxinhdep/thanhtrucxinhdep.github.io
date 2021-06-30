const leftArrow = document.querySelector('.left-arrow img');
const rightArrow = document.querySelector('.right-arrow img');
const slides = document.querySelectorAll('.banner-item');
const cartIcon = document.querySelector('.navbar-cart');
const cardBox = document.querySelector('.heading-cart');
const overlay = document.querySelector('.overlay');
const times = document.querySelector('.times');
const scrollToTop = document.querySelector('.scroll');
const barMenu = document.querySelector('.navbar-mobile-menu i')
const sideBar = document.querySelector('.sidebar')
const timesIcon = document.querySelector('.sidebar-times')
const cartIconMobile = document.querySelector('.navbar-mobile-cart i')
barMenu.onclick = e => {
    sideBar.classList.add('active')
    overlay.classList.add('active')
}
timesIcon.onclick = e => {
    sideBar.classList.remove('active')
    overlay.classList.remove('active')
}

let index = 0;


cartIcon.onclick = e => {
    cardBox.classList.add('active')
    overlay.classList.add('active')
}
cartIconMobile.onclick = e => {
    cardBox.classList.add('active')
    overlay.classList.add('active')
}
times.onclick = e => {
    cardBox.classList.remove('active')
    overlay.classList.remove('active')
}
overlay.onclick = e => {
    if (sideBar.classList.contains('active') ) {
        sideBar.classList.remove('active')
    } else if (cardBox.classList.contains('active')) {
        cardBox.classList.remove('active')
    }
    overlay.classList.remove('active')
}

const nextSlide = e => {
    slides[index].querySelector('h1.animation').classList.remove('animation')
    slides[index].querySelector('a.animation').classList.remove('animation')
    
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

    if (index > 0){
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    } else {
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    }
}
const prevSlide = e => {
    slides[index].querySelector('h1.animation').classList.remove('animation')
    slides[index].querySelector('a.animation').classList.remove('animation')

    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    if (index > 0){
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    } else {
        slides[index].querySelector('h1').classList.add('animation')
        slides[index].querySelector('a').classList.add('animation')
    }
}

const autoSlide = setInterval(nextSlide, 5000)


leftArrow.onclick = prevSlide;
rightArrow.onclick = nextSlide;


window.onscroll = e => {
    window.scrollY > 10 ? scrollToTop.classList.add('active') : scrollToTop.classList.remove('active')
}
