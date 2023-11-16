class Imagen {
  constructor(ruta) {
    this.ruta = ruta;
    this.ancho = 0;
    this.alto = 0;
    this.cargarImagen();
  }

  cargarImagen() {
    this.imagen = loadImage(this.ruta, () => {
      this.ancho = this.imagen.width;
      this.alto = this.imagen.height;
    }
    );
  }

  mostrar(x, y, ancho = this.ancho, alto = this.alto) {
    if (this.imagen) {
      image(this.imagen, x, y, ancho, alto);
    }
  }
}
