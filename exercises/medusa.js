class Medusa {
  
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  
  stare(victim) {
    if (this.hasMaxStatues()) this.unstoneVictim(this.statues.shift());
    this.stoneVictim(victim);
  }

  hasMaxStatues() {
    return (this.statues.length >= 3);
  }

  stoneVictim(victim) {
    victim.stoned = true;
    this.statues.push(victim);
  }

  unstoneVictim(victim) {
    victim.stoned = false
  }
}

module.exports = Medusa;