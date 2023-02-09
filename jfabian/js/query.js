let iconMenu = document.getElementById("hambur");
let menuV = document.getElementById("menuItem")

iconMenu.addEventListener("click", function (){
    if (menuV.classList.contains("item-menu")) {
        menuV.classList.add("item-menu-visible");
        menuV.classList.remove("item-menu");
    }
    else{
        menuV.classList.remove("item-menu-visible");
        menuV.classList.add("item-menu");
    }
});