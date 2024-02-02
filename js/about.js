// button's info
const headerPopup = document.querySelector('.header-popup');
const btnPopups = document.querySelectorAll('.btn');
const popClose = document.querySelectorAll('.pop__close');

// catalog's tree
const popup = document.querySelector('.popup');
const popupLink = document.querySelector('.typeee');
const popupClose = document.querySelector('.popup__close');

const popupTexdrev = document.querySelector('.popuptexdrev');
const poptexdrev1 = document.querySelector('.textdrevi');
const popTexdrevClose = document.querySelector('.poptexdrev__close');

const popilPup = document.querySelector('.popil');
const popilBtn = document.querySelector('.popppil');
const popilClose = document.querySelector('.popil__close');


// document of lupa
const popupDocument = document.querySelector('.popupdoc')
const popupLupa = document.querySelector('.lupa')
const popupDocClose = document.querySelector('.popupdoc-close')


// document of lupa-----------

popupLupa.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popupDocument.classList.add('active')
    e.preventDefault();
})

popupDocClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    popupDocument.classList.remove('active')
    e.preventDefault();
})


// catalog's tree----------

// popup1
popupLink.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    popup.classList.add('active')
    e.preventDefault();
})

popupClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    popup.classList.remove('active')
    e.preventDefault();
})

// popup2

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



// button's info-------

// Header-popup

btnPopups.forEach(button => {
    button.addEventListener('click', function (e) {
        document.body.style.overflowY = 'hidden';
        headerPopup.classList.add('active')
        e.preventDefault();
    })
});


popClose.forEach(element => {
    element.addEventListener('click', function(e) {
        document.body.style.overflowY = 'visible';
        headerPopup.classList.remove('active')
        e.preventDefault();
    })    
});

