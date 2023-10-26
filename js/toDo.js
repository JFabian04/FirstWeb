const containerTodo = document.getElementById('containerTodo');
const containerTasks = document.getElementById('containerTasks');
const inputCreate = document.getElementById('inputCreate');
const itemsLeft = document.getElementById('itemsLeft');

let controlTheme = false;

// Items del footer
const section = document.querySelectorAll('.section')

let cont = 0
inputCreate.addEventListener('keyup', function (event) {
    if (event.key == 'Enter' && inputCreate.value != '') {
        cont++;
        section.forEach((otherElement) => {
            otherElement.style.color = otherElement.dataset.originalColor;
        });

        let todoClone = containerTodo.cloneNode(true); //Clon de lo que se va a crear
        let titleTask = todoClone.querySelector('#titleTodo'); //Elemento que recibe el texto
        let classCheck = todoClone.querySelector('.check-item'); //ELemento para check

        containerTasks.appendChild(todoClone) //Agregar el clone al elemento padre
        todoClone.style.display = 'flex';
        titleTask.textContent = inputCreate.value;
        titleTask.classList.add('active');

        inputCreate.value = "";

        classCheck.addEventListener('click', function () {
            if (classCheck.style.opacity != "1") {
                titleTask.classList.add('title-todo-checked');
                titleTask.classList.remove('active');
                classCheck.style.opacity = "1";
                cont = cont - 1;
                itemsLeft.innerText = cont;
            } else {
                titleTask.classList.remove('title-todo-checked');
                titleTask.classList.add('active');
                classCheck.style.opacity = "0";
                cont++;
                itemsLeft.innerText = cont;
            }
        })
        itemsLeft.innerText = cont;

        // Focus a item seleccionado del footer/seccion
        section.forEach((item, i) => {
            item.dataset.originalColor = item.style.color || getComputedStyle(item).color;
            item.addEventListener('click', () => {
                colorItem(item, i);
            });
        });
    } else if (event.key == 'Enter' && inputCreate.value == '') {
        Swal.fire(
            '',
            'No puedes asignar una tarea vacia.'
          )
    }
})

let position = 0;;
let clickSection = false;

function colorItem(item, i) {
    section.forEach((otherElement) => {
        otherElement.style.color = otherElement.dataset.originalColor;
    });
    if (controlTheme) {
        position = i
        item.style.color = "rgb(212, 17, 43)"; //Modo claro
        clickSection = true;
    } else {
        position = i
        item.style.color = "white"; //Modo Socuro
        clickSection = true;
    }
}

const completed = document.getElementById('completed');
completed.addEventListener('click', function () {
    selectSection("title-todo-checked");
});

const all = document.getElementById('all');
all.addEventListener('click', function () {
    selectSection("title-todo");
});

const active = document.getElementById('active');
active.addEventListener('click', function () {
    selectSection("active");
});


function selectSection(classTask) {
    const tasks = containerTasks.querySelectorAll('.container-todo');
    tasks.forEach(task => {
        const titleTodo = task.querySelector('.' + classTask);
        if (titleTodo) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

//Metodo para eliminar las tareas que ya ha sido completadas
const clearCompleted = document.getElementById('clearCompleted');
clearCompleted.addEventListener('click', function () {
    const tasks = containerTasks.querySelectorAll('.container-todo');
    tasks.forEach(task => {
        const titleTodo = task.querySelector('.' + "title-todo-checked");
        if (titleTodo) {
            task.remove();
        }
    });
})

const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const containerImg = document.getElementById('containerImg');
// colores originales
const body = document.body;
body.dataset.originalColor = window.getComputedStyle(body).backgroundColor;

const containerItems = document.querySelectorAll('.container-items');
containerItemOriginal = window.getComputedStyle(containerItems[0]).backgroundColor;

const textItem = containerTodo.querySelectorAll('.title-todo');
textItemOriginal = window.getComputedStyle(textItem[0]).color;

sunIcon.addEventListener('click', function () {
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
    moonIcon.style.zIndex = "1";
    sunIcon.style.zIndex = "-1";

    // Color de border y texto
    // containerTodo.classList.add('light-mode')
    // textItem.forEach(item => {
    //     item.style.color = "red"
    // })

    if (clickSection) {
        section[position].style.color = "red";
    }

    for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].style.backgroundColor = "gainsboro"
    }
    containerImg.style.backgroundImage = 'url(../img/todo_mentor/bg-desktop-light.jpg)';
    body.style.backgroundColor = "whitesmoke"

    inputCreate.style.caretColor = 'black';
    inputCreate.style.color = 'black';
    controlTheme = true;
})

moonIcon.addEventListener('click', function () {
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
    moonIcon.style.zIndex = "-1";
    sunIcon.style.zIndex = "1";
    for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].style.backgroundColor = containerItemOriginal;
    }

    // Color de border y texto
    // containerTodo.classList.add('light-mode')
    // textItem.forEach(item => {
    //     item.style.color = "black"
    // })
    if (clickSection) {
        section[position].style.color = "white";
    }

    // containerTodo.classList.add('light-mode')
    containerImg.style.backgroundImage = 'url(../img/todo_mentor/header-web.jpg)';
    body.style.backgroundColor = body.dataset.originalColor;

    // textItem.forEach(item => {
    //     item.style.color = textItemOriginal
    // })

    inputCreate.style.caretColor = 'white';
    inputCreate.style.color = 'rgb(154, 155, 175)';

    controlTheme = false;
})