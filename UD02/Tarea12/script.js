

window.onload=init;

function init() {

  document.querySelector('button').addEventListener('click', crearCaja);

}
/* Funcion que añade las cajas y llama añade un evento al hacer click */

function crearCaja(){

  let box = document.createElement('box');
  document.querySelector('container').appendChild(box);
  box.addEventListener('click',evolucion);


}

/* Primera evolucion, añade la clase al ultimo evento */

function evolucion(){
this.classList.add('evoluciona');
this.addEventListener('click', desevolucion);

}



function desevolucion(){
  this.classList.replace('evoluciona','desevoluciona');
  this.addEventListener('click',ultimate);
}

function ultimate(){
  this.classList.replace('desevoluciona','ultimate');
}
