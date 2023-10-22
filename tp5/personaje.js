class Personaje {
  constructor(x, y, velocidad, objlaberinto) {
    this.x = x;
    this.y = y;
    this.tamano = 30; // Tam soldado
    this.velocidad = velocidad;
    this.objlaberinto = objlaberinto;
  }

  mostrar() {
    let Tamanogrande = this.tamano * 2;
    image(imgpersonaje, this.x, this.y, Tamanogrande, Tamanogrande);
  }

  puedeMover(dx, dy) {
    let col = floor(this.x / this.objlaberinto.tamCelda);
    let fila = floor(this.y / this.objlaberinto.tamCelda);

    let nextCol = col + dx;
    let nextFila = fila + dy;

    if (nextCol >= 0 && nextCol < this.objlaberinto.columnas && nextFila >= 0 && nextFila < this.objlaberinto.filas) {
      //celda es camino
      if (this.objlaberinto.esCamino(nextCol, nextFila) && !this.objlaberinto.esPared(nextCol, nextFila)) {
        return true;
      }
    }
    return false;
  }

  mover(dx, dy) {
    if (this.puedeMover(dx, dy)) {
      this.x += dx * this.velocidad;
      this.y += dy * this.velocidad;
    }
  }
}
