class Centaur {

  constructor(name, breed) {
    this.name        = name;
    this.breed       = breed;
    this.cranky      = false;
    this.standing    = true;
    this.exhaustion  = 0;
    this.layingDown  = false;
  }

  shoot() {
    if (this.layingDown || this.maxExhaustion()) { 
      return this.refuse() 
    }
    else { 
      return this.addExhaustion('Twang!!!');
    }
  }

  run() {
    if (this.layingDown || this.maxExhaustion()) {
      return this.refuse()
    }
    else {
      return this.addExhaustion('Clop clop clop clop!!!');
    }
  }

  sleep() {
    return this.layingDown ? this.resetExhaustion('ZZZZ') : this.refuse()
  }

  layDown() {
    this.layingDown = true;
    this.standing   = false;
  }

  standUp() {
    this.layingDown = false;
    this.standing   = true;
  }

  refuse() {
    return 'NO!'
  }

  maxExhaustion() {
    return this.exhaustion >= 3
  }

  addExhaustion(response) {
    this.exhaustion += 1; 
    if (this.maxExhaustion) this.cranky = true;
    return response;
  }

  resetExhaustion(response) {
    this.exhaustion = 0;
    this.cranky = false
    return response
  }

  drinkPotion() {
    if (this.layingDown) return 'Not while I\'m laying down!';
    this.exhaustion = 0;
    this.cranky     = !this.cranky;
  }
}

module.exports = Centaur