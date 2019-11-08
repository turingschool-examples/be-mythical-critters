class Stark{
  constructor(name, location='Winterfell', safe=false){
    this.name=name;
    this.location=location;
    this.safe=safe
  };

  houseWords(){
    if(this.safe===false){
      return 'Winter is Coming'
    }else{
      return 'The North Remembers'
    }
  }
};

module.exports=Stark;
