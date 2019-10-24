/* UNCTHULED GAME! */


var personajeX = 0;
var personajeY = 5;

var momiaX = 13;
var momiaY = 4;

mapa =[[9,9,9,9,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,9],
[9,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]];

function dibujarMapa(){

  document.querySelector(".mapa").innerHTML="";

  for (var i=0;i<15;i++){
    for (var j=0;j<23;j++){
      var newDiv = document.createElement("div");
      if (mapa[i][j]==0){
        newDiv.classList.add("camino");
      }else if(mapa[i][j]==1){
        newDiv.classList.add("pilar");
      } else if(mapa[i][j]==3){
        newDiv.classList.add("momia");
      }
      else if (mapa[i][j]==2){
        newDiv.classList.add("personaje");
      }
      else if (mapa[i][j]==4){
        newDiv.classList.add("huellasArriba");
      }
      else if (mapa[i][j]==5){
        newDiv.classList.add("huellasAbajo");
      }
      else if (mapa[i][j]==6){
        newDiv.classList.add("huellasIzquierda");
      }
      else if (mapa[i][j]==7){
        newDiv.classList.add("huellasDerecha");
      }else if (mapa[i][j]==9){
        newDiv.classList.add("muro");
      }
      document.querySelector(".mapa").appendChild(newDiv);
    }
  }

}
function listo(){
  dibujarMapa();
  setInterval(moverMomia,500);
  document.addEventListener('keydown', capturarMovimiento);

}
window.onload=function(){

  listo();

};

/* FUNCIÓN PARA CAPTURAR EL MOVIMIENTO DE LAS TECLAS */

function moverAbajo(){
  console.log("Tecla abajo");
  if (mapa[personajeX+1][personajeY] != 1 &&  mapa[personajeX+1][personajeY] != 9) {
    /* El número 5 pertenece a las huellasAbajo que deja el personaje */
    mapa[personajeX][personajeY]=5;
    personajeX++;
    mapa[personajeX][personajeY]=2;
    dibujarMapa();

  }

}

function moverArriba(){
  console.log("Tecla arriba");
  if (mapa[personajeX-1][personajeY] != 1 && mapa[personajeX-1][personajeY] != 9) {
    /* El número 4 pertenece a las huellasArriba que deja el personaje */
    mapa[personajeX][personajeY]=4;
    personajeX--;
    mapa[personajeX][personajeY]=2;
    dibujarMapa();
  }

}
function moverIzquierda(){
  console.log("Tecla izquierda");
  if (mapa[personajeX][personajeY-1] != 1 && mapa[personajeX][personajeY-1] != 9) {
    /* El número 6 pertenece a las huellasIzquierda que deja el personaje */
    mapa[personajeX][personajeY]=6;
    personajeY--;
    mapa[personajeX][personajeY]=2;
    dibujarMapa();
  }

}
function moverDerecha(){
  console.log("Tecla derecha");
  // La condicion IF es para que cuando vea un 1 en el mapa( bloque) no avance
  if (mapa[personajeX][personajeY+1] != 1 && mapa[personajeX][personajeY+1] != 9) {
    console.log(personajeY);
    /* El número 7 pertenece a las huellasDerecha que deja el personaje */
    mapa[personajeX][personajeY]=7;
    personajeY++;
    mapa[personajeX][personajeY]=2;
    dibujarMapa();
  }

}


function capturarMovimiento(n){
  var key = n.keyCode;

  switch (key) {

    case 37:
    moverIzquierda();
    break;

    case 38:
    moverArriba();
    break;

    case 39:
    moverDerecha();
    break;

    case 40:
    moverAbajo();
    break;

  }
}

/* FUNCIÓN PARA MOVER LA MOMIA */

function moverMomia() {
  var numeroRandom = Math.floor(Math.random() * 3);
  switch (numeroRandom) {

    // Caso hacia arriba
    case 0:
    if (mapa[momiaX-1][momiaY] != 1 && mapa[momiaX-1][momiaY] != 9) {
      mapa[momiaX][momiaY]=0;
      momiaX--;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
    }
    break;

    // Caso hacia abajo
    case 1:
    if (mapa[momiaX+1][momiaY] != 1 && mapa[momiaX+1][momiaY] != 9) {
      mapa[momiaX][momiaY]=0;
      momiaX++;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
    }
    break;

    // Caso hacia la izquierda
    case 2:
    if (mapa[momiaX][momiaY-1] != 1 && mapa[momiaX][momiaY-1] != 9) {
      mapa[momiaX][momiaY]=0;
      momiaY--;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
    }
    break;

    // Caso hacia la derecha
    case 3:
    if (mapa[momiaX][momiaY+1] != 1 && mapa[momiaX][momiaY+1] != 9) {
      mapa[momiaX][momiaY]=0;
      momiaY++;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
    }
    break;

  }
}
 /*  FUNCIÓN PARA CAPTURAR LOS PILARES RODEADOS */

 function pilarRodeado() {

 }
