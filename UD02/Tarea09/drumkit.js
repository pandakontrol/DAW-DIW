var key = document.querySelectorAll('.key');

/* Funcion para que inicie el audio */


function playSound(e){

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  audio.play();
  audio.currentTime=0;

}

/* Funcion que borra la transición creada */

function removeTransition() {
  this.classList.remove('transition');
}

.key
window.addEventListener('keydown', playSound)
