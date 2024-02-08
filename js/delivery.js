const headerPopup = document.querySelector('.header-popup');
const btnPopups = document.querySelectorAll('.btn');
const popClose = document.querySelectorAll('.pop__close');

const popup = document.querySelector('.popup');
const popupLink = document.querySelectorAll('.typeee');
const popupClose = document.querySelector('.popup__close');

const popupTexdrev = document.querySelector('.popuptexdrev');
const poptexdrev1 = document.querySelectorAll('.textdrevi');
const popTexdrevClose = document.querySelector('.poptexdrev__close');


const popilPup = document.querySelector('.popil');
const popilBtn = document.querySelectorAll('.popppil');
const popilClose = document.querySelector('.popil__close');


// popup1


popupLink.forEach(element => {
    element.addEventListener('click', function (e) {
        document.body.style.overflowY = 'hidden';
        popup.classList.add('active')
        e.preventDefault();
    })
});

popupClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    popup.classList.remove('active')
    e.preventDefault();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflowY = 'visible';
        popup.classList.remove('active')
    }
})

// popup2

poptexdrev1.forEach(poptex => {
    poptex.addEventListener('click', function (e) {
        document.body.style.overflowY = 'hidden';
        popupTexdrev.classList.add('active')
        e.preventDefault();
    })
});

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


popilBtn.forEach(popil => {
    popil.addEventListener('click', function (e) {
        document.body.style.overflowY = 'hidden';
        popilPup.classList.add('active')
        e.preventDefault();
    })
});

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


window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.body.style.overflowY = 'visible';
        headerPopup.classList.remove('active')
    }
})
