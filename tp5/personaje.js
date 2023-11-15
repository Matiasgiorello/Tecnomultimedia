class Personaje {
  constructor(x, y, velocidad, objlaberinto) {
    this.x = x;
    this.y = y;
    this.tamano = 60; // Tam soldado
    this.velocidad = velocidad;
    this.objlaberinto = objlaberinto;
  }

  mostrar() {
    
    image(imgpersonaje, this.x - this.tamano / 2, this.y - this.tamano / 2, this.tamano, this.tamano);
  }

  puedeMover(dx, dy) {
    let nextX = this.x + dx * this.velocidad;
    let nextY = this.y + dy * this.velocidad;

    // Calcula las coordenadas de la celda siguiente
    let col = floor(nextX / this.objlaberinto.tamCelda);
    let fila = floor(nextY / this.objlaberinto.tamCelda);

    // Verifica si la celda siguiente es un camino y no es una pared
    if (col >= 0 && col < this.objlaberinto.columnas && fila >= 0 && fila < this.objlaberinto.filas) {
      if (this.objlaberinto.esCamino(col, fila) && !this.objlaberinto.esPared(col, fila)) {
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
