//spreading(...)
//arrays: it helps to safely copy and merge arrays
//COPYING ARRAYS

let age = [12, 34, 23, 43, 11, 16];
let ageOld = [78, 89, 75, 69];
let newAge = [...age];
console.log(...age);

age.pop();
console.log(newAge, newAge.length);

//merging arrays
let newAges = [...age, ...ageOld];
console.log(newAges);

let sales = {
  customerName: "patty",
  itemName: "timber",
  cost_price: 35_000,
  tax: 0.18,
};
let creditInformation = {
  customerName: "patty b",
  dueDate: "01-04-2026",
  closingBalancee: 50000,
};

let newSales = { ...sales };
let brandNewSales = {
  ...sales,
  ...creditInformation,
  dueDate: new Date("23-04-2026").toString(),
};
console.log(newSales);

sales.customerName = "paul";
console.log(newSales);

function add(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(add(1, 7, 34, 3, 87, 44, 23));
