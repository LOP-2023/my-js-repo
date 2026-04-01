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
