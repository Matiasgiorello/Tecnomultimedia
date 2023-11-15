class Comida {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 40;
    this.recolectado = false;
  }

  establecerPosicion(x, y) {
    this.x = x;
    this.y = y;
  }
  mostrar() {
    if (!this.recolectado) {
      image(imgcafe, this.x - this.tamano / 2, this.y - this.tamano / 2, this.tamano * 2, this.tamano * 2);
    }
  }

  colision(personajeX, personajeY, personajeTamano) {
    let distancia = dist(this.x, this.y, personajeX, personajeY);
    return distancia < (this.tamano + personajeTamano) / 2;
  }
}
