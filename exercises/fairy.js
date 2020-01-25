class Fairy {

  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    dresses.forEach(dress => this.clothes.dresses.push(dress));
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infantToReplace) {
    if (this.isVengeful()) {
      this.humanWards.push(infantToReplace)
      infantToReplace.disposition = 'Malicious';
      if (this.humanWards.length >= 3) this.disposition = 'Good natured';
    }
    return infantToReplace;
  }

  isVengeful() {
    return this.disposition === 'Vengeful';
  }
}

module.exports = Fairy;