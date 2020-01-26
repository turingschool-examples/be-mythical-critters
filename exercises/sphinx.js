class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length > 2) {
      this.riddles.shift();
    }
    this.riddles.push(riddle);
  }

  attemptAnswer(guess) {
    for (const riddle of this.riddles) {
      if (guess === riddle.answer) {
        this.riddles.splice(this.riddles.indexOf(riddle), 1 );
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${guess}\"???`;
        }
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
    }
    this.heroesEaten ++;
  }
}
module.exports = Sphinx;
