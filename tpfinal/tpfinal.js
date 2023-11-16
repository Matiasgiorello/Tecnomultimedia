//let textos = [ "LA LARGA LLUVIA", "INICIAR", "CREDITOS", "comienza la aventura", "opcion 1", "opcion 2", "historia 1", "historia 2"];
//let estado;
//let boton;
//let foto1;
let presentacion;

function setup() {
  createCanvas(600, 600);
  presentacion = new Presentacion();
}

function draw() {
  background(255);
  presentacion.mostrar();
}

function mousePressed() {
  presentacion.clicpresentacion();
}
