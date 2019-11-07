

window.onload=init;

function init() {

  document.querySelector('button').addEventListener('click', crearCaja);

}

function crearCaja(){

  let box = document.createElement('box');
  document.querySelector('container').appendChild(box);

}
