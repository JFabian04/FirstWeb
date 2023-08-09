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
