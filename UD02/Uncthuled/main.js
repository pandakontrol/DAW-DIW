function listo(){
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
      else if (mapa[i][j]==2) {
        newDiv.classList.add("personaje");
      }
      document.querySelector(".mapa").appendChild(newDiv);
    }
  }

}

window.onload=function(){

  listo()
};

/* FUNCIÓN PARA CAPTURAR EL MOVIMIENTO DE LAS TECLAS */
function moverAbajo(){
  console.log("Tecla abajo");
}

function moverArriba(){
  console.log("Tecla arriba");
}
function moverIzquierda(){
  console.log("Tecla izquierda");
}
function moverDerecha(){
  console.log("Tecla derecha");
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
