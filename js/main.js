/*Plantillas para agregar dinamicamente pokemones y sus modales*/

var plantillaPokemons = '<div class="col s6 m3" data-url="//pokeapi.co/api/v2/pokemon-species/__numero-pokemon__/">' + '<div class="card hoverable pokemones">' + '<div class= "card-content center-align">' + 
		'<img class="responsive-img center" src="assets/img/__nombre-pokemon__.png" alt="img-pokemon">' + '<h6><a href="#modal">__nombre__</a></h6>' + '</div>' + '</div>' + '</div>';




var cargarPagina = function () {
	$('.btn-floating').sideNav();
	$('.modal').modal();
	$("#next").click(siguientesPokemons)
	$.getJSON("//pokeapi.co/api/v2/pokemon/", function (response) {
		var pokemons = response.results;
		var urlNext = response.next;
		$("#next").attr("data-url", urlNext);
		crearPokemons(pokemons);
	});

};

var siguientesPokemons = function (){
	var url = $("#next").data("url");
	$.getJSON(url, function(response){
		var pokemons =response.results;
		crearPokemons(pokemons)
	});
};
var crearPokemons = function (pokemons) {
	var plantillaFinal = "";

	pokemons.forEach( function (pokemon, index) {
		plantillaFinal += plantillaPokemons.replace("__nombre__", pokemon.name).replace("__nombre-pokemon__", pokemon.name).replace("__nombre-moda__", pokemon.name).replace("__numero-pokemon__", index+1).replace("__nombre-modal__",pokemon.name);

	});
	$("#pokemon-list").html(plantillaFinal);

}

var letraMayuscula = function () {
	var str = $("h6");
	str.each(function () {
		$(this).text($(this).text().charAt(0).toUpperCase() + $(this).text().slice(1).toLowerCase());
	});
}

var datosPokemon = function () {

	var url = $(this).data("url");

	var nombrePokemon = $(this)[0].textContent
	$.getJSON(url,function (response) {
		console.log(response);
		var pokemonColor = response.color;
		var pokemonGenera = response.genera[0];
		var pokemonHabitat = response.habitat.name;
		var pokemonShape = response.shape;

		crearModalPokemons(nombrePokemon, nombrePokemon, pokemonColor, pokemonHabitat, pokemonShape, pokemonGenera);
	});

};

var crearModalPokemons = function (nombreImagen, nombrePokemon, pokemonColor, pokemonHabitat, pokemonShape, pokemonGenera) {
	$("#imagen-pokemon").attr("src","assets/img/"+ nombreImagen +".png")
	$("#nombre-pokemon").text(nombrePokemon);
	$("#color-pokemon").text(pokemonColor.name);
	$("#habitat-pokemon").text(pokemonHabitat);
	$("#shape-pokemon").text(pokemonShape.name);
	$("#genera-pokemon").text(pokemonGenera.genus);
};

$(document).on("click", ".m3", datosPokemon);
$(document).ready(cargarPagina); 