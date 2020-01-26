class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true
  }

  protect(person) {
    if (this.home === person.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(person);
      this.huntsWhiteWalkers = false;
      person.safe = true;
    }
  }

  leave(person) {
    this.starksToProtect = [];
    person.safe = false;
  }
}

module.exports = Direwolf;
