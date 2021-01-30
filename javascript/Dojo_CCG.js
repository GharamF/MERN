class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=name;

    }
}
class Unit extends Card{
    constructor(name, cost,power,res){
        super(name , cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res -= this.power;
        //reduce res by power 
    }

}
class Effect extends Card{
    constructor(name,cost,stat,magnitude,text){
        super(name,cost,stat,magnitude.text)
        this.stat=stat;
        this.magnitude=magnitude;
        this.text= text
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat=='resilience'){
                target.res += this.magnitude;
                console.log(this.text);
            }
            else if (this.stat = 'power'){
                target.power += this.magnitude;
                console.log(this.text);
            }
            // implement card text here
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

var player1 = new Unit("Red Belt Ninja", 3 ,3,4)
var player2 = new Unit('Black Belt Ninja', 4 ,5,4)

var effect1= new Effect('Hard Algorthim',2,'resilience',3 ,"increase target's resilience by 3" )
var effect2= new Effect('Unhandled Promise Rejection',1 , 'resilience',2 , "reduce target's resilience by 2")
var effect3 = new Effect ('Pair Programming', 3 , 'power',2, "increase target's power by 2")

//Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
effect1.play(player1) 

//	Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
effect2.play(player1)

//Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
effect3.play(player1)

//"Red Belt Ninja" uses the attack method on "Black Belt Ninja"
player1.attack(player2)
console.log(player1,player2)