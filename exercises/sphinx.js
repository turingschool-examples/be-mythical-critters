class Sphinx {

  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.hasMaxRiddles()) this.riddles.shift();
    this.riddles.push(riddle);
  }

  hasMaxRiddles() {
    return this.riddles.length >= 3
  }

  attemptAnswer(guess) {
    const originalLength = this.riddles.length
    this.riddles = this.riddles.filter(riddle => riddle.answer !== guess);
    if (originalLength === this.riddles.length) {
      this.eatHero();
    }
    else {
      return this.mockHero(guess)
    }
  }

  mockHero(guess) {
    if (!this.riddles.length) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${guess}\"???`
    }
    else {
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
  }

  eatHero() {
    this.heroesEaten++;
  }
}

module.exports = Sphinx;