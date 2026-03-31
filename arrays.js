let stockItems = ["nails", "cement", "paint tins", "timber", "iron sheets"];
console.log(stockItems);
console.log(stockItems.length);
console.log(stockItems[0]);

let city = ["kamapala", 34, "is", "cold"];
console.log(city);
console.log(city[0]);
console.log(city.length);
let lastIndex = city.length - 1;
console.log(city[lastIndex], lastIndex);

let towns = ["chicago", "minesota", "boston", "bolton"];

console.log(towns.length);
let firstIndex = 0;
console.log(towns[firstIndex], firstIndex);
towns.push("manchester", "london", "brentford", "highbury");

console.log(towns);
towns.push("watford", "salisbury"); //adds towns at the end
towns.unshift("kent"); // adds items at the start
console.log(towns);

towns.pop();
towns.shift();

//splice(start at(), deleteCount(), insert()-optional)
towns.splice(1, 5, "lancaster", "norwich");
console.log(towns);
console.log(towns.indexOf("highbury"));
//when an index is not available, it returns -1
console.log(towns.indexOf("chicago"));
console.log(towns[2]);

let bestTown = "cardiff";
let searchIndex = towns.indexOf(bestTown);
if (searchIndex !== -1) {
  console.log(`the index of ${bestTown} is ${searchIndex}`);
} else {
  console.log(`${bestTown} was not found`);
}

console.log(towns.includes("plymouth"));
console.log(towns.includes("brentford"));

console.log(towns);
towns.pop(); // removes items at the end
console.log(towns);
towns.shift(); // removes items at the start
console.log(towns);

//reverse it changes the order: first becomes last and the vice versa
console.log("reverse_method");
const arr = ["uno", "dos", "tres"];
arr.reverse();
console.log(arr);

let players = ["palmer", "estevao", "neto", "jp"];
players.reverse();
console.log(players);

players.push("hato", "josh", "enzo");
players.unshift("rob_sanchez", "fofana");
console.log(players);
console.log("index of palmer");
console.log(players[2]);
console.log(players.indexOf("palmer"));
players.pop();
players.shift();
console.log(players);

players.splice(1, 3);
console.log(players);

//concat() method: used to merge two or more arrays. it does not change the existing array but returns new array

let countries = ["uganda", "Rwanda"];
let states = ["nigeria", "senegal"];
let combined = countries.concat(states);
console.log(combined);

let teams = ["chelsea", "villa"];
let leagues = ["epl", "efl"];
let together = teams.concat(leagues);
console.log(together);

let evenNumbers = ["0", "2"];
let oddNumbers = ["1", "3"];
let allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);

let pets = ["perro", "gato", "pesicado", "carne"];
let lastindex = pets.length - 1;
let firstindex = 0;

console.log(pets[lastindex]);
console.log(pets[firstindex]);

let names = ["jammie", "josh", "joe"];
names[1] = "jason";
console.log(names);

let fruits = ["mango", "apples", "orange"];
fruits[2] = "lemon";
console.log(fruits);

console.log(fruits.indexOf("mango"));

let timeOfDay = "1200";
let customWelcomeMessage = "";
switch (timeOfDay) {
  case "0800":
    customWelcomeMessage = "It is wake up time, pull up your socks";
    break;
  case "1000":
    customWelcomeMessage = "Welldone, you have risen; it is your time to shine";
    break;
  case "1200":
    customWelcomeMessage =
      "yes, you have done something: take a break workaholic";
    break;
  default:
    customWelcomeMessage = "all necessary things are necesaary";
    break;
}
console.log(customWelcomeMessage); // the console should be outside the curl brackets

let dishes = ['posho', 'rice', 'millet'];
console.log(dishes[2]);
console.log(dishes);
