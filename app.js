const ham = document.querySelector('.hamburger-menu');
const hamSpan = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
const navItem = document.querySelector('.navMenu');
const navitems = document.querySelectorAll('.nav-item');

let showTrue = false;

ham.addEventListener('click', toggle);

function toggle(){
    if(!showTrue){
        hamSpan.classList.add('open');
        nav.classList.add('open');
        navItem.classList.add('open');
        navitems.forEach(items => items.classList.add('open'));
        showTrue = true;
    }
    else{
        hamSpan.classList.remove('open');
        nav.classList.remove('open');
        navItem.classList.remove('open');
        navitems.forEach(items => items.classList.remove('open'));
        showTrue = false;
    }
}
