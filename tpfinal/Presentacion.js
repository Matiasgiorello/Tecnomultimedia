class Presentacion {
  constructor() {
    this.textos = ["LA LARGA LLUVIA", "INICIAR", "CREDITOS", "A LOS RECIEN LLEGADOS AL PLANETA VENUS SE LES ROMPE LA NAVE", "OPCIÓN 1", "OPCIÓN 2", "INTENTAN REPARAR LA NAVE", "DECIDEN SALIR A EXPLORAR", "NO LOGRAN REPARAR LA NAVE, NI SOBREVIVIR AL CLIMA DEL NUEVO PLANETA", "REINICIAR", "SE ENCUENTRAN CON UNA TORMENTA MOSNTRUOSA", "SIGUEN CAMINANDO", "ESPERAN QUE SE DETENGA",
    ];
    this.boton = new Boton(0, 0);
    this.estado = new Estado(this);
    this.juego= new Juego();
    let imagenesRutas = ["data/primeraimagen.png"];
    this.imagen = new Imagen(imagenesRutas);
    this.juegoComenzado = false;
  }

  mostrar() {
    if (this.estado.estado === 0) {
      this.imagen.mostrar(0, 0);
    }
    this.estado.mostrar();

    if (this.estado.estado === 5) {
      this.juego.iniciarJuego();
      this.juego.drawjuego();
    }
  }

  iniciarJuego() {
    this.juegoComenzado = true;
  }

  clicpresentacion() {
    this.estado.clicestado();
    if (this.estado.estado === 5 && !this.juegoComenzado) {
      this.juego.iniciarJuego();
      this.juegoComenzado = true;
    }
  }
}
