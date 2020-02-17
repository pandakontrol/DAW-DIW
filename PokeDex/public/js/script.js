/*
 npx nodemon
sass --watch scss/busqueda.scss:public/css/style.css
*/


// Algunas variables 

let pokemonsPromesa = new Array;
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

// Esta es la funcion de filtrado de pokemons

function filtroLetra(elemento) {
    let letra = document.querySelector(`input[name="buscar"]`).value;
    return elemento.name.startsWith(letra);
}

function buscar() {

    const fetchPromesa = fetch(pokemonUrl);
    let pokemonDiv;
    let nombrePokemon;
    document.querySelector(".resultados").innerHTML = "";
    fetchPromesa
        .then(response => {
            // Pasamos la promesa a JSON
            return response.json();
        })
        .then(respuesta => {
            //Filtramos los resultados con el filtro anterior
            const resultado = respuesta.results.filter(filtroLetra);
            console.log(resultado);
            // Una vez tenemos el listado filtrado pasamos a crear
            // Por cada uno de ellos
            resultado.forEach(pokemon => {
                console.log(pokemon.name);
                pokemonDiv = document.createElement("div");
                nombrePokemon = document.createElement("p");

                nombrePokemon.innerText = pokemon.name;
                pokemonDiv.classList.add("pokemon");
                //pokemonDiv.innerHTML = "<img src=" + pokemon.results.name + ">";
                // Lo anyadimos
                //  listado.appendChild(fallaDiv);
                pokemonDiv.appendChild(nombrePokemon);

                document.querySelector(".resultados").appendChild(pokemonDiv);
            });
            // Establecemos el listado en la Web


        });
}


function init() {

    // Evento en el boton de buscar 
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

}

// The mother of the lamb.
window.onload = init;