



$(document).ready(function(){
$('#logo').addClass('d-none');
var altura= $('#logo').offset().top;

var altura2= $('#logo').offset().top;


$(window).on('scroll', function(){

if($(window).scrollTop() > altura){
    $('.menu').addClass('menu-fixed');       
}else{
    $('.menu').removeClass('menu-fixed');
    $('#logo').addClass('d-none');
}

if($(window).scrollTop() > altura2){
  $('.boton').addClass('boton-fixed');
  
}else{
  $('.boton').removeClass('boton-fixed');
  $('#logo').addClass('d-none');
}
});
})






function initMap() {
    // Localizacion UTN
    const uluru = { lat: 10.0069, lng: -84.216 };
    // El mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
    // Marcador UTN
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;








