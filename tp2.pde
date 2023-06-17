// Giorello, Matias 
//Legajo:88104/4
//link:https://www.youtube.com/watch?v=rbHuc79_FdA&feature=youtu.be&ab_channel=matiasgiorello
int cant = 40;
int tam;
color C;
PImage obra;

void setup() {
  size(800, 400);
  tam = height / cant;
  C = color(random(255), random(255), random(255));
  fill(C);
  obra = loadImage("ilusion.jpg");
}

void draw() {
  background(255);
  image(obra, 0, 0, width / 2, height);
  translate(400, 0);
  for (int x = 0; x < cant; x++) {
    for (int y = 0; y < cant; y++) {
      float distancia = dist(mouseX, mouseY, x * tam, y * tam);
      float opacidad = distancia * 255 / dist(width, height, 0, 0);
      if ((x + y) % 2 == 0) {
        fill(C, opacidad);
        float tamaño = tam + cambiarTamanoCuadrados();
        rect(x * tam, y * tam, tamaño, tamaño);
      } else {
        fill(0);
        float tamaño = tam;
        rect(x * tam, y * tam, tamaño, tamaño);
      }
    }
  }
}
void keyPressed() {
  if (key == 'c' || key == 'C') {
    changeColor();
  }
}

void changeColor() {
  C = color(random(255), random(255), random(255));
}

float cambiarTamanoCuadrados() {
  float valor = map(mouseX, 0, width, -tam, tam);
  return valor;
}
