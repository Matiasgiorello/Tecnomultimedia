//Tp5rec
//Matias, Giorello
//Legajo:88104/4
//link video:https://youtu.be/aODzFdmL6Ns
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
  juego.draw();
}

function keyPressed() {
  juego.keyPressed();
}
