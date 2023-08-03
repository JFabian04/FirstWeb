let searcher = document.getElementById("inputMobile");
let inputSearch = document.getElementById("inputSearchMobile");
let magnifier = document.getElementById("magnifSearch");
let exit = document.getElementById("exitSearch");

magnifier.addEventListener("click", function () {
    searcher.classList.add("container-input-mobile");
    searcher.classList.remove("container-input-mobile-none");
    // alert("A")
    setTimeout(() => {
        // searcher.classList.add("transition");
        inputSearch.classList.add("transition");
    }, "2000")
})
exit.addEventListener("click", function () {
    searcher.classList.remove("container-input-mobile");
    searcher.classList.add("container-input-mobile-none");
})
