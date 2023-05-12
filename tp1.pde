//tp1
//Giorello Matias
//legajo:88104/4
int estado =0;
int segundos= 0;
PImage cancha;
PImage Bidegain;
PImage estadio;
PImage flecha;
PFont l;
float py = 0;
float px =0;
float opacidad = 255;
float vel = 1;
void setup() {

  size(640, 480);
  textSize(40);
  textAlign(CENTER);
  cancha =loadImage("Nuevo gasometro.jpg");
  Bidegain=loadImage("Nuevo gasometro 2.jpg");
  estadio=loadImage("nuevo gasometro 3.jpg");
  flecha=loadImage("Flecha.png");
  l=loadFont("Mifuente.vlw");
  textFont(l, 25);
}
void draw() {
  text(segundos, width/2, 300);
  if (frameCount%60==0) {
    segundos ++;
  }
  opacidad = py*255/height;
  if (frameCount%60==0) {


    vel = vel-0.01;
    ellipse(100, 100, 600, 430);
  }
  if (estado==0) {
    image(cancha, 0, 0);
    textSize(30);
    fill(0);
    text("Este es el estadio Pedro Bidegain", width/2, py);
    if (py<80) {
      py = py+0.5 * vel;
    }
  }
  if (estado==1) {
    image(Bidegain, 0, 0);
    textSize(25);
    fill(0, 0, 0);
    text("Es el estadio del club San lorenzo de Almagro", width/2, py);
    if (py<150) {
      py = py+0.2 * vel;
    }
  }
  if (estado==2) {
    image(estadio, 0, 0);
    textSize(30);
    fill(0);
    text("Tiene capacidad para 47.642 espectadores", width/2, py);
    if (py<200) {
      py = py+0.1 * vel;
      fill(255);
      ellipse(600, 450, 50, 50);
      fill(0);
      text("R", 600, 460);
      flecha.resize(30,30);
      image(flecha,520,435);
    }
  }
  if (segundos<=8) {
    estado = 0;
  } else if (segundos>8 && segundos<= 20) {
    estado = 1;
  } else {
    estado = 2;
  }
}

void mousePressed() {
  if (mouseX>=600 && mouseX<=460 && mouseY>=600 && mouseY<=460);
  segundos = 0;
  estado =0;
  py=0;
}
