class Human {

  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  encounter() {
    this.encounterCounter++;
  }

  noticesOgre() {
    if (!this.encounterCounter) return false;
    return (this.encounterCounter % 3 === 0);
  }

  getHit() {
    this.knockedOut = true;
  }

  acceptApology() {
    this.knockedOut = false;
  }
}

module.exports = Human;