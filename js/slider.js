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
            if (cont == 0) {
                imgContent.classList.add("img-content-left")
                imgContent.classList.remove("img-content-reverse")
                cont = cont + 1
                console.log("R ONE " + cont)
                return cont;
            }
            if (cont == 1) {
                imgContent.classList.add("img-content-leftt")
                imgContent.classList.remove("img-content-left")
                cont = cont + 1
                console.log("R TWO " + cont)

                return cont;

            }
            if (cont == 2) {
                imgContent.classList.remove("img-content-leftt")
                imgContent.classList.add("img-content-reverse")
                cont = 0;
                console.log("R Tre " + cont)
                // return;
            }
        }

        if (i == 1) {
            if (cont > 0) {
                ind = cont
                console.log("condi " + ind)
                if (ind == 1) {
                    imgContent.classList.add("img-content-reverse")
                    // imgContent.classList.remove("img-content-left")
                    // imgContent.classList.remove("img-content-right")
                    console.log("L TWO " + ind)
                    ind = ind + 1
                    return ind;
    
                }
                return
            }
            if (ind == 0) {
                imgContent.classList.add("img-content-right")
                imgContent.classList.remove("img-content-reverse")
                
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

