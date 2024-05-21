class Capa {
  constructor(paletas, cualPaleta) {
    this.paletas = paletas;
    this.grafico = createGraphics(width, height);
    this.elColor = color(0, 255, 0);
    this.cualPaleta = cualPaleta;
  }

  agregarCirculo() {
    let x = random(width);
    let y = random(height);
    let diametro = random(10, 200);
    let grosor = random(1, 20);
    let gris = random(255);

    this.grafico.noFill();
    this.grafico.stroke(gris);
    this.grafico.strokeWeight(grosor);
    this.grafico.ellipse(x, y, diametro, diametro);
  }

  agregarLinea() {
    let x = random(width);
    let y = random(height);
    let angulo = random(TWO_PI);
    let grosor = random(1, 20);
    let gris = random(255);

    this.grafico.push();
    this.grafico.stroke(gris);
    this.grafico.translate(x, y);
    this.grafico.rotate(angulo);
    this.grafico.strokeWeight(grosor);
    this.grafico.line(-width * 2, 0, width * 2, 0);
    this.grafico.pop();
  }

  asignarColor() {
    this.elColor = this.paletas.darUnColor(this.cualPaleta);
  }

  asignarColor(elColor_) {
    this.elColor = elColor_;
  }

  dibujar() {
    push();
    tint(this.elColor);
    image(this.grafico, 0, 0);
    pop();
  }
}
