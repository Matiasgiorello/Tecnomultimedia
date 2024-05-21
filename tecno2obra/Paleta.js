class Paleta {
  constructor(nombre) {
    this.imagen = loadImage(nombre);
  }

  darUnColor() {
    let posX = int(random(this.imagen.width));
    let posY = int(random(this.imagen.height));
    return this.imagen.get(posX, posY);
  }
}
