class Estado {
  constructor(estado) {
    this.estado = 0;
    this.botones = [
      new Boton(230, 360, 140, 60),
      new Boton(210, 460)
    ];
  }

  mostrar() {
    //esto carga los botones
    for (let i = 0; i < this.botones.length; i++) {
      this.botones[i].mostrar();
    }
    if (this.estado === 0) {
      textSize (32);
      textAlign (CENTER);
      image(foto1, 0, 0, width, height);
      fill(0);
      rect(230, 360, 140, 60);
      rect(210, 460, 180, 60);
      fill(255);
      textSize(26);
      text(textos [1], width/2, 400);
      text(textos [2], width/2, 500);
    } else if (this.estado === 1) {
      //btn iniciar
      background(255);
      textAlign(CENTER);
      textSize(20);
      text(textos[3], 80, 100, 500, 170);
      fill(254, 238, 31);
      rect(225, 410, 190, 70, 10);
      fill(247, 161, 0);
      rect(235, 420, 170, 50, 10);
      textSize(30);
    } else if (this.estado === 2) {
      //btn creditos
      background(0);
      fill(254, 238, 3);
      rect(225, 70, 190, 70, 10);
      fill(247, 50, 0);
      rect(235, 80, 170, 50, 10);
      textAlign(CENTER);
      fill(255);
      textSize(20);
      text(textos[2], 80, 100, 500, 170);
    } else if (this.estado===3) {
      background (0);
      fill(247, 161, 0);
      rect(225, 70, 190, 50, 10);
      fill (255);
      textAlign (CENTER);
      text (textos[1], 320, 100);
      textAlign (LEFT);
      textSize (24);
      text (textos[16], 40, 250);
      text (textos[17], 440, 250);
      text (textos[19], 440, 350);
      text (textos[18], 40, 350);
      text (textos[20], 350, 250);
      text (textos[20], 350, 350);
      textSize (26);
      fill(251, 65, 154);
      text (textos[15], 220, 600);
    } else if (this.estado===4) {

      background(0);
      textAlign (CENTER);
      fill(251, 65, 154);
      textSize(32);
      fill (255);
      textSize (29);
      text(textos [10], 320, 160);
      fill(247, 161, 0);
      text (textos [11], 320, 300);
      rect(225, 520, 190, 50, 10);
      fill (255);
      textSize (20);
      text (textos [12], 230, 540);
    }
  }

  mousePressed() {
    // Verificar clic en botones
    if (this.estado === 0) {
      for (let i = 0; i < this.botones.length; i++) {
        let botonActual = this.botones[i];

        // clic está dentro de las coordenadas del botón
        if (
          mouseX > botonActual.px &&
          mouseX < botonActual.px + botonActual.ancho &&
          mouseY > botonActual.py &&
          mouseY < botonActual.py + botonActual.alto
          ) {
          //cambiar el estado si esta bien
          this.estado = i + 1;
          return;
        }
      }
    }
  }
}
