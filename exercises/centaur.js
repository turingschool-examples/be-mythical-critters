class Centaur {
  constructor(name, breed, cranky=false, standing=true, layingDown=false) {
    this.name=name
    this.breed=breed
    this.cranky=cranky
    this.standing=standing
    this.layingDown=layingDown
    this.count=0
  }

  crank(){
    if (this.count <= 3){
      this.count += 1
    }
    if (this.count >= 3){
      this.cranky=true
    }
  };

  shoot(){
    if (this.layingDown===true){
      return 'NO!'
    } else {
      this.crank();
      if (this.cranky===true){
        return 'NO!';
      } else {
        return 'Twang!!!';
      }
    };
  };

  run(){
    if (this.layingDown===true){
      return 'NO!'
    } else {
      this.crank();
      return 'Clop clop clop clop!!!';
    }
  };

  sleep(){
    if (this.standing===true){
      return 'NO!';
    } else {
      this.rejuvinate()
      return 'ZZZZ';
    };
  };

  layDown(){
    this.standing=false;
    this.layingDown=true;
  };

  standUp(){
    this.standing=true;
    this.layingDown=false;
  };

  drinkPotion(){
    if (this.layingDown===true) {
      return 'Not while I\'m laying down!';
    } else if (this.standing===true) {
      if (this.cranky===false){
        this.cranky=true;
      } else {
        this.rejuvinate();
      }
    };
  }

  rejuvinate(){
    this.count=0;
    this.cranky=false;
  }

}

module.exports = Centaur
