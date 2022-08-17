




window.onload = callService;



var datos, urlAPI = "https://lauog05.github.io/products/products.json";

function callService() {
    $.ajax({
        url: urlAPI,
        tye: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    }
    );
}


function onSuccess(data) {
    datos = data;


    console.log(datos);


    mostrarTodo();

}

function onError(jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL: " + urlAPI);
}






function mostrarTodo() {
    var tipo = document.getElementById("tradicionales");

    let h = "";


    h += "<div class='carousel-item active'>";
    h += "<img src='imgs/cumpleanios1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    h += "</div>";


    datos.queques[0].tradicionales.forEach(prd => {

        h += "<div class='carousel-item'>";
        h += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        h += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = h;



    var tipo = document.getElementById("mini");

    let i = "";


    i += "<div class='carousel-item active'>";
    i += "<img src='imgs/miniQueque1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    i += "</div>";


    datos.queques[1].mini.forEach(prd => {

        i += "<div class='carousel-item'>";
        i += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        i += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = i;



    var tipo = document.getElementById("fon");

    let l = "";


    l += "<div class='carousel-item active'>";
    l += "<img src='imgs/fondant1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    l += "</div>";


    datos.queques[2].fondant.forEach(prd => {

        l += "<div class='carousel-item'>";
        l += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        l += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = l;



    var tipo = document.getElementById("cajaEspecial");

    let e = "";


    e += "<div class='carousel-item active'>";
    e += "<img src='imgs/caja1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    e += "</div>";


    datos.cajasEspeciales.forEach(prd => {

        e += "<div class='carousel-item'>";
        e += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        e += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = e;



    var tipo = document.getElementById("mesaDulce");

    let r = "";


    r += "<div class='carousel-item active'>";
    r += "<img src='imgs/mesaDulce1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    r += "</div>";


    datos.mesaDulce.forEach(prd => {

        r += "<div class='carousel-item'>";
        r += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        r += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = r;



    var tipo = document.getElementById("navidad");

    let a = "";


    a += "<div class='carousel-item active'>";
    a += "<img src='imgs/navidad1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    a += "</div>";


    datos.navidenios.forEach(prd => {

        a += "<div class='carousel-item'>";
        a += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        a += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = a;



    var tipo = document.getElementById("chessecakes");

    let x = "";


    x += "<div class='carousel-item active'>";
    x += "<img src='imgs/chessecake1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    x += "</div>";


    datos.chessecake.forEach(prd => {

        x += "<div class='carousel-item'>";
        x += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        x += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = x;



    var tipo = document.getElementById("tresL");

    let y = "";


    y += "<div class='carousel-item active'>";
    y += "<img src='imgs/tresLeches1.jpg' width='100px' height='300px'  class='d-block w-100'>";
    y += "</div>";


    datos.tresLeches.forEach(prd => {

        y += "<div class='carousel-item'>";
        y += "<img src='" + prd.img + "' width='100px' height='300px' class='d-block w-100'>";
        y += "</div>";


    });


    tipo.innerHTML = "";
    tipo.innerHTML = y;





  
}
