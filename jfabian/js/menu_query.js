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
        subMenu.classList.add('subItem-m');
        products.classList.add('pro')
        products.classList.add('itemPro-v')     
        subMenu.classList.remove('subMenu-v');
    } else {
        subMenu.classList.remove('subItem-m');
        products.classList.remove('itemPro-v')
        products.classList.remove('pro')
        subMenu.classList.add('subMenu-v');
    }
})