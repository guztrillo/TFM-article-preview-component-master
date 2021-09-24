const share = document.querySelector('.component-share');
const svg = document.querySelector('.component-share-icon path');
const popup = document.querySelector('.component-popup');
const popupMobile = document.querySelector('.component-popup-mobile');
let activated = false;

share.addEventListener('click', () => {
     activated = !activated;
     share.classList.toggle('active');
     svg.classList.toggle('active-svg');
     popup.classList.toggle('active-popup');
     if(window.innerWidth <= 1120) {
          popupMobile.classList.toggle('active-popup')
     }
})

function disableStyles() {
     if(window.innerWidth >= 1120 && activated){
          activated = false;
          share.classList.remove('active');
          svg.classList.remove('active-svg');
          popup.classList.remove('active-popup');
          popupMobile.classList.remove('active-popup')
     } 
}

window.addEventListener('resize', disableStyles)