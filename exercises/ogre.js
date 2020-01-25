class Ogre {

  constructor(name, home = 'Swamp') {
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(human) {
    human.encounter();
    if (human.noticesOgre()) this.swingAt(human)
  }

  swingAt(human) {
    if (++this.swings % 2 == 0) human.getHit();
  }

  apologize(human) {
    human.acceptApology();
  }
}

module.exports = Ogre;