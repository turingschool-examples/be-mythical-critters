class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      var oldVictim = this.statues.shift();
      oldVictim.stoned = false;
    }
  }
}
module.exports = Medusa;
