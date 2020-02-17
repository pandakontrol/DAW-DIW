/*
 npx nodemon
sass --watch scss/busqueda.scss:public/css/style.css
*/


// Algunas variables 

let pokemonsPromesa = new Array;
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

// Esta es la funcion de filtrado de pokemons

/*function filtroLetra(elemento) {
    let letra = document.querySelector(`input[name="nombre"]`).value;
    return elemento.properties.nombre.startsWith(letra);
}*/

function buscar() {
    // Obtenemos el JSON que esta definido
    const fetchPromesa = fetch(pokemonUrl);

    // Cuando se resuelva la promesa
    fetchPromesa
        .then(response => {
            // la pasamos a JSON
            return response.json();

            // Y entonces
        })
        .then(respuesta => {
            // Filtramos los resultados con el filtro definido anteriormente
            const resultado = respuesta.name;

            // Una vez tenemos el listado filtrado pasamos a crear

            let listado = document.createElement("div");
            listado.classList.add("resultados2");
            // Por cada uno de ellos
            resultado.forEach(pokemon => {

                let pokemonDiv = document.createElement("div");
                let ubiButton = document.createElement("button");
                ubiButton.classList.add("ubiButton");
                ubiButton.innerHTML = "Ubicacion";
                pokemonDiv.classList.add("pokemon");

                pokemonDiv.innerHTML = "<img src=" + pokemon.properties.boceto + ">" + pokemon.properties.nombre;

                pokemonDiv.appendChild(ubiButton);
                // Lo anyadimos
                listado.appendChild(pokemonDiv);

            });
            // Establecemos el listado en la Web
            document.querySelector(".resultados").innerHTML = "";
            document.querySelector(".resultados").appendChild(listado);
        });
}

function init() {

    // Evento en el boton de buscar 
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

}

// The mother of the lamb.
window.onload = init;