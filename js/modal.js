let main = document.getElementById("main-box");
let miniOne = document.getElementById("imgMini1")
let miniTwo = document.getElementById("imgMini2")
let miniThree = document.getElementById("imgMini3")
let miniFour = document.getElementById("imgMini4")

miniOne.addEventListener("click", function() {
    miniOne.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-1.jpg")
    miniTwo.classList.remove("img-vis")
    miniThree.classList.remove("img-vis")
    miniFour.classList.remove("img-vis")
})
miniTwo.addEventListener("click", function() {
    miniTwo.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-2.jpg")
    miniOne.classList.remove("img-vis")
    miniThree.classList.remove("img-vis")
    miniFour.classList.remove("img-vis")
})

miniThree.addEventListener("click", function() {
    miniThree.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-3.jpg")
    miniTwo.classList.remove("img-vis")
    miniOne.classList.remove("img-vis")
    miniFour.classList.remove("img-vis")
})
miniFour.addEventListener("click", function() {
    miniFour.classList.add("img-vis")
    main.setAttribute("src", "img/image-product-4.jpg")
    miniTwo.classList.remove("img-vis")
    miniThree.classList.remove("img-vis")
    miniOne.classList.remove("img-vis")
})