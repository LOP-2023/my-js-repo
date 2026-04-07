const scores = [25, 60, 55, 9, 75, 58, 80]

let numberOfHighScores = scores.reduce((acc, currentValue)=> {
if (currentValue > 50){
    acc++
}
return acc
}, 0)
console.log(numberOfHighScores)

//returns an array but does not destroy the original array

//filter out scores that are less than 50

let highScores = scores.filter(score => score < 50)
//console.log(highScores);

//reduce
let gameScores = [
    {player: "sherinah", score: 100},
    {player: "martha", score: 50},
    {player: "spellah", score: 95},
    {player: "sherinah", score: 90},
    {player: "sharitah", score: 30},
    {player: "irene", score: 70},

]
const sherinahTotalScore = gameScores.reduce((acc, currentValue)=>{
    if (currentValue.player === "sherinah"){
        acc+= currentValue.score
        //acc++
    }
    return acc
}, 0)
console.log(sherinahTotalScore);
sayHello()
function sayHello() {
  console.log("hello");
}
sayHello()
const greet = () => {
  console.log("hello");
};
greet()


//classes.js
class Sales{
    Name= "gero"
    item= "nails"
    price= 87000
    quantity=12
    tax=0.17
    isCredit= true

    constructor(Name,item,price,quantity,tax,isCredit){
        this.Name = Name
        this.item = item
        this.price = price
        this.quantity = quantity
        this.tax = tax
        this.isCredit = isCredit

    }
    calculateTotalCost(){
        return this.quantity * this.price * (1 + this.tax)
    }
    }
let sales = new Sales("gero", "nails",87000,12,0.18,true)
let sale = new Sales("jay", "cement", 34000, 13, 0.18, false)
let SALES = new Sales("cook", "pipes", 23000, 24, 0.15, false)
console.log(sales)
console.log(SALES)
console.log(sale.calculateTotalCost())
console.log(SALES.calculateTotalCost())

//an instance is when an object came into existance