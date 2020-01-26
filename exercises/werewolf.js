class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }

  eat(victim) {
    if (this.hungry === true) {
      victim.alive = false;
      this.human = true;
      this.wolf = false;
      this.hungry = false;
      return 'YUM!';
    } else {
      return 'I cannot eat because I am not hungry.';
    }
  }
}

module.exports = Werewolf;
