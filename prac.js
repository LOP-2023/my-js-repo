//destructuring
let stock = ["cement", "nails", "paint", "timber"];
let [a, b, c, d] = stock;
console.log(a, b, c, d);

//
let sales = {
  item: "sand",
  buyer: "tomas",
  cost: 70000,
  isCredit: false,
  qty: 2,
};
const { item, buyer, cost, isCredit, qty } = sales;
console.log(item);
console.log(buyer);
console.log(qty);
console.log(cost);

const suppliers = ["harry", "jerry", "terry", "sherry"];
const [, hammers, iron = 0, drill] = suppliers;
// console.log(hammers)
// console.log(drill)
//console.log(iron)
console.log(suppliers);

const goods = ["paper", "ply", "boxes", "board"];

let buyerInformation1 = {
  item: "gas",
  contact: "0788584391",
  totalCost: "1200000",
  location: "Namanve",
  payment: "cash",
  gotDiscount: true,
};
let { gotDiscount: buyerInformation } = true;
console.log(buyerInformation1);

let buyerInformation2 = {
  item: "gas",
  contact: "0788584391",
  totalCost: "1200000",
  location: "Namanve",
  payment: "cash",
  gotDiscount: true,
};
let { gotDiscount: buyerInformation5 } = true;

console.log(buyerInformation2);

//spreading
let colors = ["green", "blue", "red", "yellow"];
let newColors = [...colors];
console.log(newColors);

let cities = ["doha", "daka", "kano", "endo"];
let newCities = [...cities];
console.log(newCities);

console.log(...cities, ...colors);

let purchases = {
  customerName: "bridget",
  item: "sino",
  costs: 45_000,
  isCredit: false,
  payment: "mobileMoney",
};
let latestPurchases = { ...purchases };
console.log(latestPurchases);

const recordInformation = {
  totalPurchases: 78,
  mostPurchased: "cement",
  totalDiscount: 560000,
  transportation: "bySupplier",
  dueDate: "2026-05-01",
  overAll: true,
};
let latestRecordInformation = { ...recordInformation };
console.log(latestRecordInformation);

let newRecords = {
  ...latestPurchases,
  ...latestRecordInformation,
  dueDate: new Date("2026-06-01").toString(),
};
console.log(newRecords);

function numbers(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(numbers(12, 67, 34, 78));

function letters(...letters) {
  console.log(letters);
  return letters.reduce((acc, letters) => acc + letters, 0);
}
console.log(letters(23, 10, 22));

function sayHello(...sayHello) {
  console.log(sayHello);
  return sayHello.reduce((acc, sayHello) => acc + sayHello, 0);
}
console.log(sayHello(23, 10, 11, 45));

let heights = [23, 33, 54, 17, 36];
let newheights = heights.filter((heights) => heights > 30);
console.log(newheights);

let length = [20, 10, 30, 40, 50, 60];
let newLength = length.filter((length) => length < 50);
console.log(newLength);

function greet(name) {
  console.log(`welcome ${name}`);
}
greet("sherinah");

function changeFtoC(celsius) {
  console.log(changeFtoC);
  return (celsius * 5) / 9 + 32;
}
console.log(changeFtoC(23));

function convertKMtoM(KM) {
  console.log(convertKMtoM);
  return KM * 1000;
}
console.log(convertKMtoM(2));

let creditSales = {
  buyerName: "jami",  
  amountDue: 23_000,
  dueDate: "2026-04-10",
  salesAgentName: "Rosie",
};
let { buyerName, amountDue, dueDate, salesAgentName } = creditSales;
console.log(buyerName,  dueDate, )

let kampalaStock = ["cement", "nails"]
let newKampalaStock = [...kampalaStock]

let branch2Stock = ["sand", "paper"]
let newBranch2Stock = [...branch2Stock]

let mergedBranch = [...kampalaStock, ...branch2Stock]
console.log(mergedBranch)

let procurement = {commodity: "cement", quantity: 34, customer: "jerry", };
let newProc = {...procurement, priceToSell: "230_000"}
console.log(newProc)