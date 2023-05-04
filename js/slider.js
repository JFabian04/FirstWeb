let right = document.getElementById("right");
let imgThree = document.getElementById("imgThree");
let imgTwo = document.getElementById("imgTwo");
let imgOne = document.getElementById("imgOne")
let back = document.getElementById("back");
let icon = document.querySelectorAll(".icon")
let img = document.querySelectorAll(".img")


for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", function () {
        for (let id = 0; id < img.length; id++) {
            if (i == 0) {
                console.log("img " + id)
                img[id].classList.add("img-slider-right")
            }
        }
    })
}
