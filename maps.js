let sales = new Map();
let date = new Date("2026-03-31");

sales
  .set("maria", 350_000)
  .set("meghan", 400_000)
  .set(new Date("2025-03-31"), 500_000)
  .set([0, 1], "test");
console.log(sales);

console.log(sales.get("maria"));

if (sales.has("maria")) {
  console.log(sales.get("maria"));
} else {
  sales.set("maria", 750_000);
}
console.log(sales);

//sales.delete("maria");
//console.log(sales);

let inventory = new Map([
  ['cement', 100],
  ['nails', 1000],
  ['bricks', 3500],
  ['paint', 40]
]);

for (const [key, value] of inventory) {
  console.log(key, value);
}
let suppliers = new Set();
let records = [
  "Maria",
  "James",
  "Peter",
  "Meghan",
  "James",
  "Peter",
  "Maria",
  "Meghan",

];
records.forEach(name => suppliers.add(name));

console.log("Unique suppliers count:", suppliers.size);

console.log("Unique suppliers list:", [...suppliers]);

