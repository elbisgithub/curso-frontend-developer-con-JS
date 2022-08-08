const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const menuIconBurguer=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

//*Muestra y oculta el menú escritorio en el modo desktop* //
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

//*Muestra y oculta el menú hamburguesa en el modo móvil* //
menuIconBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}