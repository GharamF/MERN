class Ninja{
    constructor (name,health){
        this.name = name ; 
        this.health= 100;
        this.spped= 3;
        this.strength = 3;
    }
    
    sayName(){
        return console.log("Ninja's name is : "+this.name);
        
    }
    showStats(){
        return console.log('Ninja Name: '+this.name+" Ninja's health :"+this.health+" Ninja's Strngth :"+this.strength+" Ninja's Speed :"+this.spped+' ')
    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja{
    constructor(name,health,strength,wisdom,spped){
      super(name , health,strength ,wisdom,spped)
      this.health=200;
      this.strength=10;
      this.wisdom=10;
      this.spped=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        console.log ("Sensei wisdome = "+this.wisdom)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
console.log("\n");
var ninja1 = new Ninja('Hyabusa');
ninja1.sayName(); 
ninja1.drinkSake();
ninja1.showStats();