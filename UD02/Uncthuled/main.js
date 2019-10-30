/* UNCTHULED GAME! */

var contadorSalida = 0;
var personajeX = 0;
var personajeY = 5;
var vidas = 2;
var momiaX = 13;
var momiaY = 4;
var lista = [1,1,1,2,1,1,1,1,3,1,1,1,4,1,1,1,5,1,1,1];

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
      }else if (mapa[i][j]==10){
        newDiv.classList.add("nada");
      }else if (mapa[i][j]==11){
        newDiv.classList.add("matarMomia");
      }else if (mapa[i][j]==12){
        newDiv.classList.add("salida1");
      }else if (mapa[i][j]==13){
        newDiv.classList.add("salida2");
      }else if (mapa[i][j]==14){
        newDiv.classList.add("momias");
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
  //console.log("Tecla abajo");
  if (mapa[personajeX+1][personajeY] != 1 && mapa[personajeX+1][personajeY] != 9 && mapa[personajeX+1][personajeY] != 10 && mapa[personajeX+1][personajeY] != 11 && mapa[personajeX+1][personajeY] != 12 && mapa[personajeX+1][personajeY] != 13 && mapa[personajeX+1][personajeY] != 14) {
    //console.log('La posicion X es: ' , personajeX);
    /* El número 5 pertenece a las huellasAbajo que deja el personaje */
    mapa[personajeX][personajeY]=5;
    personajeX++;
    mapa[personajeX][personajeY]=2;
    pilarRodeado();
    dibujarMapa();
    matarMomia();

  }

}

function moverArriba(){
  //console.log("Tecla arriba");
  if (mapa[personajeX-1][personajeY] != 1 && mapa[personajeX-1][personajeY] != 9 && mapa[personajeX-1][personajeY] != 10 && mapa[personajeX-1][personajeY] != 11 && mapa[personajeX-1][personajeY] != 12 && mapa[personajeX-1][personajeY] != 13 && mapa[personajeX-1][personajeY] != 14) {
    //console.log('La posicion X es: ' , personajeX);
    /* El número 4 pertenece a las huellasArriba que deja el personaje */
    mapa[personajeX][personajeY]=4;
    personajeX--;
    mapa[personajeX][personajeY]=2;
    pilarRodeado();
    dibujarMapa();
    matarMomia();
  }

}
function moverIzquierda(){
  //console.log("Tecla izquierda");
  if (mapa[personajeX][personajeY-1] != 1 && mapa[personajeX][personajeY-1] != 9 && mapa[personajeX][personajeY-1] != 10 && mapa[personajeX][personajeY-1] != 11 && mapa[personajeX][personajeY-1] != 12 && mapa[personajeX][personajeY-1] != 13 && mapa[personajeX][personajeY-1] != 14) {
    //  console.log('La posicion Y es: ' , personajeY);
    /* El número 6 pertenece a las huellasIzquierda que deja el personaje */
    mapa[personajeX][personajeY]=6;
    personajeY--;
    mapa[personajeX][personajeY]=2;

    pilarRodeado();
    dibujarMapa();
    matarMomia();
  }

}
function moverDerecha(){
  //console.log("Tecla derecha");
  // La condicion IF es para que cuando vea un 1 en el mapa( bloque) no avance
  if (mapa[personajeX][personajeY+1] != 1 && mapa[personajeX][personajeY+1] != 9 && mapa[personajeX][personajeY+1] != 10 && mapa[personajeX][personajeY+1] != 11 && mapa[personajeX][personajeY+1] != 12 && mapa[personajeX][personajeY+1] != 13 && mapa[personajeX][personajeY+1] != 14) {
    //console.log('La posicion Y es: ' , personajeY);
    /* El número 7 pertenece a las huellasDerecha que deja el personaje */
    mapa[personajeX][personajeY]=7;
    personajeY++;
    mapa[personajeX][personajeY]=2;
    pilarRodeado();
    dibujarMapa();
    matarMomia();
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

/* FUNCIÓN PARA MOVER LA MOMIA RANDOM */

function moverMomia() {
  var numeroRandom = Math.floor(Math.random() * 3);
  switch (numeroRandom) {

    // Caso hacia arriba
    case 0:
    if (mapa[momiaX-1][momiaY] != 1 && mapa[momiaX-1][momiaY] != 9 && mapa[momiaX-1][momiaY] != 10 && mapa[momiaX-1][momiaY] != 11 && mapa[momiaX-1][momiaY] != 12 && mapa[momiaX-1][momiaY] != 13 && mapa[momiaX-1][momiaY] != 14) {
      mapa[momiaX][momiaY]=0;
      momiaX--;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
      matarMomia();
    }
    break;

    // Caso hacia abajo
    case 1:
    if (mapa[momiaX+1][momiaY] != 1 && mapa[momiaX+1][momiaY] != 9 && mapa[momiaX+1][momiaY] != 10 && mapa[momiaX+1][momiaY] != 11 && mapa[momiaX+1][momiaY] != 12 && mapa[momiaX+1][momiaY] != 13 && mapa[momiaX+1][momiaY] != 14) {
      mapa[momiaX][momiaY]=0;
      momiaX++;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
      matarMomia();
    }
    break;

    // Caso hacia la izquierda
    case 2:
    if (mapa[momiaX][momiaY-1] != 1 && mapa[momiaX][momiaY-1] != 9 && mapa[momiaX][momiaY-1] != 10 && mapa[momiaX][momiaY-1] != 11 && mapa[momiaX][momiaY-1] != 12  && mapa[momiaX][momiaY-1] != 13  && mapa[momiaX][momiaY-1] != 14) {
      mapa[momiaX][momiaY]=0;
      momiaY--;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
      matarMomia();
    }
    break;

    // Caso hacia la derecha
    case 3:
    if (mapa[momiaX][momiaY+1] != 1 && mapa[momiaX][momiaY+1] != 9 && mapa[momiaX][momiaY+1] != 10 && mapa[momiaX][momiaY+1] != 11 && mapa[momiaX][momiaY+1] != 12 && mapa[momiaX][momiaY+1] != 13 && mapa[momiaX][momiaY+1] != 14) {
      mapa[momiaX][momiaY]=0;
      momiaY++;
      mapa[momiaX][momiaY]=3;
      dibujarMapa();
      matarMomia();
    }
    break;

  }
}
/*  FUNCIÓN PARA CAPTURAR LOS PILARES RODEADOS */

function pilarRodeado() {
  var X = 2;
  var Y = 2;

  /* Lo que hace este for es comprobar la primera posicion de cada pilar,
  y el segundo for calcula la primera posicion del pilar hacia abajo. */

  for (var i = 1; i < 6; i++) {
    X=2;
    for (var j = 1; j < 5; j++) {
      comprobar(X,Y);

      X+=3;
    }
    Y+=4;
  }

}

function comprobar(X,Y) {
  var cont = 0;
  comprobarX= X;
  comprobarY= Y;
  /* Lista objetos
  10. Nada
  11. Matar momia
  12. Salida1
  13. Salida2
  14. Momia */

  if(mapa[comprobarX][comprobarY] > 9 ){

  }else{
    /* Posiciones de pisado son 4, 5, 6 y 7. */

    if((mapa[comprobarX-1][comprobarY-1]== 4) || (mapa[comprobarX-1][comprobarY-1]== 5) || (mapa[comprobarX-1][comprobarY-1]== 6) || (mapa[comprobarX-1][comprobarY-1]== 7) ){
      cont++;

    }
    if((mapa[comprobarX-1][comprobarY]== 4) || (mapa[comprobarX-1][comprobarY]== 5) || (mapa[comprobarX-1][comprobarY]== 6) || (mapa[comprobarX-1][comprobarY]== 7)){
      cont++;

    }
    if((mapa[comprobarX-1][comprobarY+1] == 4) || (mapa[comprobarX-1][comprobarY+1] == 5) || (mapa[comprobarX-1][comprobarY+1] == 6) || (mapa[comprobarX-1][comprobarY+1] == 7)){
      cont++;

    }
    if((mapa[comprobarX-1][comprobarY+2]== 4) || (mapa[comprobarX-1][comprobarY+2]== 5) || (mapa[comprobarX-1][comprobarY+2]== 6) || (mapa[comprobarX-1][comprobarY+2]== 7)){
      cont++;

    }
    if((mapa[comprobarX-1][comprobarY+3] == 4) || (mapa[comprobarX-1][comprobarY+3] == 5) || (mapa[comprobarX-1][comprobarY+3] == 6) || (mapa[comprobarX-1][comprobarY+3] == 7)){
      cont++;

    }
    if((mapa[comprobarX][comprobarY-1] == 4) || (mapa[comprobarX][comprobarY-1] == 5) || (mapa[comprobarX][comprobarY-1] == 6) || (mapa[comprobarX][comprobarY-1] == 7)){
      cont++;

    }
    if((mapa[comprobarX][comprobarY+3] == 4) || (mapa[comprobarX][comprobarY+3] == 5) || (mapa[comprobarX][comprobarY+3] == 6) || (mapa[comprobarX][comprobarY+3] == 7)){
      cont++;

    }
    if((mapa[comprobarX+1][comprobarY-1] == 4) || (mapa[comprobarX+1][comprobarY-1] == 5) || (mapa[comprobarX+1][comprobarY-1] == 6) || (mapa[comprobarX+1][comprobarY-1] == 7)){
      cont++;
    }
    if((mapa[comprobarX+1][comprobarY+3]== 4) || (mapa[comprobarX+1][comprobarY+3]== 5) || (mapa[comprobarX+1][comprobarY+3]== 6) || (mapa[comprobarX+1][comprobarY+3]== 7)){
      cont++;
    }
    if((mapa[comprobarX+2][comprobarY-1] == 4) || (mapa[comprobarX+2][comprobarY-1] == 5) || (mapa[comprobarX+2][comprobarY-1] == 6) || (mapa[comprobarX+2][comprobarY-1] == 7)){
      cont++;
    }
    if((mapa[comprobarX+2][comprobarY]== 4) || (mapa[comprobarX+2][comprobarY]== 5) || (mapa[comprobarX+2][comprobarY]== 6) || (mapa[comprobarX+2][comprobarY]== 7)){
      cont++
    }
    if((mapa[comprobarX+2][comprobarY+1]== 4) || (mapa[comprobarX+2][comprobarY+1]== 5) || (mapa[comprobarX+2][comprobarY+1]== 6) || (mapa[comprobarX+2][comprobarY+1]== 7)){
      cont++
    }
    if((mapa[comprobarX+2][comprobarY+2] == 4) || (mapa[comprobarX+2][comprobarY+2] == 5) || (mapa[comprobarX+2][comprobarY+2] == 6) || (mapa[comprobarX+2][comprobarY+2] == 7)){
      cont++
    }
    if((mapa[comprobarX+2][comprobarY+3] == 4) || (mapa[comprobarX+2][comprobarY+3] == 5) || (mapa[comprobarX+2][comprobarY+3] == 6) || (mapa[comprobarX+2][comprobarY+3] == 7)){
      cont++
    }


    comprobarX = X;
    comprobarY = Y;
    var ketchup = false;
    var mostaza = false;
    /* En caso de que este rodeado hacemos un random para que pinte aleatoriamente cada pilar. */

    if (cont == 14) {

      var random = Math.floor(Math.random()*lista.length);
      var numero= lista[random];
      var id;

      //console.log(contadorSalida);
      switch (numero){
        case 1:
        var id = 10;
        break;
        case 2:
        var id = 11;
        break;
        case 3:
        var id = 12;
        contadorSalida++;
        break;
        case 4:
        var id = 13;
        contadorSalida++;
        break;
        case 5:
        var id = 14;
        break;

      }
      if (contadorSalida == 2) {
        alert("Puedes pasar de nivel")
      }


      lista.splice(random, 1);

      for (let i = 1; i < 3; i++) {
        comprobarY = Y;
        for (let j = 1; j < 4; j++) {
          mapa[comprobarX][comprobarY]=id;
          dibujarMapa();
          comprobarY++;
        }
        comprobarX++;

      }
    }
  }
}

/* Funcion que detecta que la momia te mata y te reduce las vidas */

function matarMomia(){


  if (mapa[momiaX][momiaY] == mapa[personajeX][personajeY]) {
    vidas--;
  console.log(vidas);

    if (vidas == 0) {
      alert("Te has quedado sin vidas!"")
      setTimeout(recargar,200);
    }

  }

}

function recargar(){
  location.reload();
}
