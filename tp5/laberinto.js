let celda = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

class Laberinto {
  constructor() {
    this.columnas = celda[0].length;
    this.filas = celda.length;
    this.tamCelda = 60; 
    this.grid = celda;
  }

  esPared(x, y) {
    return this.grid[y][x] === 1;
  }

  esCamino(x, y) {
    return this.grid[y][x] === 0;
  }

dibujarLaberintoConLineas() {
    stroke(0,255,150); 
    strokeWeight(3); 

   
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        
        if (celda[i][j] === 1) {
          // Dibujo paredes como líneas
          let x1 = j * this.tamCelda; 
          let y1 = i * this.tamCelda; 
          let x2 = (j + 1) * this.tamCelda; 
          let y2 = (i + 1) * this.tamCelda; 
          
          
          line(x1, y1, x2, y1);
          line(x1, y1, x1, y2); 
          line(x1, y2, x2, y2); 
          line(x2, y1, x2, y2); 
        }
      }
    }
  }

  mostrar() {
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (celda[i][j] === 1) {
          fill(0); // Pared
        } else {
          fill(255); // Camino
        }
        rect(j * this.tamCelda, i * this.tamCelda, this.tamCelda, this.tamCelda);
      }
    }
  }
}
