class Werewolf {
  constructor(name, location, human=true, wolf=false, hungry=false){
    this.name=name;
    this.location=location;
    this.human=human
    this.wolf=wolf
    this.hungry=hungry
  }

  change(){
    this.human=!this.human
    this.wolf=!this.wolf
    if (this.wolf === true) {
      this.hungry = true
    } else if (this.wolf === false) {
      this.hungry = false
    }
  }

  eat(victim){
    if (this.hungry === true) {
      victim.alive = false
      this.change()
      return 'YUM!';
    } else {
      return 'I cannot eat because I am not hungry.';
    };
  };
}

module.exports = Werewolf;
