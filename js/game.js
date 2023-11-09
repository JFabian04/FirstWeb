const jackBlack = document.getElementById('jackBlack');
const ground = document.getElementById('ground');
const montain = document.getElementById('montain');

let position = 0;
let cont = 0;
let margin = 0.6;
let max = false;
let limit = 100;
let montainEnd = 26

let timeSet
let timeToSleep = 3000;
let interval;
let timePress = 15;
let intervalX;

let pressKeys = {};
let keyPressed = 0;


window.addEventListener('keydown', function (event) {

    if (event.key == 'ArrowRight') {
        pressKeys[event.key] = true;
    }
    if (event.key == 'ArrowLeft') {
        pressKeys[event.key] = true;
    }
    if (event.key == 'ArrowUp' && !event.repeat) {
        pressKeys[event.key] = true;
    }
    if (event.key == 'x') {
        pressKeys[event.key] = true;
    }
    if (keyPressed == 0) {
        keyPress()
    }
})

let jump = 26;
let xd = false;

function keyPress() {
    keyPressed = 1;
    console.log(xd);
    interval = setInterval(() => {
        console.log(cont);
        if (cont > 115 && cont < 213) {
            xd = true
        } else if(cont < 115 && cont > 113 || cont > 213 && cont < 215) {
            xd = false
            jackBlack.style.marginTop = "0px"
        }

        if (pressKeys['ArrowRight']) {
            jackBlack.style.transform = 'scaleX(1)';
            jackBlack.style.backgroundImage = "url('./img/game/Caminando-original.webp')";

            if (cont != 115 && cont < 281 || pressKeys['ArrowUp']) {
                cont++
                position = cont * margin;
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
            }
        }
        if (pressKeys['ArrowLeft']) {
            jackBlack.style.transform = 'scaleX(-1)';
            jackBlack.style.backgroundImage = "url('./img/game/jCaminandoV2-original.webp')"
            if (cont > 0 && cont != 213 || pressKeys['ArrowUp']) {
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
                cont--
            }
        }
        if (pressKeys['ArrowUp']) {
            jackBlack.style.marginTop = "-" + jump + "vw"
            setTimeout(() => {
                if (xd == true) {
                    jackBlack.style.marginTop = "-10vw"
                } else {
                    jackBlack.style.marginTop = "0px"
                }
            }, 650)
        }

        if (pressKeys['x']) {
            jackBlack.style.backgroundImage = "url('./img/game/Ataque-original.webp')";
        }
    }, timePress)

}

window.addEventListener('keyup', function (event) {
    delete pressKeys[event.key];//Eliminar tecla presionada del objeto
    jackBlack.style.backgroundImage = "url('./img/game/Parada-original.webp')";
    clearTimeout(timeSet);//Limpiar el set Time de Jack Descando
    clearInterval(interval); //Limpiar que se sigan ejecutando letras

    keyPress()

    timeWaitJack(timeToSleep)
})


function timeWaitJack(timeWait) {
    timeSet = setTimeout(() => {
        jackBlack.style.backgroundImage = "url('./img/game/Espera2-original.webp')"
    }, timeWait)
}
timeWaitJack(timeToSleep);

