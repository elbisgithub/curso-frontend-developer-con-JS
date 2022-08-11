const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const menuIconBurguer=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

//const asideProducts=document.querySelector('.navbar-shopping-cart');
//const cartIcon=document.querySelector('.product-detail');

const asideProducts=document.querySelector('.product-detail');
const cartIcon=document.querySelector('.navbar-shopping-cart');

//*Muestra y oculta el menú escritorio en el modo desktop* //
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideClosed=asideProducts.classList.contains('inactive');

    if(!isAsideClosed){
        asideProducts.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

//*Muestra y oculta el menú hamburguesa en el modo móvil* //
menuIconBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed=asideProducts.classList.contains('inactive');

    if(!isAsideClosed){
        asideProducts.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

//*Muestra y oculta el Aside sobre el pedido hecho en el carrito de compras* //
cartIcon.addEventListener('click', toggleCartAside);

function toggleCartAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    asideProducts.classList.toggle('inactive');
}