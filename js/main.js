var plantillaPokemons ='<div class="col s6 m3">'+'<div class="card">'+'<div class= "card-content center-align">'+'<img class="responsive-img center " src="__imagen__">'+'<span class="card-title">__nombre__</span>'+'</div>'+'</div>'+'</div>'

$( document ).ready(function(){
	$('.btn-floating').sideNav();
	
	$.getJSON("http://pokeapi.co/api/v2/pokemon/", 
						function (response) {
		var pokemons = response.results;
		crearPokemons(pokemons);
	});
	
	function crearPokemons(pokemons) {
		var plantillaFinal = "";
		pokemons.forEach(function (pokemon) {
			plantillaFinal += plantillaPokemons.replace("__nombre__", pokemon.name) 
		});
		
		$("#pokemon-list").html(plantillaFinal);

	};

})
