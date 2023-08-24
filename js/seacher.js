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
let message = document.getElementById("message");
let header = document.getElementById("header");

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
        sliderChat.style.height = "115px";
        sliderChat.style.opacity = "1";
        sliderChat.style.transition = "all 0.5s";
        message.style.opacity = "1";
        message.style.transition = "all 0.2s";
        header.style.height = "40px";


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
            containerChat.style.transition = "all 0.2s";
            message.style.opacity = "0";
            message.style.transition = "all 0.2s";
            header.style.height = "0px";

        }, 100)
        sliderChat.style.height = "0px"
        sliderChat.style.opacity = "0";
        sliderChat.style.transition = "all 0.2s";

    }
    //SLIDER CHAT
    let rowRight = document.getElementById("rowRight");
    let rowLeft = document.getElementById("rowLeft");
    let slider = document.getElementById("conatinSlider");
    let contRight = 0;
    let contLeft = 0;
    let marginSize = 295;
    let marg = -295;
    if (contLeft == 0) {
        rowLeft.style.opacity = "0";
    }
    rowRight.addEventListener("click", function () {
        rowLeft.style.opacity = "1";
        contRight = contRight + 1;

        if (contRight == 2) {
            marg = -295
            contLeft = 0;
        }
        if (contRight > 1) {
            marginSize = 295
            rowRight.style.opacity = "0";
            marginSize = marginSize * contRight;
        }
        slider.style.marginLeft = "-" + marginSize + "px";
        // slider.style.transition = "margin-left 0.7s";

    })
    rowLeft.addEventListener("click", function () {
        rowRight.style.opacity = "1";
        contLeft = contLeft + 1;
        if (contRight == 1 && contLeft == 1) {
            marg = 0;
            contRight = 0;
            rowLeft.style.opacity = "0";
        }
        if (contLeft >= 1) {
            marginSize = 197.5;
            if (contLeft == 2) {
                marg = 0;
                contRight = 0;
                marginSize = 295;
                rowLeft.style.opacity = "0";
            }
        }
        if (contLeft > 1) {
            contLeft = 0
        }
        slider.style.marginLeft = marg + "px";
        contRight = 0;
        marginSize = 295;
    })
})
