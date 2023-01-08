let icon = document.getElementById('icon');
let menu = document.getElementById('menu');

icon.addEventListener("click", function(){
    if(menu.classList.contains("itemMenu-visible")){
        menu.classList.remove("itemMenu-visible");
       
    }
    else{
        menu.classList.add("itemMenu-visible")
    }
});