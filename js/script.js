const headerPopup = document.querySelector('.header-popup');
const btnPopups = document.querySelector('.btn');
const popupClose = document.querySelector('.popup__close');

const popup = document.querySelector('.popup');
const popupLink = document.querySelector('.knew-price');
const popClose = document.querySelector('.pop__close');


const popilPup = document.querySelector('.popil');
const popilBtn = document.querySelector('.popil-btn');
const popilClose = document.querySelector('.popil__close');

const popupTexdrev = document.querySelector('.popuptexdrev');
const poptexdrev1 = document.querySelector('.poptexdrevv');
const popTexdrevClose = document.querySelector('.poptexdrev__close');

// footer
const pilovochnik = document.querySelector('.typeee');
const footerPop = document.querySelector('.footer__btn');
const texdrevesini = document.querySelector('.textdrevi')

const polimaterial = document.querySelector('.popppil');


let widthScroll;
let body = document.querySelector('body')



// btn

btnPopups.addEventListener('click', function (e) {
   
    headerPopup.classList.add('active')
    document.body.style.overflowY = 'hidden';
    e.preventDefault();

})

popClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    headerPopup.classList.remove('active')

    e.preventDefault();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflowY = 'visible';
        headerPopup.classList.remove('active')
    }
})


// Category
popupLink.addEventListener('click', function (e) {
    popup.classList.add('active')
    document.body.style.overflowY = 'hidden';
 
    e.preventDefault();
})

popupClose.addEventListener('click', function(e) {
    popup.classList.remove('active')
    document.body.style.overflowY = 'visible';
    e.preventDefault();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflowY = 'visible';
        popup.classList.remove('active')
    }
})



popilBtn.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popilPup.classList.add('active')
    e.preventDefault();
})

popilClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    popilPup.classList.remove('active')
    e.preventDefault();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflowY = 'visible';
        popilPup.classList.remove('active')
    }
})



poptexdrev1.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popupTexdrev.classList.add('active')
    e.preventDefault();
})

popTexdrevClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    popupTexdrev.classList.remove('active')
    e.preventDefault();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflowY = 'visible';
        popupTexdrev.classList.remove('active')
    }
})




// Footer
pilovochnik.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popup.classList.add('active')
    e.preventDefault();
})

polimaterial.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popilPup.classList.add('active')
    e.preventDefault();
})

texdrevesini.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popupTexdrev.classList.add('active')
    e.preventDefault();
})


footerPop.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    headerPopup.classList.add('active')
    e.preventDefault();
})



