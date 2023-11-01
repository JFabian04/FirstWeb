const jackBlack = document.getElementById('jackBlack');
const ground = document.getElementById('ground');


let position = 0;
let cont = 0;
let margin = 0.6;
let max = false;
let limit = 190;

let timeSet
let timeToSleep = 3000;

let rightPress = false;
let upPress = false;

window.addEventListener('keyup', function () {
    jackBlack.style.backgroundImage = "url('../img/game/Parada-original.webp')"
    clearTimeout(timeSet);
    timeWaitJack(timeToSleep)
    rightPress = false;
    // position = position - 100;
})

window.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowRight') {
        rightPress = true;
        cont++
        position = cont * margin;
        jackBlack.style.transform = 'scaleX(1)';
        if (position < limit) {
            // console.log("GR: ", position);
            ground.style.marginLeft = '-' + position + 'vw';
            // max = true;
        } else {
            position = position - (limit)
            // console.log("JACK: ", position);
            jackBlack.style.marginLeft = position + 'vw';
            max = true;
        }
        jackBlack.style.backgroundImage = "url('../img/game/jCaminandoV2-original.webp')"
    }
    if (event.key == 'ArrowLeft') {
        jackBlack.style.transform = 'scaleX(-1)';
        if (cont > 0) {
            position = position - margin;
            if (position < limit && max == false) {
                ground.style.marginLeft = '-' + position + 'vw';
                // console.log("JACK LEFT: ", position);
            }
            if (max == true) {
                jackBlack.style.marginLeft = position + 'vw';
                // console.log("JACK LEF mas: ", position);
                if (position < 0) {
                    max = false;
                    position = limit
                }
            }
            jackBlack.style.backgroundImage = "url('../img/game/jCaminandoV2-original.webp')"
            cont--
        }
    }
    if (event.key == 'ArrowUp' && !event.repeat) {
        upPress = true
        setTimeout(() => {
            upPress = false;
        }, 500)
        jackBlack.style.marginTop = "-160px"
        setTimeout(() => {
            jackBlack.style.marginTop = "0px"
            // ground.style.transition = 'unset';
        }, 650)
    }

    if (event.key == 'x') {
        jackBlack.style.backgroundImage = "url('../img/game/Ataque-original.webp')"
    }

    if (rightPress && upPress) {
        position = position + 20;
        if (max == false) {
            cont = cont + 35
            ground.style.marginLeft = '-' + position + 'vw';
            console.log('false: ', cont);
        } else {
            // cont = cont + 3500
            // position = limit
            position = position - (limit)
            jackBlack.style.marginLeft = '-' + position + 'vw';
            console.log('true: ', cont);
        }
      
        ground.style.transition = 'margin-left 1s';
        rightPress = false;
        upPress = false;
        jackBlack.style.backgroundImage = "url('../img/game/jCaminandoV2-original.webp')"
    }
    setTimeout(() => {
        ground.style.transition = 'margin-left 0s';
    }, 750)

})

function timeWaitJack(timeWait) {
    timeSet = setTimeout(() => {
        jackBlack.style.backgroundImage = "url('../img/game/Espera2-original.webp')"
    }, timeWait)
}
timeWaitJack(timeToSleep);

