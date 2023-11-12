let textos = [ "LA LARGA LLUVIA", "INICIAR", "CREDITOS","comienza la aventura"];
let estado;
let boton;
let foto1;




function preload () {
foto1=loadImage("data/primeraimagen.png");

}
function setup() {
  createCanvas (600, 600);
  estado = new Estado();
}




function draw() {
  background (255);
  estado.mostrar();
}

function mousePressed() {
  estado.mousePressed();
}
