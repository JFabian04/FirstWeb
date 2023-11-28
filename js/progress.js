const progressInput = document.querySelectorAll('.progress-input');
const barsProgress = document.querySelectorAll('.bar-progress');
const btnProgress = document.getElementById('btnProgress');
const porcent = document.querySelectorAll('.porcent');

btnProgress.addEventListener('click', function () {
    for (let i = 0; i < progressInput.length; i++) {
        if (progressInput[i].value && progressInput[i].value > 0 && progressInput[i].value <= 100) {
            barsProgress[i].style.backgroundColor = 'orangered';
            barsProgress[i].style.width = progressInput[i].value + '%';
            porcent[i].innerText = progressInput[i].value + '%';
        }
    }
})
