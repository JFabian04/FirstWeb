const inputSearch = document.getElementById('inputSearch');
const nav = document.querySelector('nav');
const closeInput = document.getElementById('closeInput');
const cleanInput = document.getElementById('cleanInput');
const logoImge = document.getElementById('logoImge');

inputSearch.addEventListener('click', function () {
    inputSearch.classList.add('input-search');
    nav.style.backgroundColor = "white";
    closeInput.style.zIndex = '1';
    closeInput.style.left = 0;
    logoImge.style.opacity = 0;
    if (inputSearch.value != '') {
        cleanInput.style.zIndex = '1';
    }
})

inputSearch.addEventListener('input', function () {
    cleanInput.style.zIndex = '1';
})

console.log(inputSearch.value)


closeInput.addEventListener('click', function () {
    closeInput.style.left = '50px';
    closeInput.style.zIndex = '-1';
    cleanInput.style.zIndex = '-1';
    logoImge.style.opacity = 1;
    nav.style.backgroundColor = "rgb(255, 241, 89)";
    inputSearch.classList.remove('input-search');
})

cleanInput.addEventListener('click', function () {
    inputSearch.value = "";
    cleanInput.style.zIndex = '0';
})