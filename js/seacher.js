let searcher = document.getElementById("inputMobile");
let inputSearch = document.getElementById("inputSearchMobile");
let magnifier = document.getElementById("magnifSearch");
let magnifIcon = document.getElementById("magnifSearch");
let exit = document.getElementById("exitSearch");

magnifier.addEventListener("click", function () {
    searcher.classList.remove("container-input-mobile-none");
    searcher.classList.add("container-input-mobile");
    inputSearch.classList.remove("input-mobile-none");
    inputSearch.classList.add("input-mobile");
    setTimeout(() => {
        searcher.classList.add("transition");
        inputSearch.classList.add("transition");
    }, "1")
    // inputSearch.style.transition = "all 1s ease";
})
exit.addEventListener("click", function () {
    searcher.classList.remove("container-input-mobile");
    searcher.classList.add("container-input-mobile-none");
    searcher.classList.remove("transition");
    inputSearch.classList.remove("transition");

})

//CHAT
let chatShowBtn = document.getElementById("chatShowBtn");
let buttonContent = document.querySelectorAll(".chat-content");
let btnClose = document.getElementById("btn-close");
let containerChat = document.getElementById("containerChat");
let sliderChat = document.getElementById("sliderChat");

chatShowBtn.addEventListener("click", function () {
    if (!chatShowBtn.classList.contains("btn-chat-hidden")) {
        chatShowBtn.classList.add("btn-chat-hidden");
        for (let i = 0; i < buttonContent.length; i++) {
            buttonContent[i].style.opacity = "0";
            buttonContent[i].style.transition = "opacity 0.2s";
            // buttonContent[i].style.width = "0";
            btnClose.style.display = "flex";
        }
        containerChat.style.opacity = "1";
        containerChat.style.transition = "height 0.4s";
        containerChat.style.height = "400px";
        sliderChat.style.height = "100px"


    } else {
        chatShowBtn.classList.remove("btn-chat-hidden");
        for (let i = 0; i < buttonContent.length; i++) {
            buttonContent[i].style.opacity = "1";
            buttonContent[i].style.transition = "opacity 1.1s";
        }
        containerChat.style.height = "0px";
        containerChat.style.transition = "height 0.5s";
        btnClose.style.display = "none";

        setTimeout(() => {
            containerChat.style.opacity = "0";
            containerChat.style.transition = "all 0.5s";
        }, 100)
        sliderChat.style.height = "0px"

    }
    //SLIDER CHAT

    let rowSlider = document.querySelectorAll(".row-slider");
    for (let x = 0; x < rowSlider.length; x++) {
        for (let i = 1; i < 3; i++) {
            let slider = document.getElementById("slider" + i);
            let marginLeft = 140;
            rowSlider[x].addEventListener("click", function () {
                if (x == 0) {
                    console.log("START ", marginLeft);
                    slider.style.marginLeft = "-" + marginLeft + "px";
                    slider.style.transition = "margin-left 1s";
                    marginLeft = marginLeft + 140;
                    console.log("MEDIUM ", marginLeft);
                } else if (x == 1) {
                    console.log("END ", marginLeft);
                    slider.style.marginLeft = 8+ "px";
                    // marginLeft = marginLeft - 140;
                    slider.style.transition = "margin-left 1s";
                    // marginLeft = marginLeft + 140
                }
            })
        }
    }
})
