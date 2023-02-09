let boxThree = document.getElementById('box03');


boxThree.addEventListener("click", function(){
    if (boxThree.classList.contains('box3-t')) {
        boxThree.classList.remove('box3-t')

    }else{
        boxThree.classList.add('box3-t')
    }
})


let boxFour = document.getElementById('box04');
let boxFive = document.getElementById('box05');

boxFour.addEventListener("click", function(){
    if (boxFive.classList.contains('box5-t')) {
        boxFive.classList.remove('box5-t')
    }else{
        boxFive.classList.add('box5-t')
    }   
})


let boxSix = document.getElementById('box06');
let boxSeven = document.getElementById('box07');

boxSix.addEventListener("click", function(){
    if (boxSeven.classList.contains('box7-t')) {
        boxSix.classList.remove('box6-t')
        boxSeven.classList.remove('box7-t')
        
    }else{
        boxSeven.classList.add('box7-t')
        boxSix.classList.add('box6-t')
    }   
})
