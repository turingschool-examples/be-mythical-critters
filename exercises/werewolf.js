class Werewolf {

  constructor(name, location) {
    this.name     = name;
    this.location = location;
    this.human    = true;
    this.wolf     = false;
    this.hungry   = false;
  }

  change() {
    this.human  = !this.human;
    this.wolf   = !this.wolf;
    this.hungry = !this.hungry;
  }

  eat(victim) {
    return this.canEat() ? this.eatVictim(victim) : this.notHungry();
  }

  canEat() {
    return (this.hungry && !this.human)
  }

  eatVictim(victim) {
    victim.alive = false;
    this.change();
    return 'YUM!';
  }

  notHungry () {
    return 'I cannot eat because I am not hungry.';
  }
}

module.exports = Werewolf;