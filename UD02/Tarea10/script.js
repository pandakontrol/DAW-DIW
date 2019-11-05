

function mover() {
  document.querySelector('button').addEventListener('click',transicion);
}

function transicion() {

 let cajas = document.querySelectorAll('.caja');

 cajas.forEach(cajas => cajas.classList.toggle('transition'));

}

mover();
