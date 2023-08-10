boolean zonabtn(int x, int y, int ancho, int alto) {
  return mouseX >= x && mouseX <= x + ancho && mouseY >= y && mouseY <= y + alto;
}

void boton(int x, int y, int btnWidth, int btnHeight) {
  noStroke();

  if (mouseX >= x && mouseX <= x + btnWidth && mouseY >= y && mouseY <= y + btnHeight) {
    fill(255); //si el mouse está adentro
  } else {
    fill(0); //si el mouse está fuera 
  }
//Boton dijuado
  rect(x, y, btnWidth, btnHeight);

  // flecha 
  fill(255);
  float tamflecha = min(btnWidth, btnHeight) * 0.4;
  float flechaX = x + btnWidth / 2;
  float flechaY = y + btnHeight / 2;

  triangle(flechaX - tamflecha / 2, flechaY - tamflecha / 4,
           flechaX - tamflecha / 2, flechaY + tamflecha / 4,
           flechaX + tamflecha / 2, flechaY);
}

void cambiar(int estado1, int x, int y, int btnWidth, int btnHeight, int estado2) {
  if (estado == estado1 && zonabtn(x, y, btnWidth, btnHeight)) {
    estado = estado2;
  }
}


void keyPressed() {
  if (key == 'r' && estado == 16) {
    estado = 0; 
  }
}
