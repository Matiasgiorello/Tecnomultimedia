let objlaberinto;
let cant = 10;
let objjugador;
let posicionesComida = [];
let elementosComida = [];
let fondoselva;
let factorDeEscala = 10;
let imgpersonaje;
let imgcafe;
let imgcupula;
let imginstrucciones;
let juego;
let estadoJuego = "INSTRUCCIONES";

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
  if (estadoJuego === "INSTRUCCIONES") {
    juego.mostrarInstrucciones();
  } else if (estadoJuego === "JUEGO") {
    background(255);
    juego.mostrar();
  }
}

function keyPressed() {
    juego.keyPressed();

}
