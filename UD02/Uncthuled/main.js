

var personajeX = 0;
var personajeY = 5;

mapa =[[1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

function listo(){

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
      }
      document.querySelector(".mapa").appendChild(newDiv);
    }
  }
  document.addEventListener('keydown', capturarMovimiento);
}

window.onload=function(){

  listo()
};

/* FUNCIÓN PARA CAPTURAR EL MOVIMIENTO DE LAS TECLAS */

function moverAbajo(){
  console.log("Tecla abajo");
  if (mapa[personajeX+1][personajeY] != 1) {
    /* El número 5 pertenece a las huellasAbajo que deja el personaje */
    mapa[personajeX][personajeY]=5;
    personajeX++;
    mapa[personajeX][personajeY]=2;
    listo();
  }

}

function moverArriba(){
  console.log("Tecla arriba");
  if (mapa[personajeX-1][personajeY] != 1) {
    /* El número 4 pertenece a las huellasArriba que deja el personaje */
    mapa[personajeX][personajeY]=4;
    personajeX--;
    mapa[personajeX][personajeY]=2;
    listo();
  }

}
function moverIzquierda(){
  console.log("Tecla izquierda");
  if (mapa[personajeX][personajeY-1] != 1) {
    /* El número 6 pertenece a las huellasIzquierda que deja el personaje */
    mapa[personajeX][personajeY]=6;
    personajeY--;
    mapa[personajeX][personajeY]=2;
    listo();
  }

}
function moverDerecha(){
  console.log("Tecla derecha");
  // La condicion IF es para que cuando vea un 1 en el mapa( bloque) no avance
  if (mapa[personajeX][personajeY+1] != 1) {
    console.log(personajeY);
    /* El número 7 pertenece a las huellasDerecha que deja el personaje */
    mapa[personajeX][personajeY]=7;
    personajeY++;
    mapa[personajeX][personajeY]=2;
    listo();
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
