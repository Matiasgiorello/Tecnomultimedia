class Presentacion {
  constructor() {
    this.textos = ["LA LARGA LLUVIA", "INICIAR", "CREDITOS", "comienza la aventura", "opcion 1", "opcion 2", "historia 1", "historia 2"];
    this.boton = new Boton(0, 0);
    this.estado = new Estado();
    this.imagen = new Imagen("data/primeraimagen.png");
  }

  mostrar() {
    if (this.estado.estado === 0) {
      this.imagen.mostrar(0, 0);
    }
    this.estado.mostrar();

  }

  clicpresentacion() {
    this.estado.clicestado();
  }
}
