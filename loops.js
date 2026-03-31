// let sumTo10 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
// console.log(sumTo10);

// console.log("sum");
// let sum = 0;
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log(sum);

// console.log("addition_2");
// let add = 0;
// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
//   add = add + i;
// }
// console.log(add);

// console.log("difference");
// let dif = 0;
// for (let i = 10; i >= 5; i = i - 1) {
//   console.log(i);
//   dif = dif - i;
// }
// console.log(dif);

// //letdo some console.log

// let sales = [300000, 450000, 870000, 230000];
// let totalSales = 0;
// for (let i = 0; i < sales.length; i++) {
//   console.log(sales[i]);
//   totalSales = totalSales + sales[i];
// }
// console.log(totalSales);

// //...for loop..............
// let trialAttempt = 0;
// let isLoggedIn = false;
// let numberOfTrials = 5;
// while (isLoggedIn == false) {
//   console.log("please Login");
//   trialAttempt = trialAttempt + 1;
//   if (trialAttempt == numberOfTrials) isLoggedIn = true;
// }

// //

// let currentIndex = 0;
// let newSalesTotals = 0;
// while (currentIndex < sales.length) {
//   console.log(
//     `Current index: ${currentIndex}  the valus is ${sales[currentIndex]}`,
//   );

//   newSalesTotals = newSalesTotals + sales[currentIndex];
//   currentIndex += 1;
// }
// console.log(newSalesTotals);
// //come back later: and set an example for this
// //for(const sale of sales)
// //console.log(sale)

// let artists = ["gem", "hem", "kem"];
// for (let artist of artists) {
//   console.log(artist);
// }

// for (let i = 1; i < 10; i++) {
//   if (i % 3 === 0) {
//     break;
//   }
//   console.log(i);
// }
// // if you add the continue property, it skips the conditions: for this case(3, 6, 9) will not be displayed
// // the break proprty ends a loop, for the above example: it will only display 1,2

// let trafficLight = "red";
// let timePassed = 0;
// while (trafficLight === "red") {
//   console.log("please stop, dont go");

//   if (timePassed > 5) {
//     trafficLight = "green";
//   }
//   timePassed++;
// }
// if (trafficLight == "green") {
//   console.log("you can go");
// }

// //functions
// console.log('average')
// let ages = [23, 45, 18, 32];
// let _sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   _sum += ages[i];
// }
// console.log(_sum / ages.length);

// console.log("height average")
// let height = [10, 17, 13, 27, 34, 22]
// let summ = 0
// for(let i=0; i<height.length; i++){
//    summ += height[i];
// }
// console.log(summ/height.length);

// console.log("more about average");
// let length = [30, 20, 34, 22, 90, 23]
// let SUM = 0
// for(let i = 0; i < length.length; i++){
//   SUM += length[i];
// }
// console.log(SUM/length.length);

// function totalCost(quantity, costPrice, tax){
//   return quantity * costPrice * (1 + tax)

// let _totalCost = totalCost(1000, 35000, 0.18)
// console.log(`The total cost of cement is ${_totalCost}`)

// let isOffSide ="past"
// let moreLength = 0
// let foul = 0
// let endPlay = 0
// while(isOffSide === "past"){
//   console.log('no goal, player is offside');

//   if (moreLength > 3){
//     isOffSide = "goal allowed, player onside"
//   }
//   moreLength++;
// }
// if (isOffSide = "goal allowed, player onside"){
//   console.log("VAR DECISION: goal allowed")
// }
// if (isOffSide = "foul"){
//   console.log("stop play, there is bad play")
// }
// if(isOffSide = "endPlay"){
//   console.log("FULLTIME SCORE: game over")
// }
//parameters are values that change over time;
function greet(time, name) {
  console.log(`good ${time} ${name}`);
  //console.log("hi");
}

greet("morning", "sherinah");
greet("evening", "Acom");

function sports(games, Name) {
  console.log(`do you support ${games} ${Name}`);
}
sports("football", "meghan");
sports("volley ball", "Angie");

function hobbies(nature, activity) {
  console.log(`I am a ${nature} ${activity}`);
}
hobbies("fan", "music");
hobbies("love of", "gospel music");

function totalDistance (speed, time){
console.log(`The total distance covered was ${speed} ${time}`)
let totalDistance = speed * time; return grandTotalDistance;
}
let grandTotalDistance = (100, 2)

// //arrow functions


//scopes
let x =0

function scope()
{//local scope
let x = 10
console.log(x)
}

scope()
// 
