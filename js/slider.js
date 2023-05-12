let right = document.getElementById("right");
let left = document.getElementById("back")

let imgThree = document.getElementById("imgThree");
let imgTwo = document.getElementById("imgTwo");
let imgOne = document.getElementById("imgOne")
let back = document.getElementById("back");

let imgContent = document.querySelector(".img-content");
let icon = document.querySelectorAll(".icon");
let img = document.querySelectorAll(".img");


let cont = 0;
let ind = 0;

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", function () {
        if (i == 0) {
            if (ind > 0) {
                cont = ind
                console.log("condi " + ind)
                console.log("condi CONT " + cont)
                if (cont == 2) {
                    imgContent.classList.add("img-content-right")
                    imgContent.classList.remove("img-content-rightt")
                    // imgContent.classList.remove("img-content-right")
                    console.log("LRR TWO " + ind)
                    cont = 2
                    ind = 0
                    return cont;

                }
                // if (cont == 0) {
                //     imgContent.classList.add("img-content-left")
                //     imgContent.classList.remove("img-content-reverse")
                //     console.log("R ONE " + cont)
                //     cont = cont + 1
                //     return cont;

                // }                
            }

            if (cont == 0) {
                imgContent.classList.remove("img-content-right")
                imgContent.classList.add("img-content-left")
                imgContent.classList.remove("img-content-reverse")
                console.log("R ONE " + cont)
                cont = cont + 1
                return cont;
            }
            if (cont == 1) {
                imgContent.classList.add("img-content-leftt")
                imgContent.classList.remove("img-content-left")
                cont = cont + 1
                ind = 0
                console.log("R TWO " + cont)
                return cont;

            }
            if (cont == 2) {
                imgContent.classList.remove("img-content-leftt")
                imgContent.classList.remove("img-content-right")
                imgContent.classList.add("img-content-reverse")

                cont = 0;
                ind = 0
                console.log("R Tre " + cont)
                return cont;
            }
        }

        if (i == 1) {
            if (cont > 0) {
                ind = cont
                // console.log("condi " + ind)
                if (ind == 1) {
                    imgContent.classList.add("img-content-reverse")
                    // imgContent.classList.remove("img-content-left")
                    // imgContent.classList.remove("img-content-right")
                    // console.log("LRR TWO " + ind)
                    cont = 0
                    ind = 0
                    return ind;

                }
                if (ind == 2) {
                    imgContent.classList.add("img-content-rightt")
                    imgContent.classList.remove("img-content-leftt")
                    // imgContent.classList.remove("img-content-right")
                    // ind = 2
                    cont = 0
                    // console.log("L CONDI TWO " + ind)
                    return ind;

                }
            }
            if (ind == 0) {
                imgContent.classList.add("img-content-right")
                imgContent.classList.remove("img-content-reverse")
                cont = 2
                ind = ind + 1
                console.log("L ONE " + ind)
                return ind;
            }
            if (ind == 1) {
                imgContent.classList.add("img-content-rightt")
                // imgContent.classList.remove("img-content-left")
                imgContent.classList.remove("img-content-right")
                console.log("L TWO " + ind)
                ind = ind + 1
                return ind;

            }
            if (ind == 2) {
                imgContent.classList.remove("img-content-rightt")
                imgContent.classList.add("img-content-reverse")
                ind = 0;
                console.log("L Threr " + ind)
                return;
            }
        }

    })
}

// right.addEventListener("click", function () {
//     if (cont == 0) {
//         imgContent.classList.add("img-content-left")
//         imgContent.classList.remove("img-content-reverse")
//         cont = cont + 1
//         console.log("R ONE: " + cont)
//         return cont;
//     }
//     if (cont == 1) {
//         imgContent.classList.add("img-content-leftt")
//         imgContent.classList.remove("img-content-left")
//         cont = cont + 1
//         console.log("R TWO " + cont)
//         return  cont;
//     }
//     if (cont == 2) {
//         imgContent.classList.remove("img-content-leftt")
//         imgContent.classList.add("img-content-reverse")
//         cont = 0;
//         console.log("R Tre " + cont)
//         return;
//     }
// })

// left.addEventListener("click", function(){
//     if (ind == 0) {
//         imgContent.classList.add("img-content-right")
//         imgContent.classList.remove("img-content-reverse")
//         ind = ind + 1
//         console.log("L ONE " + ind)
//         return ind;
//     }
//     if (ind == 1) {
//         imgContent.classList.add("img-content-rightt")
//         imgContent.classList.remove("img-content-right")
//         ind = ind + 1
//         console.log("L TWO " + ind)
//         return ind;

//     }
//     if (ind == 2) {
//         imgContent.classList.remove("img-content-rightt")
//         imgContent.classList.add("img-content-reverse") 
//         ind = 0;
//         console.log("L Threr " + ind)
//         return;
//     }
// })
let iconCircle = document.querySelectorAll(".circle");

for (let index = 0; index < iconCircle.length; index++) {
    iconCircle[index].addEventListener("click", function () {

        if (index == 0) {
            console.log("UNO " + index)
            if (iconCircle[1].classList.contains("icon-center")) {
                iconCircle[1].classList.add("icon-up")
                iconCircle[0].classList.remove("icon-up")
                iconCircle[2].classList.remove("icon-up")

            }
            if (iconCircle[2].classList.contains("icon-center")) {
                iconCircle[2].classList.add("icon-up")
                iconCircle[1].classList.remove("icon-up")
                iconCircle[0].classList.remove("icon-up")
            }
            imgContent.classList.remove("img-content-leftt")
            imgContent.classList.add("img-content-reverse")
            iconCircle[index].classList.add("icon-color")
            iconCircle[index + 1].classList.remove("icon-color")
            iconCircle[index + 2].classList.remove("icon-color")
            iconCircle[index].classList.add("icon-center")
            iconCircle[index + 1].classList.remove("icon-center")
            iconCircle[index + 2].classList.remove("icon-center")

        }
        if (index == 1) {
            console.log("DOS " + index)
            if (iconCircle[0].classList.contains("icon-center")) {
                iconCircle[0].classList.add("icon-up")
                iconCircle[1].classList.remove("icon-up")
                iconCircle[2].classList.remove("icon-up")
            }
            if (iconCircle[2].classList.contains("icon-center")) {
                iconCircle[2].classList.add("icon-up")
                iconCircle[1].classList.remove("icon-up")
                iconCircle[0].classList.remove("icon-up")
            }
            imgContent.classList.remove("img-content-leftt")
            imgContent.classList.remove("img-content-reverse")
            imgContent.classList.add("img-content-left")
            iconCircle[2].classList.remove("icon-color")
            iconCircle[index - 1].classList.remove("icon-color")
            iconCircle[index].classList.add("icon-color")
            iconCircle[index].classList.add("icon-center")
            iconCircle[2].classList.remove("icon-center")
            iconCircle[index - 1].classList.remove("icon-center")



        }
        if (index == 2) {
            console.log("TRES " + index)
            if (iconCircle[1].classList.contains("icon-center")) {
                iconCircle[1].classList.add("icon-up")
                iconCircle[0].classList.remove("icon-up")
                iconCircle[2].classList.remove("icon-up")
            }
            if (iconCircle[0].classList.contains("icon-center")) {
                iconCircle[0].classList.add("icon-up")
                iconCircle[1].classList.remove("icon-up")
                iconCircle[2].classList.remove("icon-up")
            }
            imgContent.classList.remove("img-content-reverse")
            imgContent.classList.add("img-content-leftt")
            iconCircle[index].classList.add("icon-color")
            iconCircle[0].classList.remove("icon-color")
            iconCircle[1].classList.remove("icon-color")
            iconCircle[index].classList.add("icon-center")
            iconCircle[0].classList.remove("icon-center")
            iconCircle[1].classList.remove("icon-center")
        }
    })

}

