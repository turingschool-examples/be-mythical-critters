class Direwolf {

  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name              = name;
    this.home              = home;
    this.size              = size;
    this.huntsWhiteWalkers = true;
    this.starksToProtect   = [];
  }

  protect(stark) {
    if (this.canProtect(stark)) {
      this.huntsWhiteWalkers = false
      this.starksToProtect.push(stark);
      stark.safe = true;
    }
  }

  canProtect(stark) {
    return this.home === stark.location && this.starksToProtect.length < 2;
  }

  leave(starkToRemove) {
    var newArray = []
    this.starksToProtect.forEach(function(stark) {
      if (stark !== starkToRemove) newArray.push(stark) 
    });
    starkToRemove.safe = false;
    this.starksToProtect = newArray;
  }
}

module.exports = Direwolf;