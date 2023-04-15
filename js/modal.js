let main = document.getElementById("main-box");
let miniOne = document.getElementById("imgMini1")
let miniTwo = document.getElementById("imgMini2")
let miniThree = document.getElementById("imgMini3")
let miniFour = document.getElementById("imgMini4")
let border1 = document.getElementById("border1")
let border2 = document.getElementById("border2")
let border3 = document.getElementById("border3")
let border4 = document.getElementById("border4")

miniOne.addEventListener("click", function () {
    // miniOne.classList.add("border-vis")
    border1.classList.add("bord")
    miniOne.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-1.jpg")
    miniTwo.classList.remove("img-vis")
    miniThree.classList.remove("img-vis")
    miniFour.classList.remove("img-vis")
    border2.classList.remove("bord")
    border3.classList.remove("bord")
    border4.classList.remove("bord")

})
miniTwo.addEventListener("click", function () {
    miniTwo.classList.add("img-vis")
    border2.classList.add("bord")
    main.setAttribute("src", "img/image-product-2.jpg")
    miniOne.classList.remove("img-vis")
    miniThree.classList.remove("img-vis")
    miniFour.classList.remove("img-vis")
    border1.classList.remove("bord")
    border3.classList.remove("bord")
    border4.classList.remove("bord")

})

miniThree.addEventListener("click", function () {
    border3.classList.add("bord")
    miniThree.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-3.jpg")
    miniTwo.classList.remove("img-vis")
    miniOne.classList.remove("img-vis")
    miniFour.classList.remove("img-vis")
    border1.classList.remove("bord")
    border2.classList.remove("bord")
    border4.classList.remove("bord")

})
miniFour.addEventListener("click", function () {
    border4.classList.add("bord")
    miniFour.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-4.jpg")
    miniTwo.classList.remove("img-vis")
    miniThree.classList.remove("img-vis")
    miniOne.classList.remove("img-vis")
    border1.classList.remove("bord")
    border2.classList.remove("bord")
    border3.classList.remove("bord")

})

let less = document.getElementById("less");
let more = document.getElementById("more");
let number = document.getElementById("number")
let click = 0;


more.addEventListener("click", function () {
    if (click == 50) {
        click = 50;
    } else {
        click = click + 1
        number.innerHTML = click
    }
    
})

less.addEventListener("click", function () {
    if (click == 0) {
        click = 0;
    } else {
        click = click - 1
        number.innerHTML = click
    }
});

