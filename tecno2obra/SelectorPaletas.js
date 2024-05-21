class SelectorPaletas {
  constructor(lista) {
    this.paletas = [];
    for (let i = 0; i < lista.length; i++) {
      let p = new Paleta(lista[i]);
      this.paletas.push(p);
    }
    this.elegir();
  }

  elegir() {
    let cual = int(random(this.paletas.length));
    this.elegida = this.paletas[cual];
  }

  darUnColor() {
    return this.elegida.darUnColor();
  }

  darUnColor(cualPaleta) {
    let esta = this.elegida;
    if (cualPaleta < this.paletas.length) {
      esta = this.paletas[cualPaleta];
    }
    return esta.darUnColor();
  }
}
