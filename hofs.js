//it is used o perform an operation on each element without creating a new array

// .foreach(callback);

const items = ["cement", "nails", "paint", "sand"];
items.forEach((value, index) => {
  console.log(value, index);
});
const elements = ["bread", "sugar", "salt", "oil"];
// function findelements(element, index) {
//   console.log(elements);
// }
elements.forEach((element, index) => {
  console.log(`element: ${element} index: ${index}`)
});

function log(callback) {
  callback();
}
log(() => {
  console.log("Sale log: add a new number 1");
});

function createCalculator(operation) {
  if (operation == "add") {
    return function (a, b) {
      return a + b;
    };
  }
  if (operation == "multiply") {
    return function (a, b) {
      return a * b;
    };
  }

  if (operation == "subtract") {
    return function (a, b) {
      return a - b;
    };
  }

  if (operation == "divide") {
    return function (a, b) {
      return a / b;
    };
  }
}

const add = createCalculator("add");
console.log(add(10, 20));
const divide = createCalculator("divide");
console.log(add(50, 5));
const subtract = createCalculator("subtract");
console.log(subtract(12, 7));
//
function convertCtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(20));
console.log(convertCtoF(100));

//MAPPING

let prices = [35_000, 40_000, 56_000, 23_000];
let newPrices = prices.map((price) => price * 2);
console.log(newPrices);

let firstNames = ["sherry", "meggy", "spelly", "elly"];
let newFirstNames = firstNames.map((firstNames) => firstNames.toUpperCase());
console.log(newFirstNames);

// FILTERING
prices = prices.filter((price) => price >= 50_000);
console.log(prices);

// REDUCING

function changeFtoC(farenheit) {
  return (farenheit * 5) / 9 - 32;
}
console.log(changeFtoC(270));
console.log(changeFtoC(180));
console.log(changeFtoC(90));

let ages = [23, 45, 24, 29, 34];
let sumOfAges = ages.reduce((acc, age) => {
  return acc + age;
}, 0);
console.log(sumOfAges);

let height = [120, 340, 240, 243, 125];
let sumOfHeight = height.reduce((previousAccValue, elementValue) => {
  return previousAccValue + elementValue;
}, 0);
console.log(sumOfAges / height.length);

function ConvertKmToM(KM) {
  return KM * 1000;
}
console.log(ConvertKmToM(23));
