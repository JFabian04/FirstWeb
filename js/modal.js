// let main = document.querySelector(".img-box");
// let miniOne = document.querySelector(".img-mini-1")
// let miniTwo = document.querySelector(".img-mini-2")
// let miniThree = document.querySelector(".img-mini-3")
// let miniFour = document.querySelector(".img-mini-4")
// let border1 = document.getElementById("border1")
// let border2 = document.getElementById("border2")
// let border3 = document.getElementById("border3")
// let border4 = document.getElementById("border4")

// miniOne.addEventListener("click", function () {
//     miniOne.classList.add("img-vis")
//     // miniOne.classList.add("border-vis")
//     border1.classList.add("bord")
//     main.setAttribute("src", "img/image-product-1.jpg")
//     miniTwo.classList.remove("img-vis")
//     miniThree.classList.remove("img-vis")
//     miniFour.classList.remove("img-vis")
//     border2.classList.remove("bord")
//     border3.classList.remove("bord")
//     border4.classList.remove("bord")

// })
// miniTwo.addEventListener("click", function () {
//     miniTwo.classList.add("img-vis")
//     border2.classList.add("bord")
//     main.setAttribute("src", "img/image-product-2.jpg")
//     miniOne.classList.remove("img-vis")
//     miniThree.classList.remove("img-vis")
//     miniFour.classList.remove("img-vis")
//     border1.classList.remove("bord")
//     border3.classList.remove("bord")
//     border4.classList.remove("bord")

// })

// miniThree.addEventListener("click", function () {
//     miniThree.classList.add("img-vis")
//     border3.classList.add("bord")
//     main.setAttribute("src", "img/image-product-3.jpg")
//     miniTwo.classList.remove("img-vis")
//     miniOne.classList.remove("img-vis")
//     miniFour.classList.remove("img-vis")
//     border1.classList.remove("bord")
//     border2.classList.remove("bord")
//     border4.classList.remove("bord")

// })
// miniFour.addEventListener("click", function () {
//     miniFour.classList.add("img-vis")
//     border4.classList.add("bord")
//     main.setAttribute("src", "img/image-product-4.jpg")
//     miniTwo.classList.remove("img-vis")
//     miniThree.classList.remove("img-vis")
//     miniOne.classList.remove("img-vis")
//     border1.classList.remove("bord")
//     border2.classList.remove("bord")
//     border3.classList.remove("bord")

// })

let less = document.getElementById("less");
let more = document.getElementById("more");
let number = document.getElementById("number")
let price =  document.getElementById("price")
let click = 1;
let total = 125000; 

more.addEventListener("click", function () {
    if (click == 50) {
        click = 50;
    } else {
        click = click + 1;
        number.innerHTML = click;
        total = total + 125000;
        price.innerHTML = "$" + total.toLocaleString("es") ;
    }
})

less.addEventListener("click", function () {
    if (click == 1) {
        click = 1;

    } else {
        click = click - 1
        number.innerHTML = click
        total = total - 125000;

        price.innerHTML = "$" + total.toLocaleString("es") ;
    }
});

// let = document.getElementById("carShop");

let thubnail = document.querySelectorAll(".container-img");
let border = document.querySelectorAll(".border");
let opactity = document.querySelectorAll(".img")
let mainImg = document.querySelectorAll(".btn-img")
let arr = ["img/image-product-1.jpg", "img/image-product-2.jpg", "img/image-product-3.jpg", "img/image-product-4.jpg"];
let main = document.getElementById("mainPrin");
let mainModal = document.querySelector(".main-modal");
let bodyBoxTwo = document.getElementById("bodyBox")
let coverMain = document.getElementById("coverMain")
let rowCircle = document.querySelectorAll(".circle-row")
let right = document.getElementById("right")

main.addEventListener("click", function () {
    mainModal.classList.add("main-modal-vis")
    bodyBoxTwo.classList.add("body-vis")
    coverMain.classList.add("cover-main")
    if (document.querySelector(".main-modal-vis") != null) {
        for (let i = 0; i < thubnail.length; i++) {
            right.addEventListener("click", function () {
                
                for (let ind = 3; ind < i+1 ; ind++) {
                    console.log("IND " + ind)
                        console.log("I " + (i+1))
                    if (ind == i+1) {
                        
                        border[ind].classList.add("bord")
                        ind = ind +1
                        // border[i].classList.add("bord")
                        // opactity[ind - 3].classList.add("img-vis")
                        // opactity[i + 2].classList.add("img-vis")
                        for (let im = 0; im < mainImg.length; im++) {
                            mainImg[im].setAttribute("src", arr[i - 4])
                        }

                    }
                    // else {
                    //     for (let ind = 7; ind >= 0; ind--) {
                    //         border[ind].classList.remove("bord")
                    //         opactity[ind + 1].classList.remove("img-vis")
                    //         opactity[ind + 2].classList.remove("img-vis")
                    //     }

                    // }
                }
            })
            thubnail[i].addEventListener("click", function () {
                for (let ind = 3; ind < i + 1; ind++) {

                    if (i == ind) {
                        
                        border[ind - 4].classList.add("bord")
                        border[i].classList.add("bord")
                        opactity[ind - 3].classList.add("img-vis")
                        opactity[i + 2].classList.add("img-vis")
                        for (let im = 0; im < mainImg.length; im++) {
                            mainImg[im].setAttribute("src", arr[i - 4])
                        }


                    } else {
                        for (let ind = 7; ind >= 0; ind--) {
                            border[ind].classList.remove("bord")
                            opactity[ind + 1].classList.remove("img-vis")
                            opactity[ind + 2].classList.remove("img-vis")
                        }

                    }
                }
            })


            // for (let i = 0; i <= thubnail.length; i++) {
            //     rowCircle[i].addEventListener("click", function () {
            //         i = i + 1
            //         //    border[i].classList.add("bord")
            //         for (let ind = 0; ind < i; ind++) {
            //             console.log(i)
            //             // border[ind].classList.add("bord")
            //             // border[i + 2].classList.add("bord")
            //             // border[i - 2].classList.add("bord")
            //             // border[i + 1].classList.remove("bord")
            //             // border[i - 3].classList.remove("bord")
            //             if (i == i) {
            //                 border[i + 2].classList.add("bord")
            //                 border[i - 2].classList.add("bord")
            //                 border[i + 1].classList.remove("bord")
            //                 border[i - 3].classList.remove("bord")

            //             }

            //         }
            //         // border[row-1].classList.add("bord")
            //         // border[row+3].classList.add("bord")
            //         // border[i+1].classList.remove("bord")
            //         // border[row+3].classList.remove("bord")

            //     })
            // }

        }
    }
    // if (document.querySelector(".main-modal-vis") != null) {
    //     for (let i = 0; i < thubnail.length; i++) {
    //         thubnail[i].addEventListener("click", function () {
    //             for (let ind = 0; ind <= i + 4; ind++) {
    //                 border[i].classList.add("bord");
    //                 opactity[i - 3].classList.add("img-vis")
    //                 console.log("IND " + ind + " = " + i + " == " + (i + 4))

    //                 for (let img = 0; img < arr.length; img++) {
    //                     if (ind == i + 4) {

    //                         for (let im = 0; im < mainImg.length; im++) {
    //                             mainImg[im].setAttribute("src", arr[i-4])
    //                             console.log("IMAGENMODAL " + arr[i-2])
    //                         }
    //                         console.log("IMAGEN " + mainImg)
    //                         border[i - 4].classList.add("bord");
    //                         opactity[i + 2].classList.add("img-vis")
    //                         // opactity[i + 2].classList.add("img-vis")
    //                     }

    //                 } if (ind != i + 4) {
    //                     border[i - 1].classList.remove("bord");
    //                     opactity[ind + 1].classList.remove("img-vis")
    //                     // opactity[i+1].classList.remove("img-vis")
    //                     console.log("Remove: " + ind)
    //                     // for (let ind = 3; ind >= 1; ind--) {
    //                     //     opactity[i-1].classList.remove("img-vis")
    //                     //     // border[i+4].classList.remove("bord");
    //                     //     console.log("Inverse: " + ind)
    //                     // }
    //                 }
    //             }
    //         })
    //     }
    // }
})
if (document.querySelector(".main-modal-vis") == null) {
    for (let i = 0; i <= 4; i++) {
        thubnail[i].addEventListener("click", function () {
            for (let ind = 0; ind < i + 2; ind++) {
                border[i].classList.add("bord")
                opactity[i + 1].classList.add("img-vis")
                border[ind].classList.remove("bord")
                border[ind + 2].classList.remove("bord")
                opactity[ind + 1].classList.remove("img-vis")
                opactity[ind + 3].classList.remove("img-vis")
                for (let im = 0; im < mainImg.length; im++) {
                    mainImg[im].setAttribute("src", arr[i])
                }
            }

            // for (let ind = 0; ind < i + 2; ind++) {
            //     if (i == ind) {
            //         border[i].classList.add("bord")
            //         console.log("BORD ADD: " + "A")
            //         opactity[i + 1].classList.add("img-vis")
            //         for (let im = 0; im < mainImg.length; im++) {
            //             mainImg[im].setAttribute("src", arr[i])
            //         }
            //     } 
            //      }
            //      if (i != i) {
            //         border[i+1].classList.remove("bord")                        

            //         opactity[i].classList.remove("img-vis")
            //         for (let ind = 7; ind >= 0; ind--) {
            //             opactity[i + 2].classList.remove("img-vis")
            //         }

            //     }
        })
    }
}