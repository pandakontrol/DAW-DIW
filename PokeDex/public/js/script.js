/*
 npx nodemon
sass --watch scss/busqueda.scss:public/css/style.css
*/


// Algunas variables 

let arrayPokemon = [];
let arrayPokemonPro = [];

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

// Esta es la funcion de filtrado de pokemons

function filtroLetra(elemento) {
    let letra = document.querySelector(`input[name="buscar"]`).value;
    return elemento.name.startsWith(letra);
}

function buscar() {
    console.log(arrayPokemon[0]);
    const fetchPromesa = fetch(pokemonUrl);
    let pokemonDiv;
    let nombrePokemon;
    let imgPokemon;

    document.querySelector(".resultados").innerHTML = "";
    fetchPromesa
        .then(response => {
            // Pasamos la promesa a JSON
            return response.json();
        })
        .then(respuesta => {
            //Filtramos los resultados con el filtro anterior
            const resultado = respuesta.results.filter(filtroLetra);
            //console.log(resultado);
            // Una vez tenemos el listado filtrado pasamos a crear
            // Por cada uno de ellos
            arrayPokemon.forEach(pokemon => {
                console.log(pokemon);
                pokemonDiv = document.createElement("div");
                nombrePokemon = document.createElement("p");
                imgPokemon = document.createElement("img");

                imgPokemon.setAttribute("src", pokemon.sprites.front_default);
                console.log(imgPokemon);
                nombrePokemon.innerText = pokemon.name;
                pokemonDiv.classList.add("pokemon");

                // Lo añadimos
                pokemonDiv.appendChild(imgPokemon);
                pokemonDiv.appendChild(nombrePokemon);

                document.querySelector(".resultados").appendChild(pokemonDiv);
            });
            // Establecemos el listado en la Web


        });
}
// FUNCION DE PROMESAS PARA LOS POKEMONS
function promesaPokemon(url) {
    return fetch(url).then(res => res.json()).then(resp => {

        return resp;
    });

}

function init() {

    // Evento en el boton de buscar 
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

    const fetchPromesa = fetch(pokemonUrl);
    fetchPromesa.then(response => {
        return response.json();
    }).then(respuesta => {

        respuesta.results.forEach(pokemon => {
            arrayPokemonPro.push(promesaPokemon(pokemon.url));

        });

        Promise.all(arrayPokemonPro).then(pokemon => {
            arrayPokemon.push(...pokemon);

        });


    });






}

// The mother of the lamb.
window.onload = init;