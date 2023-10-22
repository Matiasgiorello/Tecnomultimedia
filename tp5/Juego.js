class Juego {
  constructor() {
    this.objlaberinto = new Laberinto();
    this.objjugador = new Personaje(10, 80, 30, this.objlaberinto);
    this.elementosComida = [
      new Comida(90, 185),
      new Comida(180, 310),
      new Comida(430, 180),
      new Comida(200, 550),
      new Comida(670, 550),
      new Comida(560, 670)
    ];
    this.cupula = new Cupula(750, 210);
    this.jugadorGano = false;

    this.tiempoLimite = 30;
    this.cuadrosTranscurridos = 0;
    this.estadoJuego = "INSTRUCCIONES";
  }

  mostrar() {

    translate(width / 2 - this.objlaberinto.columnas * this.objlaberinto.tamCelda / 2, height / 2 - this.objlaberinto.filas * this.objlaberinto.tamCelda / 2);
    this.objlaberinto.mostrar();
    image(fondoselva, 0, 0, width, height);
    this.objlaberinto.dibujarLaberintoConLineas();
    this.objjugador.mostrar();

    // Mostrar comida
    for (let i = 0; i < this.elementosComida.length; i++) {
      let comida = this.elementosComida[i];
      if (!comida.recolectado) {
        comida.mostrar();
        if (comida.colision(this.objjugador.x, this.objjugador.y, this.objjugador.tamano)) {
          comida.recolectado = true;
        }
      }
    }

    // cúpula
    this.cupula.mostrar();
    if (!this.cupula.recolectado && this.cupula.colision(this.objjugador.x, this.objjugador.y, this.objjugador.tamano)) {
      this.jugadorGano = true;
      this.cupula.recolectado = true;
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text("¡Has ganado!", width / 2, height / 2);
    }

    // Contador de tiempo
    this.cuadrosTranscurridos++;
    let tiempoTranscurrido = Math.floor(this.cuadrosTranscurridos / frameRate());

    textSize(24);
    fill(255);
    rect(width - 250, 0, 250, 50);
    fill(0);
    textAlign(RIGHT, TOP);
    text("Tiempo restante: " + (this.tiempoLimite - tiempoTranscurrido) + "s", width - 10, 10);

    // Condición de derrota por tiempo
    if (tiempoTranscurrido >= this.tiempoLimite) {
      this.estadoJuego = "DERROTA";
      textSize(32);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      text("¡Tiempo agotado! Has perdido.", width / 2, height / 2);
      noLoop();
    }
  }

  reiniciarJuego() {
    this.cuadrosTranscurridos = 0;
    this.jugadorGano = false;
    this.objjugador.x = 10;
    this.objjugador.y = 80;
    this.cupula.recolectado = false;
    this.tiempoLimite = 30;
    this.estadoJuego = "JUEGO";
    loop();
  }

  mostrarInstrucciones() {
    background(255);
    image(imginstrucciones, width / 2 - imginstrucciones.width / 2, height / 2 - imginstrucciones.height / 2);
  }
  keyPressed() {
    if (keyCode === LEFT_ARROW && this.objjugador.puedeMover(-1, 0)) {
      this.objjugador.mover(-1, 0);
    } else if (keyCode === RIGHT_ARROW && this.objjugador.puedeMover(1, 0)) {
      this.objjugador.mover(1, 0);
    } else if (keyCode === UP_ARROW && this.objjugador.puedeMover(0, -1)) {
      this.objjugador.mover(0, -1);
    } else if (keyCode === DOWN_ARROW && this.objjugador.puedeMover(0, 1)) {
      this.objjugador.mover(0, 1);
    } else if (keyCode === ENTER && estadoJuego === "INSTRUCCIONES") {
      estadoJuego = "JUEGO";
    } else if (keyCode === 82 && this.estadoJuego === "DERROTA") {       //tecla R reinicia
      this.reiniciarJuego();
    }
  }
}
