var plantillaPokemons ='<div class="col s6 m3">'+'<div class="card">'+'<div class= "card-content center-align">'+'<img class="responsive-img center" src="assets/img/__nombre01__.png">'+'<span class="card-title">__nombre__</span>'+'</div>'+'</div>'+'</div>'

var imagenesPokemon = [
	{
		"imagen": "assets/img/bulbasaur.png",
	}
]

$( document ).ready(function(){
	$('.btn-floating').sideNav();

	$.getJSON("//pokeapi.co/api/v2/pokemon/", 
						function (response) {
		var pokemons = response.results;
		crearPokemons(pokemons);
		mostrarImagen(pokemons);

	});

	function crearPokemons(pokemons) {
		var plantillaFinal = "";
		var newSrc = $(".responsive-img");
		pokemons.forEach(function (pokemon) {
			plantillaFinal += plantillaPokemons.replace("__nombre__", pokemon.name).replace("__nombre01__", pokemon.name);

		});

		$("#pokemon-list").html(plantillaFinal);

	};



});
