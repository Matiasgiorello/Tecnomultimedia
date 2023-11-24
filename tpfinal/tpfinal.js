//tpfinal
//Izurieta, Lucia y Giorello, Matias
let presentacion;
function setup() {
  createCanvas(800, 800);
  frameRate(60)
  presentacion = new Presentacion();
}

function draw() {
  background(255);
  presentacion.mostrar();
}

function mousePressed() {
  presentacion.clicpresentacion();
}

function keyPressed() {
  presentacion.juego.teclas();
}
