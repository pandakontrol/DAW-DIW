// Simple script to use with datosAbiertos

// Author : Angel Berlanas Vicente
//         <berlanas_ang@gva.es>
// This script is licensed under GPLv3 or higher

// Algunos valores
let secciones = new Array;
const fallasUrl =
  "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

function filtroLetra(elemento) {
  let letra = document.querySelector(`input[name="nombre"]`).value;
  return elemento.properties.nombre.startsWith(letra);
}

function buscar() {
  // Obtenemos el JSON que esta definido
  const fetchPromesa = fetch(fallasUrl);

  // Cuando se resuelva la promesa
  fetchPromesa
    .then(response => {
      // la pasamos a JSON
      return response.json();
      // Y entonces
    })
    .then(respuesta => {
      // Filtramos los resultados con el filtro definido anteriormente
      const resultado = respuesta.features.filter(filtroLetra);

      // Una vez tenemos el listado filtrado pasamos a crear

      let listado = document.createElement("div");
      listado.classList.add("resultados2");
      // Por cada uno de ellos
      resultado.forEach(falla => {

        let fallaDiv = document.createElement("div");
        let ubiButton = document.createElement("button");
        ubiButton.classList.add("ubiButton");
        ubiButton.innerHTML = "Ubicacion";
        fallaDiv.classList.add("falla");

        fallaDiv.innerHTML = "<img src=" + falla.properties.boceto + ">" + falla.properties.nombre;

        fallaDiv.appendChild(ubiButton);
        // Lo anyadimos
        listado.appendChild(fallaDiv);

      });
      // Establecemos el listado en la Web
      document.querySelector(".resultados").innerHTML = "";
      document.querySelector(".resultados").appendChild(listado);
    });
}

function removeImg() {

  document.querySelector(".falleros").classList.remove;

}

function init() {
  // Binding de los eventos correspondientes.

  // Click en el boton de buscar
  document.querySelector(`input[type="button"]`).addEventListener("click", buscar);
  document.querySelector(`input[type="button"]`).addEventListener("click", removeImg);


  const fetchPromesa = fetch(fallasUrl);

  fetchPromesa.then(response => {
    return response.json();
  }).then(respuesta => {
    const resultado = respuesta.features;

    resultado.forEach(falla => {

      if (!secciones.includes(falla.properties.seccion)) secciones.push(falla.properties.seccion);
      if (!secciones.includes(falla.properties.seccion_i)) secciones.push(falla.properties.seccion_i);

    });
    secciones.sort();
    lanzarSeccion();

  });

}

function lanzarSeccion() {
  let desSeccion = document.getElementById("secciones");

  for (let index = 0; index < secciones.length; index++) {
    var option = document.createElement("option");
    option.text = secciones[index];
    desSeccion.add(option);

  }
}


// The mother of the lamb.
window.onload = init;
