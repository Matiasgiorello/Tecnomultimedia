let presentacion;
let juego;
function setup() {
  createCanvas(600, 600);
  presentacion = new Presentacion();
  juego = new Juego();
  presentacion.estado = new Estado(presentacion, juego);
}

function draw() {
  background(255);
  presentacion.mostrar();
  if (presentacion.estado.estado === 4) {
    juego.actualizar();
  }
}

function mousePressed() {
  presentacion.clicpresentacion();
}
