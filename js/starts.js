const value = document.getElementById('input');
const stars = document.querySelectorAll('.star-empty');
const button = document.getElementById('button');
const title = document.getElementById('title');

button.addEventListener('click', function () {
    if (value.value < 0) {
        title.innerHTML = 'EL valor no puede ser menor a 0'
    } else if (value.value > 5) {
        title.innerText = 'EL valor no puede ser mayor a 5'
    } else {
        title.innerText = ''
        let indice = 0;
        for (let y = 0; y < stars.length; y++) {
            stars[y].className = '';
            stars[y].classList.add('fa-regular')
            stars[y].classList.add('fa-star')
        }

        for (let i = 1; i <= value.value; i++) {
            indice++
            stars[i].classList.remove('fa-regular');
            stars[i].classList.add('fa-solid')
        }
        let calc = Math.abs(value.value - indice);

        if (calc < 0.5 && calc > 0) {
            stars[indice + 1].classList.remove('fa-star');
            stars[indice + 1].classList.add('fa-star-half-stroke');
        }
        if (calc >= 0.5 && calc < 1) {
            stars[indice + 1].classList.add('fa-star');
            if (stars[indice + 1].classList.contains('fa-star-half-stroke')) {
                stars[indice + 1].classList.remove('fa-star-half-stroke')
            } else {
                stars[indice + 1].classList.remove('fa-regular');
            }
            stars[indice + 1].classList.add('fa-solid')
        }
    }
})

