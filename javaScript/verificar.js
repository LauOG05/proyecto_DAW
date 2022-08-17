


  var varForm = document.getElementById("formulario").value;



function valida() {

  try {
   
    if (document.getElementById("inputEmail").value == "") throw "Debe escribir el correo";
    if (document.getElementById("inputName").value == "") throw "Debe escribir el nombre";
    if (document.getElementById("birthday").value == "") throw "Debe seleccionar una fecha";
    if (document.getElementById("rango").value == "0") throw "Debe tener un rango mayor a 0";
    if (document.getElementById("primaria").checked &&
      document.getElementById("secundaria").checked || document.getElementById("secundaria").checked &&
      document.getElementById("universidad").checked || document.getElementById("primaria").checked &&
      document.getElementById("universidad").checked) throw "Debe seleccionar un solo grado académico";

      swal("Informacion!", "Enviando...", "info");
   

  } catch (error) {
    window.alert(error);
  
  }
 
}

 

function enviar(){
  if(valida()){

  
    varForm.action = "https://formsubmit.co/1e9ebd902afd358528b1c9227c096dc8";
    varForm.method = "POST";
  
   

  document.getElementById("inputEmail").value = "";
  document.getElementById("inputName").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("secundaria").checked = false;
  document.getElementById("universidad").checked = false;
  document.getElementById("mensaje").value = "";

}
 
}






$(function () {

  $('#birthday').on('change', calcularEdad);
});

function calcularEdad() {
  $('#tetoFecha').removeClass("d-none");
  fecha = $(this).val();
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  $('#age').val("Edad: " + edad + " años");

}





