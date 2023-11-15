//tp4
//Giorello, Matias
//Legajo:88104/4
//Video explicativo:https://youtu.be/ES1OywguqCY
let pantallaActual = "inicio";
let celda = [];
let cant = 15;
let tam;
let px, py;
let tamcuadrado;
let elipses = [];
let ganaste = false;
let contadorSegundos = 0;
let contadorActivo = true;
let inicioContador = 0;
let perdiste = false;
let imagenes = [];

function preload() {
  imagenes[0] = loadImage('data/fondoinicio.png');
  imagenes[1] = loadImage('data/fondofinal.png');
}

function setup() {
  createCanvas(600, 600);
  tam = width / cant;
  tamcuadrado = tam * 0.8;
  crearLaberinto();
  px = 1;
  py = 1;

  elipses.push([3, 13]);
  elipses.push([4, 10]);
  elipses.push([6, 3]);
  elipses.push([10, 13]);
  elipses.push([13, 1]);

  frameRate(60);
  inicioContador = millis();
}

function keyPressed() {
  if (pantallaActual === "juego") {
    if (keyCode === RIGHT_ARROW && celda[px + 1][py] === 0 && px < cant - 1) {
      px++;
    }
    if (keyCode === LEFT_ARROW && celda[px - 1][py] === 0 && px > 0) {
      px--;
    }
    if (keyCode === UP_ARROW && celda[px][py - 1] === 0 && py > 0) {
      py--;
    }
    if (keyCode === DOWN_ARROW && celda[px][py + 1] === 0 && py < cant - 1) {
      py++;
    }

    if (key === 'r' || key === 'R') {
      reiniciarJuego();
    }
  }
}

function draw() {
  background(255);

  if (pantallaActual === "inicio") {
    mostrarPantallaDeInicio();
  } else if (pantallaActual === "juego") {
    if (contadorActivo && !perdiste) {
      let tiempoTranscurrido = floor((millis() - inicioContador) / 1000);
      contadorSegundos = tiempoTranscurrido;

      if (contadorSegundos >= 30) {
        perdiste = true;
        contadorActivo = false;
      }
    }

    mostrarPantallaDeJuego();
    verificarVictoria();
  } else if (pantallaActual === "creditos") {
    mostrarPantallaDeCreditos();
  }
}

function mostrarPantallaDeInicio() {
  // Configuración y contenido de la pantalla de inicio...
  background(255);
  image(imagenes[0], 0, 0);
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  text("Move al cuadrado con las flechas de tu teclado", 20, 130);
  textAlign(LEFT, CENTER);
  text("Deberas recolectar todos los circulos rojos y escapar!", 20, 200);
  text("Cuidado!, solo tenes 30 segundos para ganar", 20, 260);
  textSize(20);
  textAlign(LEFT, CENTER);
  text("Presiona 'Enter' para comenzar el juego", 110, 345);
}

function mostrarPantallaDeJuego() {
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Tiempo: " + contadorSegundos + " segundos", 10, 20);

  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      if (celda[i][j] === 1) {
        fill(0, 100, 255);
      } else {
        fill(255);
      }
      rect(i * tam, j * tam, tam, tam);
    }
  }

  if (ganaste) {
    fill(0, 255, 0);
    rect(width / 4, height / 4, width / 2, height / 2);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Ganaste!", width / 2, height / 2);
    textSize(20);
    text("Presiona 'C' para ver los créditos", width / 2, height / 2 + 50);
  } else if (perdiste) {
    fill(255, 0, 0);
    rect(width / 4, height / 4, width / 2, height / 2);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Perdiste!", width / 2, height / 2);
    textSize(20);
    text("Presiona 'C' para ver los créditos", width / 2, height / 2 + 50);
  } else {
    for (let i = 0; i < elipses.length; i++) {
      let elipseX = elipses[i][0];
      let elipseY = elipses[i][1];

      if (px === elipseX && py === elipseY) {
        elipses.splice(i, 1);
      }
    }

    fill(255, 0, 0);
    for (let i = 0; i < elipses.length; i++) {
      let elipseX = elipses[i][0];
      let elipseY = elipses[i][1];
      ellipse(elipseX * tam + tam / 2, elipseY * tam + tam / 2, tamcuadrado / 2);
    }

    fill(255, 0, 0);
    rect(px * tam + (tam - tamcuadrado) / 2, py * tam + (tam - tamcuadrado) / 2, tamcuadrado, tamcuadrado);
  }

  fill(255);
  rect(5, 5, 160, 30);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Tiempo: " + contadorSegundos + " segundos", 10, 15);
}

function mostrarPantallaDeCreditos() {
  image(imagenes[1], 0, 0);
  fill(255);
  textSize(34);
  textAlign(CENTER, CENTER);
  text("Créditos", 280, 145);
  textSize(24);
  text("Desarrollado por Matias Giorello", 280, 225);
  text("Comision 1", 280, 295);
  textAlign(LEFT, CENTER);
  textSize(20);
  text("Profesor: Jose Luis Bugiolachi", 45, 485);
}

function cambiarPantalla(nuevaPantalla) {
  pantallaActual = nuevaPantalla;

  // Iniciar el contador de segundos cuando cambias a la pantalla de juego
  if (pantallaActual === "juego") {
    contadorActivo = true;
    inicioContador = millis();
  }
}

function verificarVictoria() {
  if (px === 5 && py === 0 && elipses.length === 0) {
    ganaste = true;
    contadorActivo = false;
  }
}

function reiniciarJuego() {
  px = 1;
  py = 1;
  contadorSegundos = 0;
  contadorActivo = true;
  inicioContador = millis();
  perdiste = false;
  ganaste = false;
  elipses = [];
  elipses.push([3, 13]);
  elipses.push([4, 10]);
  elipses.push([6, 3]);
  elipses.push([10, 13]);
  elipses.push([13, 1]);
}

function crearLaberinto() {
  for (let i = 0; i < cant; i++) {
    celda[i] = [];
    for (let j = 0; j < cant; j++) {
      celda[i][j] = 1;
    }
  }

  // celdas (0 es camino, 1 es pared)
  //fila 1
  celda[1][1] = 0;
  celda[1][2] = 0;
  celda[1][3] = 0;
  celda[1][4] = 0;
  celda[1][5] = 1;
  celda[1][6] = 1;
  celda[1][7] = 1;
  celda[1][8] = 0;
  celda[1][9] = 0;
  celda[1][10] = 0;
  celda[1][11] = 0;
  celda[1][12] = 0;
  celda[1][13] = 0;

  //fila2
  celda[2][4]  = 0;
  celda[2][7]  = 1;
  celda[2][8]  = 0;
  celda[2][13]  = 0;

  //fila3
  celda[3][4]  = 0;
  celda[3][5]  = 0;
  celda[3][6]  = 0;
  celda[3][7]  = 0;
  celda[3][8]  = 0;
  celda[3][13]  = 0; // aca comida

  //fila4
  celda[4][6]  = 0;
  celda[4][11]  = 0;
  celda[4][10]  = 0; // aca comida

  //fila5
  celda[5][0]  = 0;// salida
  celda[5][1]  = 0;
  celda[5][6]  = 0;
  celda[5][12]  = 0;
  celda[5][11]  = 0;

  //fila6
  celda[6][1]  = 0;
  celda[6][2]  = 0;
  celda[6][6]  = 0;
  celda[6][5]  = 0;
  celda[6][4]  = 0;
  celda[6][3]  = 0; // aca comida
  celda[6][7]  = 0;
  celda[6][8]  = 0;
  celda[6][9]  = 0;
  celda[6][12]  = 0;

  //fila7
  celda[7][1]  = 0;
  celda[7][9]  = 0;
  celda[7][12]  = 0;

  //fila8
  celda[8][1]  = 0;
  celda[8][9]  = 0;
  celda[8][10]  = 0;
  celda[8][11]  = 0;
  celda[8][12]  = 0;
  celda[8][6]  = 0;
  celda[8][7]  = 0;
  celda[8][8]  = 0;

  //filla9
  celda[9][1]  = 0;
  celda[9][6]  = 0;


  //fila10
  celda[10][1]  = 0;
  celda[10][2]  = 0;
  celda[10][6]  = 0;
  celda[10][13]  = 0; // aca comida


  //fila11
  celda[11][2]  = 0;
  celda[11][6]  = 0;
  celda[11][7]  = 0;
  celda[11][8]  = 0;
  celda[11][9]  = 0;
  celda[11][10]  = 0;
  celda[11][11]  = 0;
  celda[11][13]  = 0;

  //fila12
  celda[12][2]  = 0;
  celda[12][11]  = 0;
  celda[12][13]  = 0;

  //fila13
  celda[13][13] = 0;
  celda[13][12] = 0;
  celda[13][11] = 0;
  celda[13][10] = 0;
  celda[13][9] = 0;
  celda[13][8] = 0;
  celda[13][7] = 0;
  celda[13][6] = 0;
  celda[13][5] = 0;
  celda[13][4] = 0;
  celda[13][3] = 0;
  celda[13][2] = 0;
  celda[13][1] = 0; // aca comida

  celda[1][1] = 0;
}

function keyTyped() {
  if (key === 'Enter') {
    cambiarPantalla("juego");
  } else if (key === 'c' || key === 'C') {
    cambiarPantalla("creditos");
  }
}
