const progressInput = document.querySelectorAll('.progress-input');
const barsProgress = document.querySelectorAll('.bar-progress');
const btnProgress = document.getElementById('btnProgress');
const porcent = document.querySelectorAll('.porcent');
let cont = 0;
let limitMax = false;
const limit = 5;

btnProgress.addEventListener('click', function () {
    for (let i = 0; i < progressInput.length; i++) {
        if (progressInput[i].value < 0 || progressInput[i].value == '') {
            cont++
        } else if (progressInput[i].value > limit) {
            console.log('xd');
            progressInput[i].style.color = 'red' 
            limitMax = true;
            break;
        } else {
            limitMax = false;
            progressInput[i].style.color = 'rgb(0, 87, 180)' 
            let value = progressInput[i].value * 20;
            barsProgress[i].style.backgroundColor = 'orangered';
            barsProgress[i].style.width = value + '%';
            porcent[i].innerText = value + '%';

        }
    }
    console.log(cont);

    if (cont == 5 || limitMax == true) {
        alert('EL valor se debe encontrar en un rango de 0 a 5')
    }
})
