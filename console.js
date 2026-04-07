//console.warn
console.warn("invalid data");

let stock = 500;
if (stock < 750) {
  console.warn("low stock: stock is less than 750");
}

//console.error
let amount = " ";
if (amount === " ") {
  console.error("validation failed: amount can not be empty");
}

//console.info
console.info("Data has  been recorded successfully");

//TESTING WITH CONSOLE.ASSERT() this only display when the condition is false

let tonnage = 1000;
console.assert(tonnage > 1200, "violation: tonnage is below minimum of 12000");

//console tables
let sales = [
  {
    customer: "Jason",
    item: "timber",
    quantity: 100,
    price: 400_000,
    tax: 0.15,
    isCredit: false,
    phoneNumber: "0776654737",
    "Purchase Date": new Date(),
  },
];
//const sales1 = [{...sales}]

let SALES = [
  {
    customer: "Jayden",
    item: "paint",
    quantity: 12,
    price: 40_000,
    tax: 0.15,
    isCredit: false,
    phoneNumber: "0788654783",
    "Purchase Date": new Date(),
  },
];
//const sales2 =[{...SALES}]

let sale = [
  {
    customer: "Jackson",
    item: "sand",
    quantity: 23,
    price: 120_000,
    tax: 0.15,
    isCredit: true,
    phoneNumber: "0783105473",
    "Purchase Date": new Date(),
  },
];
//const sales3 = [{...sale}]

let allSales = [...sales, ...SALES, ...sale];
console.table(allSales);

console.dir(allSales);

const paymentMethod = ["cash", "credit", "credit", "cash", "cash"];
paymentMethod.forEach((paymentMethod) => {
  if (paymentMethod === "cash") {
    console.count("cash");
  } else {
    console.count("credit");
  }
});

// const paymentMethod = ["cash", "credit", "credit", "cash", "cash"]
// paymentMethod .forEach(paymentMethod => {
//     if (paymentMethod === "cash"){console.count("cash")}
//     else {console.count("credit")}
// })

let purchases = ["pens", "pens", "books", "books", "books", "pens"];
purchases.forEach((purchases) => {
  if (purchases === "pens") {
    console.count("pens");
  }
  else{console.count("books")}
});


// time() and timeEnd()
console.time("for loop");
let sum = 0;
for (let i = 0; i <= 10000; i++) {
    sum += i;
}
console.timeEnd("for loop");

console.time("while loop");
let summation = 0;
let i = 0;
while (i <= 10000) {
    summation += i;
    i++;
}
console.timeEnd("while loop");
