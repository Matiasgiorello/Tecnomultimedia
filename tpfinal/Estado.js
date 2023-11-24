class Estado {
  constructor(presentacion) {
    this.estado = 0;
    this.botones = [
      new Boton(230, 360, 140, 60), //iniciar
      new Boton(210, 460, 180, 60), //creditos
      new Boton(395, 420, 170, 50), //botón del 1 al 3 (op 2)
      new Boton(50, 420, 170, 50), //boton del 1 al 4 (op 1)
    ];
    this.presentacion = presentacion;
  }


  mostrar() {
    // Esto carga los botones
    for (let i = 0; i < this.botones.length; i++) {
      this.botones[i].mostrar();
    }
    if (this.estado === 0) { //inicio
      noStroke();
      background (200);
      this.presentacion.imagen.mostrar(0, 0);
      textSize(20);
      textAlign(CENTER);
      fill(255);
      rect(230, 360, 140, 60);
      rect(210, 460, 180, 60);
      fill(0);
      textSize(26);
      text(presentacion.textos[1], width / 2, 400);
      text(presentacion.textos[2], width / 2, 500);
    } else if (this.estado === 2) { //llegan a venus
      // btn iniciar va aca
      background(200);
      textAlign(CENTER);
      textSize(20);
      fill(255, 50);
      noStroke();
      rect(50, 80, 520, 80);
      fill(0);
      text(presentacion.textos[3], 60, 100, 500, 170);
      fill(254, 238, 31);
      rect(385, 410, 190, 70, 10); // op 2
      fill(247, 161, 0);
      rect(395, 420, 170, 50, 10); // op 2
      fill(254, 238, 31);
      rect(40, 410, 190, 70, 10); // op 1
      fill(247, 161, 0);
      rect(50, 420, 170, 50, 10); // op 1
      fill(255);
      text(presentacion.textos[4], 135, 450); // op 1
      text(presentacion.textos[5], 475, 450);
      textSize (16);// op 2
      text (presentacion.textos[6], 140, 510);
      text (presentacion.textos[7], 470, 510);
    } else if (this.estado === 1) { //CRÉDITOS
      // btn creditos va aca
      background(0);
      fill(254, 238, 3);
      rect(225, 70, 190, 70, 10);
      fill(247, 50, 0);
      rect(235, 80, 170, 50, 10);
      textAlign(CENTER);
      fill(255);
      textSize(20);
      text(presentacion.textos[2], 80, 100, 500, 170);
    } else if (this.estado === 4) { //FALLECEN - PRIMER FLUJO OPCIÓN 1
      // btn op 2
      background(220);
      noStroke();
      textSize (20);
      fill(255, 50);
      rect(40, 50, 500, 80);
      fill(255);
      textAlign(CENTER, CENTER);
      text(presentacion.textos[8], 40, 40, 500, 100);
      fill (0);
      rect(210, 460, 180, 60);
      fill (255);
      text(presentacion.textos[9], 300, 490);
    } else if (this.estado === 3) { // TORMENTA MOSNTRUOSA . FLUJO B
      background(220);
      noStroke ();
      textAlign(CENTER, CENTER);
      fill(255, 50);
      rect(30, 50, 560, 80 );
      textSize(20);
      fill(255);
      text(presentacion.textos[10], 310, 100);
      rect(385, 410, 190, 70, 10); // op 2
      fill(247, 161, 0);
      rect(395, 420, 170, 50, 10); // op 2
      fill(254, 238, 31);
      rect(40, 410, 190, 70, 10); // op 1
      fill(247, 161, 0);
      rect(50, 420, 170, 50, 10); // op 1
      fill(255);
      text(presentacion.textos[4], 135, 450); // op 1
      text(presentacion.textos[5], 475, 450);
      textSize (16);
      text (presentacion.textos[11], 140, 510);
      text (presentacion.textos[12], 470, 510);
    } else if ( this.estado === 6) {
      background(255);
      noStroke ();
      textAlign(CENTER, CENTER);
      fill(255, 50);
      rect(30, 50, 560, 80 );
      textSize(20);
      fill(255);
    } else if (this.estado === 5 ) {
      background (0);
    }
  }

  clicestado() {
    // Verificar clic en botones
    for (let i = 0; i < this.botones.length; i++) {
      let botonActual = this.botones[i];

      // clic adentro de las coordenadas del botón
      if (
        mouseX > botonActual.px &&
        mouseX < botonActual.px + botonActual.ancho &&
        mouseY > botonActual.py &&
        mouseY < botonActual.py + botonActual.alto
        ) {
        if (this.estado === 0) {
          if (i === 0) {
            this.estado = 2; // Botón 'Iniciar'
          } else if (i === 1) {
            this.estado = 1; // Botón 'Creditos'
          }
        } else if (this.estado === 2) {
          if (i === 2) {
            this.estado = 3; // Botón estado 1 al 3
          } else if (i === 3) {
            this.estado = 4;
          }
        } else if (this.estado === 3) {
          if (i === 2) {
            this.estado = 5; // Botón estado 1 al 3
          } else if (i === 3) {
            this.estado = 6; // Botón estado 1 al 4
          }
        }
      }
    }
    return;
  }
}
