

var personajeX = 0;
var personajeY = 5;

mapa =[[1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0]];

function listo(){

document.querySelector(".mapa").innerHTML="";

  for (var i=0;i<14;i++){
    for (var j=0;j<21;j++){
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
        newDiv.classList.add("caminoPisado");
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
  mapa[personajeX][personajeY]=0;
  personajeX++;
  mapa[personajeX][personajeY]=2;

  listo();
}

function moverArriba(){
  console.log("Tecla arriba");
  mapa[personajeX][personajeY]=0;
  personajeX--;
  mapa[personajeX][personajeY]=2;
  listo();
}
function moverIzquierda(){
  console.log("Tecla izquierda");
  mapa[personajeX][personajeY]=0;
  personajeY--;
  mapa[personajeX][personajeY]=2;
  listo();
}
function moverDerecha(){
  console.log("Tecla derecha");
  mapa[personajeX][personajeY]=0;
  personajeY++;
  mapa[personajeX][personajeY]=2;
  listo();
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
