class Stark {
  constructor(name, location = 'Winterfell') {
    this.name = name;
    this.location = location;
    this.safe = false;
  }

  houseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }
}

module.exports = Stark;
