let c, d;
let selPaletas;

function setup() {
  createCanvas(1000, 700);

  let lista = [
    "../recursos/vangogh.png",
    "../recursos/klimt.png",
    "../recursos/monet.png"
  ];
  selPaletas = new SelectorPaletas(lista);

  c = new Capa(selPaletas, 1);
  c.asignarColor(selPaletas.darUnColor());
  d = new Capa(selPaletas, 0);
  d.asignarColor(selPaletas.darUnColor());
}

function draw() {
  background(255);
  if (mouseIsPressed) {
    c.agregarLinea();
    d.agregarCirculo();
  }
  c.dibujar();
  d.dibujar();
}

function keyPressed() {
  if (key === '1') {
    c.asignarColor(selPaletas.darUnColor());
  } else if (key === '2') {
    d.asignarColor(selPaletas.darUnColor());
  }
}
