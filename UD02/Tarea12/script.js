

window.onload=init;

function init() {

  document.querySelector('button').addEventListener('click', crearCaja);

}

function crearCaja(){

  let box = document.createElement('box');
  document.querySelector('container').appendChild(box);
  box.addEventListener('click',evolucion);


}

function evolucion(){
this.classList.add('evoluciona');
this.addEventListener('click',desevolucion);

}

function desevolucion(){
  this.classList.replace('evoluciona','desevoluciona');

}

function ultimate(){


}
