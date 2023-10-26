const jackBlack = document.getElementById('jackBlack');

let rigth = 0;
let left = 0;
window.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowRight') {
        rigth = rigth + 10;
        jackBlack.style.marginLeft = rigth + 'px';
        left = 0;
    }
    if (event.key == 'ArrowLeft') {
        rigth = 0;
        left = left + 10;
        console.log('left: ' , left);
        jackBlack.style.marginLeft = '-' + left + 'px';
    }
    if (event.key == 'ArrowUp') {
        console.log('up')
        jackBlack.style.marginTop = "-160px"

        this.setTimeout(() => {
            jackBlack.style.marginTop = "0px"
        }, 350)
    }
})
