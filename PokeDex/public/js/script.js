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

            //  let listado = document.createElement("div");
            //listado.classList.add("resultados2");
            // Por cada uno de ellos
            resultado.forEach(falla => {

                // let fallaDiv = document.createElement("div");
                // fallaDiv.classList.add("falla");
                // fallaDiv.innerHTML = "<img src=" + falla.properties.boceto + ">" + falla.properties.nombre;
                // Lo anyadimos
                //  listado.appendChild(fallaDiv);

            });
            // Establecemos el listado en la Web
            //document.querySelector(".resultados").innerHTML = "";
            // document.querySelector(".resultados").appendChild(listado);
        });
}


function init() {

    // Evento en el boton de buscar 
    document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

}

// The mother of the lamb.
window.onload = init;