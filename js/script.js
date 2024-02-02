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





// btn

btnPopups.addEventListener('click', function (e) {
    document.body.style.overflowY = 'hidden';
    headerPopup.classList.add('active')
    e.preventDefault();
})

popClose.addEventListener('click', function(e) {
    document.body.style.overflowY = 'visible';
    headerPopup.classList.remove('active')
    e.preventDefault();
})



// Category
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




// popupLink.onclick = function(e) {
//     popup.style.display = 'block';
//     e.preventDefault();
// }

// popupClose.onclick = function(e){
//     popup.style.display = 'none'
//     e.preventDefault();
// }


// let disableScroll = function () {
//     let paddingOfSet = window.innerWidth;

//     console.log(paddingOfSet);
// } 
// let unlock = true;

// const timeout = 800;


// if (popupLink.length > 0) {
//     for (let index = 0; index < popupLink.length; index++) {
//         const popupLinks = popupLink[index];
//         popupLinks.addEventListener('click', function(e) {
//             const popupName = popupLinks.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         })
//     }
// }



// const popupCloseIcon = document.querySelectorAll('.close-popup');

// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function(e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         })
//     }
// }


// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         }else{
//             // bodyLock();
//         }
//         curentPopup.classList.add('open');


//         curentPopup.addEventListener('click', function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'))
//             }
//         });
//     }
// }

// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');

//         if (doUnlock) {
//             // bodyUnLock();
//         }
//     }
// }

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.main').offsetWidth + 'px';
//     if (lockPadding,length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }
   
//         body.style.paddingRight = lockPaddingValue;
//         body.classList.add('lock')

//         unlock = false;
//         setTimeout(function(){
//             unlock = true;
//         }, timeout)
    
// }

// function bodyUnLock() {
//     setTimeout(function () {

//         if (lockPadding.length > 0) {
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const element = lockPadding[index];
//                 el.style.paddingRight = "0px"
//             }
//         }
        

//         body.style.paddingRight = '0px';
//         body.classList.remove('lock')
//     }, timeout)

//     unlock = false;

//     setTimeout(function () {
//         unlock = true;
//     }, timeout)
// }


// document.addEventListener('keydown', function(e){
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open')
//         popupClose(popupActive)
//     }
// });