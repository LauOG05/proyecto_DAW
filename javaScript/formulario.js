

var precio = 0, tamanio = 0, relleno = 0, sabor = 0, lustre = 0, lamina = 0, express = 0, queque = 0;

function cotizarQueque() {




    try {
        if (document.getElementById("tamanio8").checked == false && document.getElementById("tamanio10").checked == false &&
            document.getElementById("tamanio15").checked == false && document.getElementById("tamanio20").checked == false) throw "Debe elegir el tamaño del queque";

        if (document.getElementById("relleno1").checked == false && document.getElementById("relleno2").checked == false &&
            document.getElementById("relleno3").checked == false) throw "Debe elegir el tipo de relleno";

        if (document.getElementById("sabor1").checked == false && document.getElementById("sabor2").checked == false &&
            document.getElementById("sabor3").checked == false) throw "Debe elegir el tipo sabor del queque";

        if (document.getElementById("lustre1").checked == false && document.getElementById("lustre2").checked == false &&
            document.getElementById("lustre3").checked == false && document.getElementById("lustre4").checked == false) throw "Debe elegir el tipo de lustre";




        prcTamanio();
        prcRelleno();
        prcSabor();
        prcLustre();
        prcLamina();
        prcExpress();

        precio = tamanio + relleno + sabor + lustre + lamina + express;

        window.alert("El precio total es de " + precio)







    } catch (error) {
        window.alert("Error: " + error);
    }
}




function prcTamanio() {
    if (document.getElementById("tamanio8").checked == true) {
        tamanio = 12000;
    }
    if (document.getElementById("tamanio10").checked == true) {
        tamanio = 15000;
    }
    if (document.getElementById("tamanio15").checked == true) {
        tamanio = 18000;
    }
    if (document.getElementById("tamanio20").checked == true) {
        tamanio = 22000;
    }


}


function prcRelleno() {
    if (document.getElementById("relleno1").checked == true) {
        relleno = 2000;
    }
    if (document.getElementById("relleno2").checked == true) {
        relleno = 2500;
    }
    if (document.getElementById("relleno3").checked == true) {
        relleno = 3000;
    }



}

function prcSabor() {
    if (document.getElementById("sabor1").checked == true) {
        sabor = 12000;
    }
    if (document.getElementById("sabor2").checked == true) {
        sabor = 15000;
    }
    if (document.getElementById("sabor3").checked == true) {
        sabor = 18000;
    }



}


function prcLustre() {
    if (document.getElementById("lustre1").checked == true) {
        lustre = 500;
    }
    if (document.getElementById("lustre2").checked == true) {
        lustre = 600;
    }
    if (document.getElementById("lustre3").checked == true) {
        lustre = 700;
    }
    if (document.getElementById("lustre4").checked == true) {
        lustre = 1000;
    }


}


function prcLamina() {

    let varLamina = document.getElementById("lamina").value;

    if (varLamina == 1) {
        lamina == 1000;
    }

}

function prcExpress() {

    let varExpress = document.getElementById("express").value;

    if (varExpress == 1) {
        express == 1000;
    }

}



function cotizarTorta() {


    try {
        if (document.getElementById("tamanio2.1").checked == false && document.getElementById("tamanio2.2").checked == false &&
            document.getElementById("tamanio2.3").checked == false && document.getElementById("tamanio2.4").checked == false) throw "Debe elegir el tamaño del queque";

        if (document.getElementById("relleno2.1").checked == false && document.getElementById("relleno2.2").checked == false &&
            document.getElementById("relleno2.3").checked == false) throw "Debe elegir el tipo de relleno";

        if (document.getElementById("queque2.1").checked == false && document.getElementById("queque2.2").checked == false) throw "Debe elegir el tipo de sabor del queque";

        if (document.getElementById("deco1").checked == false && document.getElementById("deco2").checked == false &&
            document.getElementById("deco3").checked == false) throw "Debe elegir el sabor de la decoración";




        prcTamanio2();
        prcRelleno2();
        prcSabor2();
        prcQueque();
        prcExpress2();

        precio = tamanio + relleno + queque + sabor + express;

        window.alert("El precio total es de " + precio)




    } catch (error) {
        window.alert("Error: " + error);
    }
}




function prcTamanio2() {
    if (document.getElementById("tamanio2.1").checked == true) {
        tamanio = 12000;
    }
    if (document.getElementById("tamanio2.2").checked == true) {
        tamanio = 15000;
    }
    if (document.getElementById("tamanio2.3").checked == true) {
        tamanio = 18000;
    }
    if (document.getElementById("tamanio2.4").checked == true) {
        tamanio = 22000;
    }


}


function prcRelleno2() {
    if (document.getElementById("relleno2.1").checked == true) {
        relleno = 2000;
    }
    if (document.getElementById("relleno2.2").checked == true) {
        relleno = 2500;
    }
    if (document.getElementById("relleno2.3").checked == true) {
        relleno = 3000;
    }

}


function prcQueque() {
    if (document.getElementById("queque2.1").checked == true) {
        queque = 3000;
    }
    if (document.getElementById("queque2.2").checked == true) {
        queque = 3500;
    }

}


function prcSabor2() {
    if (document.getElementById("deco1").checked == true) {
        sabor = 12000;
    }
    if (document.getElementById("deco2").checked == true) {
        sabor = 15000;
    }
    if (document.getElementById("deco3").checked == true) {
        sabor = 18000;
    }

}


function prcExpress2() {

    let varExpress = document.getElementById("express2").value;

    if (varExpress == 1) {
        express == 1000;
    }

}