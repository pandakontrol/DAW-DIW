/* JINX DRUMKIT JAVASCRIPT! */


/* Funcion para que inicie el audio */

function playSound(e){
  const keys = document.querySelectorAll('.key');
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
