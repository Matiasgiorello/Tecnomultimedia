//Tp5rec
//Matias, Giorello
//Legajo:88104/4
//link video:https:https://youtu.be/eHXQ86k5Owk
let fondoselva;
let imgpersonaje;
let imgcafe;
let imgcupula;
let imginstrucciones;
let juego;

function preload() {
  fondoselva= loadImage("data/selvita.jpg");
  imgpersonaje = loadImage("data/soldado.png");
  imgcafe = loadImage("data/Cafe.png");
  imgcupula = loadImage("data/cupula.png");
  imginstrucciones = loadImage("data/instrucciones.png");
}


function setup() {
  createCanvas(800, 800);
  frameRate(60);
  juego = new Juego();
}

function draw() {
  if (juego.estadoJuego === "INSTRUCCIONES") {
    juego.mostrarInstrucciones();
  } else if (juego.estadoJuego === "JUEGO") {
    background(255);
    juego.mostrar();
  }
}

function keyPressed() {
  juego.keyPressed();
}
