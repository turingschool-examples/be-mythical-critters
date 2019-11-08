class Fairy{
  constructor(name, dust=10, clothes={dresses: ['Iris']}, disposition='Good natured'){
    this.name=name;
    this.dust=dust;
    this.clothes=clothes;
    this.disposition=disposition;
    this.humanWards=[]
  }

  receiveBelief(){
    this.dust += 1;
  }

  believe(){
    this.dust += 10;
  }

  makeDresses(dresses){
    var fairy_dresses = this.clothes.dresses
    dresses.forEach(function(dress){
      fairy_dresses.push(dress);
    })
  }

  provoke(){
    this.disposition='Vengeful'
  }

  replaceInfant(infant){
    if(this.disposition==='Vengeful'){
      this.humanWards.push(infant)
      infant.disposition='Malicious'
    };
    if(this.humanWards.length===3){
      this.disposition='Good natured'
    }
    return infant
  }

}
module.exports=Fairy;
