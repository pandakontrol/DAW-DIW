/* JINX DRUMKIT JAVASCRIPT! */


/* Funcion para que inicie el audio */

function playSound(e){

 /* Defino dos constantes para capturar el audio  las teclas pulsadas */

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  audio.play();
  audio.currentTime=0;

/* Una vez presionemos las teclas que ya tenemos asignadas con data-key añadimos la clase transition */

  keyPressed.classList.add('transition');

}

/* Funcion que borra la transición creada */

function removeTransition() {
  this.classList.remove('transition');
}

/* Añadimos un evento a toda la ventana, que cuando pulsemos la tecla ejecute la función llamada */
window.addEventListener('keydown', playSound);

/* Defino constante de todos los .key del html para poder hacer el forEach */
const keys = document.querySelectorAll('.key');
keys.forEach(i => { i.addEventListener('transitionend',removeTransition)});
