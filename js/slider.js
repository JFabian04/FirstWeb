let right = document.getElementById("right");
let imgThree = document.getElementById("imgThree");
let imgTwo = document.getElementById("imgTwo");
let imgOne = document.getElementById("imgOne")
let back = document.getElementById("back");

let imgContent = document.querySelector(".img-content");
let icon = document.querySelectorAll(".icon");
let img = document.querySelectorAll(".img");

let cont = 0;
let ind = -1;

for (let i = 0; i < icon.length; i++) {
    console.log("MAIN " + i)
    icon[i].addEventListener("click", function () {
        console.log(ind)
        console.log("btn " + i)
        // for (let index = 0; index <  i + 1; index++) {
            let r = 0
            // console.log("INDEX " +index)
            if (i == 0) {
                ind = ind + 1
                console.log("CONTONE " + (cont + 1))
                if (ind == 0) {
                    imgContent.classList.add("img-content-left")
                }
                if (ind == 1) {
                    imgContent.classList.add("img-content-leftt")
                    ind = -1

                }
                // if (ind == 2) {
                //     imgContent.classList.add("img-content-reverse")
                //     ind = -1
                    
                // }
            // }
            // cont = cont + 1
        }
        // console.log("CERO " + i)
        if (i == 1) {

            // if (cont == 0) {
            //     imgContent.classList.add("img-content-rigth")
            // }
            if (cont == 1) {
                imgContent.classList.add("img-content-rightt")
            }
            if (cont == 2) {
                imgContent.classList.add("img-content-reverse")
            }

            cont = cont + 1
        }

    })
}

// let rgt = true;

//     right.addEventListener("click", function () {
//         if (rgt == true) {
//             ind = ind + 1

//             if (ind == 0) {
//                 imgContent.classList.add("img-content-left")
//             }
//             if (ind == 1) {
//                 imgContent.classList.add("img-content-leftt")
//             }
//             if (ind == 2) {
//                 imgContent.classList.add("img-content-reverse")
//                 ind = -1

//             }

//         }
//     })




// right.addEventListener("click", function () {
//     console.log("CONT " + cont)
//     console.log("IND " + ind)
//     if (ind == cont) {
//         imgContent.classList.add("img-content-left")
//         ind = ind + 1
//         cont = cont + 1;
//         console.log("CONT " + cont)
//         console.log("IND " + ind)
//     }
//     if (ind == cont) {
//         imgContent.classList.add(".img-content-leftt")
//         ind = ind + 1
//         cont = cont + 1;
//         console.log("CONT " + cont)
//         console.log("IND " + ind)
//     }
// })