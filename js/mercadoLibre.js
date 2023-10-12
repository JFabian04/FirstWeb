const inputSearch = document.getElementById('inputSearch');
const nav = document.querySelector('nav');
const closeInput = document.getElementById('closeInput');
const cleanInput = document.getElementById('cleanInput');
const logoImge = document.getElementById('logoImge');

inputSearch.addEventListener('click', function () {
    inputSearch.classList.add('input-search');
    nav.style.backgroundColor = "white";
    closeInput.style.zIndex = '1';
    closeInput.style.left = 0;
    logoImge.style.opacity = 0;
    if (inputSearch.value != '') {
        cleanInput.style.zIndex = '1';
    }
})

inputSearch.addEventListener('input', function () {
    cleanInput.style.zIndex = '1';
})

console.log(inputSearch.value)


closeInput.addEventListener('click', function () {
    closeInput.style.left = '50px';
    closeInput.style.zIndex = '-1';
    cleanInput.style.zIndex = '-1';
    logoImge.style.opacity = 1;
    nav.style.backgroundColor = "rgb(255, 241, 89)";
    inputSearch.classList.remove('input-search');
})

cleanInput.addEventListener('click', function () {
    inputSearch.value = "";
    cleanInput.style.zIndex = '0';
})


//INFO
let keys = [
    "tipo",
    "descripcion",
    "color",
    "marca",
    "img",
    "precio",
    "ubicacion"
]
let dataCar = [
    {
        "tipo": "carro",
        "descripcion": "Elegante Mazda Cx-5 2.0 Touring Camioneta",
        "color": "rojo",
        "marca": "mazda",
        "img": "img//mercadoLibre/mazda_rojo_1.webp",
        "precio": "$85.000.000",
        "ubicacion": "Medellín - Antioquia"
    },
    {
        "tipo": "carro",
        "descripcion": "Citroen C3 1.6l Vti Visiodrive, Ideal para la Ciudad",
        "color": "gris",
        "marca": "citroen",
        "img": "img/mercadoLibre/citroen_gris_1.webp",
        "precio": "$42.000.000",
        "ubicacion": "Cali - Valle del Cauca"
    },
    {
        "tipo": "carro",
        "descripcion": "Peugeot 2008 1.2 Gt Line, Lujo y Confort en Bogotá",
        "color": "rojo",
        "marca": "peugeot",
        "img": "img/mercadoLibre/peugeot_rojo_1.webp",
        "precio": "$125.000.000",
        "ubicacion": "Barranquilla - Atlántico"
    },
    {
        "tipo": "carro",
        "descripcion": "Seat Leon 1.8 Fr Tsi Dsg 180 Hp, Potencia y Estilo",
        "color": "negro",
        "marca": "seat leon",
        "img": "img/mercadoLibre/leon_negro_1.webp",
        "precio": "$72.000.000",
        "ubicacion": "Pereira - Risaralda"
    },
    {
        "tipo": "carro",
        "descripcion": "Bmw M2 3.0 F22 Coupe, Deportividad en Bogotá",
        "color": "azul",
        "marca": "bmw",
        "img": "img/mercadoLibre/bmw_azul_1.jpg",
        "precio": "$160.000.000",
        "ubicacion": "Cartagena - Bolívar"
    },
    {
        "tipo": "carro",
        "descripcion": "Volkswagen New Beetle 2.5 Cabrio, Estilo Clásico",
        "color": "blanco",
        "marca": "volkswagen",
        "img": "img/mercadoLibre/volkswagen_blanco.webp",
        "precio": "$57.000.000",
        "ubicacion": "Cúcuta - Norte de Santander"
    }
];



let carro = document.querySelectorAll(".carro");
let templateCarro = carro[0].cloneNode(true);
carro[0].remove();

inputSearch.addEventListener("input", function () {
    inputSearch.value = inputSearch.value.replace("  ", " ")
})

inputSearch.addEventListener("keyup", function (event) {
    
    if (event.key === "Enter") {
        busquedas.innerHTML = "";
        let searchValue = inputSearch.value;
        if (searchValue == "") {
        } else {
            for (let x = 0; x < dataCar.length; x++) {
                for (let u = 0; u < keys.length; u++) {

                    if (dataCar[x][keys[u]].toLowerCase().trimEnd().includes(searchValue.toLowerCase().trimEnd())) {

                        let template = templateCarro.cloneNode(true);
                        let descripcion = template.querySelectorAll(".h4-descripcion");
                        let precio = template.querySelectorAll(".h4-precio");
                        let ubicacion = template.querySelectorAll(".h4-ubicacion");
                        let img = template.querySelectorAll(".img-carro");
                        img[0].setAttribute("src", dataCar[x]["img"])
                        descripcion[0].innerHTML = dataCar[x]["descripcion"];
                        precio[0].innerHTML = dataCar[x]["precio"];
                        ubicacion[0].innerHTML = dataCar[x]["ubicacion"];
                        busquedas.appendChild(template);
                        break;
                    }
                }
            }
        }

        let iconHeart = document.querySelectorAll(".icon-heart");
        let heart = document.querySelectorAll(".heart");
        for (let x = 0; x < iconHeart.length; x++) {
            console.log(x)
            iconHeart[x].addEventListener("click", function () {
                if (iconHeart[x].classList.contains("fa-solid")) {
                    iconHeart[x].classList.remove("fa-solid");
                    iconHeart[x].classList.add("fa-regular");
                    heart[x].style.display = "";
                } else {
                    iconHeart[x].classList.add("fa-solid");
                    iconHeart[x].classList.remove("fa-regular");
                    heart[x].style.display = "block";
                }
                console.log(iconHeart)
            })

        }
    }
})