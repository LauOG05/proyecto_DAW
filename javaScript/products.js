
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


    selection();

}

function onError(jqXHR, textStatus, errorThrow) {
    alert("mensaje de error: " + errorThrow + "\nURL: " + urlAPI);
}



function cargarTodo() {

    let listContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.queques[0].tradicionales.forEach(queque => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });



    datos.queques[1].mini.forEach(queque => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });




    datos.tresLeches.forEach(prd => {
        hilera += " <div class='col-lg-4 text-center mb-3'>";
        hilera += " <div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += " </div>";

    });


    datos.tresLeches.forEach(prd => {
        hilera += " <div class='col-lg-4 text-center mb-3'>";
        hilera += " <div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += " </div>";

    });

    datos.cajasEspeciales.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });

    datos.navidenios.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });


    datos.chessecake.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });


    datos.cupcakes.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });


    datos.mesaDulce.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });



    listContainer.innerHTML = hilera;


    console.log(hilera);
}



function selection(){


    var valor = document.getElementById("tipoPrd").value;

    if (valor == 1) {
        let listContainer = document.getElementById("listProducts");


        let hilera = " <div id='style-sub' class='col-lg-12 m-auto text-center mt-3 mb-3 '><h3>Tradicionales</h3></div>";


        datos.queques[0].tradicionales.forEach(queque => {
            hilera += "<div class='col-lg-4 text-center mb-3'>";
            hilera += "<div class='card borde-0  bg-light mb-2'>";
            hilera += "<div class='card-body'>";
            hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
            hilera += "</div>";
            hilera += "</div>";
            hilera += "<h6 id='nombre'></h6>";
            hilera += "</div>";

        });

        hilera += " <div id='style-sub' class='col-lg-12 m-auto text-center mt-5 mb-3'><h3>Mini queques</h3></div>";



        datos.queques[1].mini.forEach(queque => {
            hilera += "<div class='col-lg-4 text-center mb-3'>";
            hilera += "<div class='card borde-0  bg-light mb-2'>";
            hilera += "<div class='card-body'>";
            hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
            hilera += "</div>";
            hilera += "</div>";
            hilera += "<h6 id='nombre'></h6>";
            hilera += "</div>";

        });

        hilera += " <div id='style-sub' class='col-lg-12 m-auto text-center mt-5 mb-3 '><h3>Fondant</h3></div>";


        datos.queques[2].fondant.forEach(queque => {
            hilera += "<div class='col-lg-4 text-center mb-3'>";
            hilera += "<div class='card borde-0  bg-light mb-2'>";
            hilera += "<div class='card-body'>";
            hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
            hilera += "</div>";
            hilera += "</div>";
            hilera += "<h6 id='nombre'></h6>";
            hilera += "</div>";

        });

        listContainer.innerHTML = "";

        listContainer.innerHTML = hilera;


    }
    if (valor == 2) {
        procesarDataCajasEspeciales();
    }
    if (valor == 3) {
        procesarDataMesaDulce();
    }
    if (valor == 4) {
        procesarDataNavidenios();
    }
    if (valor == 5) {
        procesarDataChessecake();
    }
    if (valor == 6) {
        procesarDataTresLeches();
    }
    if (valor == 7) {
        procesarDataCupcakes();
    }




}



/*<div class="col-lg-4 text-center">
          <div class="card borde-0  bg-light mb-2">
            <div class="card-body">
              <img src="/imgs/tresLeches.jpg" width="200px" height="200px" class="img-luid" alt="">
            </div>
          </div>
          <h6 id="nombre"></h6>
          <p id="precio" class="text-center"></p>
 </div>*/



function procesarDataQuequeTradcionales() {

    let listContainer = document.getElementById("listProducts");


    let hilera = " <div class='col-lg-12 m-auto text-center mt-3 mb-3 bg-light'><h3>Queques Tradicionales</h3></div>";


    datos.queques[0].tradicionales.forEach(queque => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });






    listContainer.innerHTML = "";

    listContainer.innerHTML = hilera;


    console.log(hilera);

}





function procesarDataQuequeMinis() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = " <div class='col-lg-12 m-auto text-center mt-3 mb-3 bg-light'><h3>Mini queques</h3></div>";


    datos.queques[1].mini.forEach(queque => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });


    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}




function procesarDataQuequeFondant() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = " <div class='col-lg-12 m-auto text-center mt-3 mb-3 bg-light'><h3>Fondant</h3></div>";


    datos.queques[2].fondant.forEach(queque => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + queque.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });



    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}



function procesarDataTresLeches() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.tresLeches.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });


    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}



function procesarDataCajasEspeciales() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.cajasEspeciales.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });



    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}


function procesarDataNavidenios() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.navidenios.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });



    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}





function procesarDataChessecake() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.chessecake.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });


    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}




function procesarDataCupcakes() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.cupcakes.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";

        hilera += "</div>";

    });



    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}




function procesarDataMesaDulce() {

    let comboContainer = document.getElementById("listProducts");


    let hilera = "";


    datos.mesaDulce.forEach(prd => {
        hilera += "<div class='col-lg-4 text-center mb-3'>";
        hilera += "<div class='card borde-0  bg-light mb-2'>";
        hilera += "<div class='card-body'>";
        hilera += "<img src='" + prd.img + "' width='200px' height='200px' class='img-luid'>";
        hilera += "</div>";
        hilera += "</div>";
        hilera += "<h6 id='nombre'></h6>";
        hilera += "</div>";

    });



    comboContainer.innerHTML = "";

    comboContainer.innerHTML = hilera;


    console.log(hilera);

}



function mostrarTodo() {
    let tipo = document.getElementById("tradicionales").value;

/* <div class="carousel-item active">
            <img src="imgs/caja1.jpg" alt="Los Angeles" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="imgs/caja2.jpg" alt="Chicago" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="imgs/caja3.jpg" alt="New York" class="d-block w-100">
          </div>*/



          let hilera = "";


          datos.queque[0].tradicionales.forEach(prd => {
              hilera += "<img src='"+prd.img+"'  class='d-block w-100'>";
              hilera += " </div>";
              hilera += "<div class='carousel-item'>";
              hilera += " <img src='"+prd.img+"'  class='d-block w-100'>";
              hilera += "</div>";
              hilera += "</div>";
              hilera += "<div class='carousel-item'>";
              hilera += "<img src='"+prd.img+"'  class='d-block w-100'>";
              hilera += "</div>";
      
          });
      
      
      
          comboContainer.innerHTML = "";
      
          comboContainer.innerHTML = hilera;
      
      
          console.log(hilera);


}

