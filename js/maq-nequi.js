let thubnail = document.querySelectorAll(".container-img");
let border = document.querySelectorAll(".border");
let opactity = document.querySelectorAll(".img")
let mainImg = document.querySelectorAll(".btn-img")
let arr = ["img/image-product-1.jpg", "img/image-product-2.jpg", "img/image-product-3.jpg", "img/image-product-4.jpg"];
let main = document.getElementById("mainPrin");
let mainModal = document.querySelector(".main-modal");
let bodyBoxTwo = document.getElementById("bodyBox")
let coverMain = document.getElementById("coverMain")

main.addEventListener("click", function () {
    mainModal.classList.add("main-modal-vis")
    bodyBoxTwo.classList.add("body-vis")
    coverMain.classList.add("cover-main")
    if (document.querySelector(".main-modal-vis") != null) {
        for (let i = 0; i < thubnail.length; i++) {
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

// if (document.querySelector(".main-modal-vis") == null) {
//     for (let i = 0; i < thubnail.length; i++) {
//         thubnail[i].addEventListener("click", function () {
//             for (let ind = 0; ind < thubnail.length; ind++) {
//                 if (ind == i) {
//                     for (let index = 0; index < arr.length; index++) {
//                         for (let img = 0; img < mainImg.length; img++) {
//                             mainImg[img].setAttribute("src", arr[i])
//                             console.log("IMAGEN " + mainImg.length)
//                         }
//                         console.log("ind: " + ind)
//                         border[ind].classList.add("bord");
//                         opactity[ind + 1].classList.add("img-vis")
//                         console.log("add " + ind)
//                     }

//                 }
//                 else {
//                     border[ind].classList.remove("bord");
//                     opactity[i + 2].classList.remove("img-vis")
//                     opactity[i].classList.remove("img-vis")
//                     console.log("Remove: " + ind)

//                 }
//             }
//         })
//     }
// }


// const arrray = ["img/image-product-1.jpg", "img/image-product-2.jpg", "img/image-product-3.jpg", "img/image-product-4.jpg"];

// mainImg.addEventListener("click", function () {
//     for (let index = 0; index < arrray.length; index++) {
//         const imagen = new Image();
//         // imagen.src = arrray[0]
//         mainImg.setAttribute("src", arrray[index]);
//         console.log(arrray[2]
//         )
//     }
// })
