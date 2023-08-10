//Giorello, Matias
//Legajo: 88104/4
//tp2
PImage img;
int num = 50, frames = 120;
float velrotacion = 0.01;
boolean click = false;

void setup() {
  size(800, 400);
  stroke(255);
  noStroke();
  fill(255);

  img = loadImage("ilusion 1.png");
  img.resize(400, 400);
}

void draw() {
  background(0);

  image(img, 0, height/2 - img.height/2);

  float radiomousex = map(mouseX, 0, width, -0.02, 0.02);
  float radiomousey = map(mouseY, 0, height, 0.2, 0.02);
  float rotacion= millis() * velrotacion * (radiomousex + radiomousey);

  float posx, posy, tamaño;

  //anillos más grandes
  posx = width - 200;
  posy = height / 4;
  tamaño = 100;
  dibujarilusion(posx, posy, tamaño, rotacion);

  posy = 3 * height / 4;
  dibujarilusion(posx, posy, tamaño, rotacion);

  //anillos más pequeños a la derecha de los grandes
  posx = width - 110;
  posy = height / 4;
  tamaño = 50;
  dibujarilusion(posx, posy, tamaño, rotacion);

  posy = 3 * height / 4;
  dibujarilusion(posx, posy, tamaño, rotacion);

  //anillos más pequeños a la izquierda de los grandes
  posx = width / 2 + 100;
  posy = height / 4;
  tamaño= 50;
  dibujarilusion(posx, posy,tamaño, rotacion);

  posy = 3 * height / 4;
  dibujarilusion(posx, posy, tamaño, rotacion);
}

void dibujarilusion(float posx, float posy, float tamaño, float rotacion) {
  for (int j = 0; j < 3; j++) {
    if (click) {
      fill(coloraleatorio());
    }

    for (int i = 0; i < num; i++) {
      float angulo = TWO_PI / num * i;
      float x = posx + j * 5 + cos(angulo + rotacion) * tamaño;
      float y = posy + sin(angulo + rotacion) * tamaño;
      pushMatrix();
      translate(x, y);
      rotate(rotacion + angulo);
      float tamaño2 = tamaño * 1.5;
      arc(0, 0, tamaño2, tamaño2, 0, radians(5));
      popMatrix();
    }
  }

  click = false; 
}

void mouseClicked() {
  click = true; 
}

color coloraleatorio() {
  return color(random(255), random(255), random(255));
}
