let btnFont = document.getElementById('fonts');
let modalFont = document.getElementById('mfont');
let grand = document.getElementById('grand');
let exit = document.getElementById('exit');
let men = document.getElementById('mMenu');

btnFont.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex')
    exit.classList.add('ex-visible')
    document.getElementById("net").innerHTML = '<a class="fref" href="fuenteN.html"><li class="fontFour-v">Netflix</li></a>';
    document.getElementById("dis").innerHTML = '<a class="fref" href="fuenteD.html"><li class="fontFour-v">Disney</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="fuenteG.html"><li class="fontFour-v">Game of Thrones</li></a>';
    document.getElementById("wat").innerHTML = '<a class="fref" href="fuenteR.html"><li class="fontFour-v">Reloj</li></a>';

    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        exit.classList.remove('ex-visible');
        document.getElementById("net").innerHTML = "";
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
        document.getElementById("wat").innerHTML = "";
    })
})
let btnImg = document.getElementById('images');

btnImg.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex');
    exit.classList.add('ex-visible');
    document.getElementById("dis").innerHTML = '<a class="fref" href="images.html"><li class="fontFour-v">Imagenes en Contendor</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="background.html"><li class="fontFour-v">Imagen de Fondo</li></a>';

    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        document.getElementById("dis").classList.remove('fontFour-v')
        document.getElementById("gam").classList.remove('fontFour-v')
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
    })
})

men.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex');
    exit.classList.add('ex-visible');
    document.getElementById("net").innerHTML = '<a class="fref" href="menu.html"><li class="fontFour-v">Menú (Sencillo)</li></a>';
    document.getElementById("dis").innerHTML = '<a class="fref" href="menu-icons.html"><li class="fontFour-v">Menú con Iconos</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="horizontal-vertical.html"><li class="fontFour-v">Vértical y Horzontal</li></a>';

    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        document.getElementById("net").classList.remove('fontFour-v')
        document.getElementById("dis").classList.remove('fontFour-v')
        document.getElementById("gam").classList.remove('fontFour-v')
        document.getElementById("net").innerHTML = "";
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
    })
})

let menuJs = document.getElementById('mMenuJs');

menuJs.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex');
    exit.classList.add('ex-visible');
    document.getElementById("dis").innerHTML = '<a class="fref" href="subitems-desplegable.html"><li class="fontFour-v">Subitems Desplegables</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="menu_subitems.html"><li class="fontFour-v">Subitem "Alert"</li></a>';

    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        document.getElementById("dis").classList.remove('fontFour-v')
        document.getElementById("gam").classList.remove('fontFour-v')
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
    })
})
let menuQ = document.getElementById('mMenuQ');

menuQ.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex');
    exit.classList.add('ex-visible');
    document.getElementById("dis").innerHTML = '<a class="fref" href="media_query.html"><li class="fontFour-v">Menú Horizontal</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="menu_query.html"><li class="fontFour-v">Menú Vértical</li></a>';

    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        document.getElementById("dis").classList.remove('fontFour-v')
        document.getElementById("gam").classList.remove('fontFour-v')
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
    })
})
let forms = document.getElementById('forms')

forms.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex');
    exit.classList.add('ex-visible');
    document.getElementById("dis").innerHTML = '<a class="fref" href="form.html"><li class="fontFour-v">Citas Médicas</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="login.html"><li class="fontFour-v">Inicio de Sesión</li></a>';


    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        document.getElementById("dis").classList.remove('fontFour-v')
        document.getElementById("gam").classList.remove('fontFour-v')
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
    })
})
let posit = document.getElementById('position');
posit.addEventListener("click", function () {
    grand.classList.add('grand-visible');
    mfont.classList.add('modalFont-visible');
    extra.classList.add('extraGrand-visible');
    exit.classList.remove('ex');
    exit.classList.add('ex-visible');
    document.getElementById("dis").innerHTML = '<a class="fref" href="position.html"><li class="fontFour-v">(Absolute, Static, Fixed)</li></a>';
    document.getElementById("gam").innerHTML = '<a class="fref" href="relative.html"><li class="fontFour-v">Relative</li></a>';

    exit.addEventListener("click", function () {
        grand.classList.remove('grand-visible');
        mfont.classList.remove('modalFont-visible');
        extra.classList.remove('extraGrand-visible');
        exit.classList.add('ex');
        document.getElementById("dis").classList.remove('fontFour-v')
        document.getElementById("gam").classList.remove('fontFour-v')
        document.getElementById("dis").innerHTML = "";
        document.getElementById("gam").innerHTML = "";
    })
})