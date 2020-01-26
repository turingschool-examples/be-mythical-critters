class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0;
    this.cranky = false;
  }

  shoot() {
    this.incrementCount();
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.incrementCount();
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing || !this.layingDown) {
      return 'NO!';
    } else {
      this.crankyCount = 0;
      this.cranky = false;
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    } else if (this.crankyCount === 0) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }

  incrementCount() {
    this.crankyCount ++;
    if (this.crankyCount >= 3) {
      this.cranky = true;
    }
  }
}
module.exports = Centaur;
