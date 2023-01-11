let icon = document.getElementById('icon');
let home = document.getElementById('home');
let products = document.getElementById('products')
let subMenu = document.getElementById('subMenu')

icon.addEventListener("click", function () {
    if (home.classList.contains('menu')) {
        home.classList.remove('menu');
        home.classList.add('menu-visible');
    } else {
        home.classList.remove('menu-visible');
        home.classList.add('menu');
    }
})
products.addEventListener("click", function () {
    if (subMenu.classList.contains('subMenu-v')) {
        products.classList.add('pro')
        subMenu.classList.add('subMe');
        subMenu.classList.add('subItem');
        subMenu.classList.remove('subMenu-v');
    } else {
        products.classList.remove('pro')
        subMenu.classList.remove('subMe');
        subMenu.classList.add('subMenu-v');
    }
})