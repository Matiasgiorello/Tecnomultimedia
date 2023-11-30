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
      rect(230, 360, 140, 60, 10);
      rect(210, 460, 180, 60, 10);
      fill(0);
      textSize(26);
      text(presentacion.textos[1], width / 2, 400);
      text(presentacion.textos[2], width / 2, 500);
    } else if (this.estado === 2) { //llegan a venus
      // btn iniciar va aca
      background(200);
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
      fill(0);
      textSize (16);
      text(presentacion.textos[6], 46, 430, 180, 100); // op 1
      text(presentacion.textos[7], 380, 430, 200, 100);
    } else if (this.estado === 1) { //CRÉDITOS
      background(220);
      
      fill(247, 50, 0);
      rect(210, 460, 180, 60, 10);
      fill(255);
      textSize(20);
      text(presentacion.textos[9], 300,500);
    } else if (this.estado === 4) { //FALLECEN - PRIMER FLUJO OPCIÓN 1
      background(200);
      noStroke();
      textSize (20);
      fill(255, 50);
      rect(20, 50, 520, 80);
      fill(255);
      text(presentacion.textos[8], 45, 70, 500, 100);
      fill (0);
      rect(210, 460, 180, 60, 10);
      fill (255);
      text(presentacion.textos[9], 250, 500);
    } else if (this.estado === 3) { // TORMENTA MOSNTRUOSA . FLUJO B
      background(200);
      noStroke ();
      fill(255, 50);
      rect(20, 50, 570, 80 );
      textSize(20);
      fill(255);
      text(presentacion.textos[10], 300, 100);
      rect(385, 410, 190, 70, 10);
      fill(247, 161, 0);
      rect(395, 420, 170, 50, 10);
      fill(254, 238, 31);
      rect(40, 410, 190, 70, 10);
      fill(247, 161, 0);
      rect(50, 420, 170, 50, 10);
      fill(255);
      textSize (18);
      text (presentacion.textos[11], 130, 430, 0, 150);
      text (presentacion.textos[12], 410, 430, 150, 150);
    } else if ( this.estado === 6) {
      background (200);
      noStroke ();
      fill(255, 50);
      rect(20, 50, 570, 80 );
      textSize(20);
      fill(0);
      text(presentacion.textos[15], 40, 70, 500, 100);
      fill(254, 238, 31);

      rect(385, 410, 190, 70, 10);
      fill(247, 161, 0);
      rect(395, 420, 170, 50, 10);
      fill(254, 238, 31);
      rect(40, 410, 190, 70, 10);
      fill(247, 161, 0);
      rect(50, 420, 170, 50, 10);
      fill(0);
      textSize (18);
      text (presentacion.textos[9], 130, 450);
      text (presentacion.textos[16], 480, 450);
    } else if (this.estado === 5 ) {
      background (200);
      noStroke ();
      fill(255, 50);
      rect(20, 50, 560, 80 );
      textSize(20);
      fill(255);
      text(presentacion.textos[13], 60, 70, 480, 100);
      fill (0);
      rect(210, 460, 180, 60);
      fill (255);
      text(presentacion.textos[14], 300, 500);
    } else if (this.estado === 7) {
      background (0); //ACÁ VA EL JUEGO
    } else if ( this.estado === 8) {
      background (200);
      noStroke ();
      fill(255, 50);
      rect(20, 50, 570, 80 );
      textSize(20);
      fill(255);
      text(presentacion.textos[17], 40, 70, 500, 100);
      fill (0);
      rect(210, 460, 180, 60);
      fill (255);
      text(presentacion.textos[14], 300, 500);
    } else if ( this.estado === 9) {
      background (200);
      noStroke ();
      fill(255, 50);
      rect(20, 50, 570, 90 );
      textSize(20);
      fill(255);
      text(presentacion.textos[18], 27, 66, 580, 170);

      fill (0);
      rect(210, 460, 180, 60);
      fill (255);
      text(presentacion.textos[9], 300, 500);
    }
  }


  clicestado() {
    // Verificar clic en botones
    for (let i = 0; i < this.botones.length; i++) {
      let botonActual = this.botones[i];

      // clic está dentro de las coordenadas del botón
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
            this.estado = 4; // Botón estado 1 al 4
          }
        } else if (this.estado === 3) {
          if (i === 2) {
            this.estado = 6;
          } else if ( i=== 3) {
            this.estado =5;
          }
        } else if (this.estado === 4) {
          if ( i=== 1) {
            this.estado = 0;
          }
        } else if ( this.estado === 6) {
          if ( i===2) {
            this.estado = 8;
          } else if ( i === 3 ) {
            this.estado = 0;
          }
        } else if (this.estado === 8) {
          if ( i=== 1) {
            this.estado = 9;
          }
        } else if (this.estado === 9) {
          if (i === i) {
            this.estado =0;
          }
        } else if (this.estado === 5) {
          if ( i=== 1) {
            this.estado = 7;
          }
        } else if (this.estado === 1) {
         if (i ===1 ){
           this.estado =0;
         }
        } 
  
        return;
      }
    }
  }
}
