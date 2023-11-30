const progressInput = document.querySelectorAll('.progress-input');
const barsProgress = document.querySelectorAll('.bar-progress');
const btnProgress = document.getElementById('btnProgress');
const porcentText = document.querySelectorAll('.porcent');
const title = document.getElementById('title');

btnProgress.addEventListener('click', function () {
    let bool = true;
    for (let i = 0; i < progressInput.length; i++) {
        if (progressInput[i].value < 0) {
            bool = false;
            break;
        }
    }

    if (!bool) {
        title.innerText = 'El valor debe ser mayor a 0'
        return
    }

    let value = 0;
    for (let i = 0; i < progressInput.length; i++) {
        if (progressInput[i].value == 'NaN' || progressInput[i].value == '') {
            progressInput[i].value = 0
        }else{
            value += parseInt(progressInput[i].value)
        }
    }

    for (let i = 0; i < progressInput.length; i++) {
        let valueProgress = parseInt(progressInput[i].value)
        let porcent = (valueProgress * 100 / value);
        if (isNaN(porcent)) porcent = 0;
        let porcetnFix = Math.floor(porcent);
        barsProgress[i].style.backgroundColor = 'orangered';
        barsProgress[i].style.width = porcetnFix + '%';
        porcentText[i].innerText = porcetnFix + '%';

    }
})
