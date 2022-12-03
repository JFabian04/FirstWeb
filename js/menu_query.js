let icon = document.getElementById('icon');
let home = document.getElementById('home');
let products = document.getElementById('products')
let subMenu = document.getElementById('subMenu')

icon.addEventListener("click", function(){
    if (home.classList.contains('menu')) {
        home.classList.add('menu-visible');
        home.classList.remove('menu');
    }else{
        home.classList.remove('menu-visible');
        home.classList.add('menu');
    }
})
products.addEventListener("click", function(){
    if(subMenu.classList.contains('subMenu')){
    subMenu.classList.add('subMenu-visible');
    subMenu.classList.remove('subMenu');
    }else{
        subMenu.classList.remove('subMenu-visible');
        subMenu.classList.add('subMenu');
    }
})