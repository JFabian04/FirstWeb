const check = document.getElementById('check');
const classCheck = document.querySelectorAll('.check-item');
const tittleTodo = document.querySelectorAll('.title-todo');

for (let i = 0; i < classCheck.length; i++) {
    classCheck[i].addEventListener('click', function () {
        if (classCheck[i].style.opacity != "1") {
            tittleTodo[i].classList.add('title-todo-checked');
            classCheck[i].style.opacity = "1";
        } else {
            tittleTodo[i].classList.remove('title-todo-checked');
            classCheck[i].style.opacity = "0";
        }
    })
}