/*Plantilla para agregar dinamicamente los pokemons*/
var plantillaPokemons ='<div class="col s6 m3">'+'<div class="card">'+'<div class= "card-content center-align">'+'<img class="responsive-img center" src="assets/img/__nombre01__.png">'+'<h6>__nombre__</h6>'+'</div>'+'</div>'+'</div>'

var cargarPagina = function (){
	$('.btn-floating').sideNav();

	$.getJSON("//pokeapi.co/api/v2/pokemon/", function (response) {
		var pokemons = response.results;
		crearPokemons(pokemons);
		letraMayuscula ()
	});
}


function crearPokemons(pokemons) {
	var plantillaFinal = "";
	var newSrc = $(".responsive-img");
	pokemons.forEach(function (pokemon) {
		plantillaFinal += plantillaPokemons.replace("__nombre__", pokemon.name).replace("__nombre01__", pokemon.name);
	});

	$("#pokemon-list").html(plantillaFinal);

};

function letraMayuscula (){
	var str = $("h6");
	str.each(function() {
		$(this).text($(this).text().charAt(0).toUpperCase() + $(this).text().slice(1).toLowerCase());
	});
}



$( document ).ready(cargarPagina);