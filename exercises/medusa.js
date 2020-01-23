class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    victim.stoned = true;
    if (this.statues.length < 3) {
      this.statues.push(victim);
    } else {
      this.statues.push(victim);
      const removed_victim = this.statues.shift();
      removed_victim.stoned = false;
    }
  }
}

module.exports = Medusa;
