//Giorello, Matias
//tp3
//Legajo:88104/4
//Link del video explicativo: https://youtu.be/1lTmZtxxH90
int estado = 0;
int c = 18;
PImage[] lluvia = new PImage[c];
String[] palabras= {
  "La larga lluvia",
  "Autor: Ray, Bradbury",
  "Un grupo de hombres militares son enviados a una misión en el planeta Venus",
  "Un planeta en el que la lluvia nunca se detiene",
  "En él, cuenta la leyenda, existen unas cápsulas solares para resguardarse de las tormentas",
  "Al llegar al planeta, su cohete espacial se estrella y los tripulantes quedan varados allí",
  "Con su nave destruida, los hombres se ven obligados a investigar el planeta",
  "Deben tomar una decision :",
  "Se quedan en la selva bajo la lluvia, esperando lo peor ",
  "Se embarcan en las terribles y peligrosas aguas, en busca de las capsulas solares",
  "Los hombres inflan un bote y comienzan su travesia bajo una tormenta",
  "2 de los 4 hombres, deciden entrar a la selva para cubrirse de la lluvia",
  "Los militares logran encontrar un de las capsulas solares",
  "Caminando sin rumbo por varias horas, los hombres se encuentran nuevamente con el cohete. Dandose cuenta de que caminaron en circulos",
  "La capsula se encuentra abandonada, con el techo roto y llena de vegetacion",
  "Los hombres son atrapados por una gran tormenta, la cual inunda el lugar y ambos mueren ahogados",
  "Fin 3",
  "Quienes quieran continuar con la busqueda, a pesar de esta desilusion",
  "Quienes quieran simple mente esperar bajo la lluvia su inevitable muerte",
  "Nuevamente deben elegir:",
  "Quienes decidieron seguir adelante, encontraron una capsula en perfecto estado a solo unos pocos kilometros de la anterior",
  "Uno de los hombres, decidio aceptar su destino y quitarse la vida para no morir ahogado",
  "Fin 1",
  "Dentro de ella, encontraron una taza de chocolate caliente, comida y ropa seca tal y como prometia la leyenda que habian escuchado",
  "Fin 2",
 };

void setup() {
  size(600, 600);

  // Carga las fotos
  for (int i = 0; i < c; i++) {
    lluvia[i] = loadImage("lluvia" + i + ".jpg");
  }

  textSize(20);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
}
void draw() {
  if (estado == 0) {
    image(lluvia[0], width/2, height/2, 600, 600);
    fill(0);
    rect(200, 10, 200, 100);
    fill(255);
    text(palabras[0], 10, 10, 580, 100);
    fill(0);
    rect(0, 290, 250, 100);
    fill(255);
    text(palabras[1], 0, 290, 250, 100);
    boton(480, 480, 100, 60);
  } else if (estado == 1) {
    image(lluvia[1], width/2, height/2, 600, 600);
    fill(255);
    rect(30, 30, 540, 60);
    fill(0);
    text(palabras[2], 10, 10, 580, 100);
    boton(480, 480, 100, 60);
  } else if (estado == 2) {
    image(lluvia[2], width/2, height/2, 600, 600);
    fill(255);
    rect(100, 10, 400, 30);
    fill(0);
    text(palabras[3], 300, 20);
    fill(255);
    rect(10, 420, 400, 70);
    fill(0);
    text(palabras[4], 10, 300, 400, 300);
    boton(480, 480, 100, 60);
  } else if (estado == 3) {
    image(lluvia[4], width/2, height/2, 600, 600);
    fill(255);
    rect(20, 510, 400, 70);
    fill(0);
    text(palabras[5], 20, 500, 400, 80);
    boton(480, 480, 100, 60);
  } else if (estado == 4) {
    image(lluvia[3], width/2, height/2, 600, 600);
    fill(255, 255, 255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[6], 10, 10, 580, 80);
    fill(255);
    rect(80, 415, 240, 30);
    rect(275, 260, 300, 60);
    rect(200, 490, 250, 100);
    fill(0);
    text(palabras[7], 200, 425);
    fill(0);
    text(palabras[8], 250, 250, 350, 70);
    text(palabras[9], 200, 490, 250, 100);
    boton(490, 375, 70, 40);
    boton(490, 475, 70, 40);
  } else if (estado == 6) {
    //abajo
    image(lluvia[6], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[10], 50, 10, 500, 80);
    boton(480, 480, 100, 60);
  } else if (estado == 7) {
    image(lluvia[7], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 5, 580, 50);
    fill(0);
    text(palabras[11], 10, 5, 580, 50);
    boton(480, 480, 100, 60);
  } else if (estado == 8) {
    image(lluvia[8], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[12], 10, 10, 580, 80);
    boton(480, 480, 100, 60);
  } else if (estado == 9) {
    image(lluvia[4], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 90);
    fill(0);
    text(palabras[13], 10, 10, 580, 100);
    boton(480, 480, 100, 60);
  } else if (estado == 10) {
    image(lluvia[10], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[14], 10, 10, 580, 80);
    boton(480, 480, 100, 60);
  } else if (estado == 11) {
    image(lluvia[16], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[15],10, 10, 580, 80);
    rect(300, 500, 100, 50);
    fill(255);
    text(palabras[16],300, 500, 100, 50);
     boton(480, 480, 100, 60);
     //Fin 3
  } else if (estado == 12) {
    image(lluvia[12], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    rect(10, 470, 580, 80);
    rect(10, 260, 200, 65);
    fill(0);
    text(palabras[17], 10, 10, 580, 80);
    text(palabras[18], 10, 470, 580, 80);
    text(palabras[19], 10, 250, 200, 80);
    boton(550, 90, 70, 40);
    boton(550, 510, 70, 40);
  } else if (estado == 13) {
    image(lluvia[13], width/2, height/2, 600, 600);
    rect(30, 30, 540, 60);
    fill(0);
    text(palabras[20], 30, 30, 540, 60);
    boton(480, 480, 100, 60);
  } else if (estado == 14) {
    image(lluvia[11], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[21], 10, 10, 580, 80);
    fill(255);
    rect(490, 400, 70, 40);
    fill(0);
    text(palabras[22], 490, 400, 70, 40);
    boton(480, 480, 100, 60);
    //Fin 1
  } else if (estado == 15) {
    image(lluvia[15], width/2, height/2, 600, 600);
    fill(255);
    rect(10, 10, 580, 80);
    fill(0);
    text(palabras[23], 10, 10, 580, 80);
    rect(490, 400, 70, 40);
    fill(255);
    text(palabras[24], 490, 400, 70, 40);
    boton(480, 480, 100, 60);
    //Fin2
  } else if (estado == 16) {
    image(lluvia[0], width/2, height/2, 600, 600);
    fill(255);
    rect(200, 10, 200, 80);
    rect(10, 200, 200, 80);
    rect( 10, 300, 200, 80);
    rect(370, 300, 370, 80);
    rect(370, 200, 370, 80);
    rect(200, 450, 200, 100);
    fill(0);
    text("Créditos:", 10, 10, 580, 80);
    text("Ilustracion:Bluewillow", 10, 200, 200, 80);
    text("Autor: Bradbury, Ray", 10, 300, 200, 80);
    text("Edicion: Giorello, Matias", 300, 300, 350, 80);
    text("Guion: Giorello, Matias", 300, 200, 350, 80);
    text("Para reiniciar esta historia, presiona la tecla R",200, 450, 200, 100);
  }
  // Creditos
}

void mousePressed() {
  if (estado == 0) {
    if (zonabtn(530, 530, 100)) {
      estado = 1;
    }
  } else if (estado == 1) {
    if (zonabtn(530, 530, 100)) {
      estado = 2;
    }
  } else if (estado == 2) {
    if (zonabtn(530, 530, 100)) {
      estado = 3;
    }
  } else if (estado == 3) {
    if (zonabtn(490, 375, 70)) {
      estado = 5;
    } else if (zonabtn(490, 475, 70)) {
      estado = 4;
    }
  } else if (estado == 4) {
    
    if (zonabtn(490, 375, 70)) {
      estado = 7;
    } else if (zonabtn(490, 475, 70)) {
      estado = 8;
    }
  } else if (estado == 5) {
    if (zonabtn(530, 530, 100)) {
      estado = 7;
    }
  } else if (estado == 6) {
    if (zonabtn(530, 530, 100)) {
      estado = 8;
    }
  } else if (estado == 7) {
    if (zonabtn(530, 530, 100)) {
      estado = 9;
    }
  } else if (estado == 8) {
    if (zonabtn(530, 530, 100)) {
      estado = 10;
    }
  } else if (estado == 9) {
    if (zonabtn(530, 530, 100)) {
      estado = 11;
    }
  } else if (estado == 10) {
    if (zonabtn(530, 530, 100)) {
      estado = 12;
    }
  } else if (estado == 11) {
    if (zonabtn(530, 530, 100)) {
      estado = 16 ; // creditos
    }
  } else if (estado == 12) {
    if (zonabtn(550, 90, 70)) {
      estado = 13;
    } else if (zonabtn(550, 510, 70)) {
      estado = 14;
    }
  } else if (estado == 13) {
    if (zonabtn(480, 480, 100)) {
      estado = 15;
    }
  } else if (estado == 14) {
    if (zonabtn(490, 375, 70)) {
      estado = 15;
    } else if (zonabtn(490, 475, 70)) {
      estado = 16;//creditos
    }
  } else if (estado == 15) {
    if (zonabtn(480, 480, 100)) {
      estado = 16;//créditos
    }
  }
}
