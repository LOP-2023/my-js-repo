let buyerName = "Jose";
let amountDue = "12000";
let itemName = "bricks";

if (
  buyerName.length >= 2 &&
  amountDue.toString().length === 5 &&
  itemName.length > 0
) {
  console.log("Valid: all conditions are met");
} else {
  console.log("Invalid: one or more conditions failed");
}

console.log("my own work");

let studentName = "jokie";
let age = 16;
let course = "antropology";
if (
  studentName.length >= 4 &&
  age.toString().length === 2 &&
  course.length > 0
) {
  console.log("Is true if all conditions are met");
} else {
  console.log("Is wrong if one or more condition is/ are wrong");
}

let employee = "jammie";
let salary = 2000000;
let department = "finance";
if (employee.length >= 6 && salary.toString().length === 6 && department > 0) {
  console.log("Correct: if all are true");
} else {
  console.log("Wrong: if one or two are false");
}

let member = "jeremie";
let shipNumber = 34542;
let bookTitle = "hamlet";

if (member.length > 6 && shipNumber.toString().length < 4 && bookTitle > 0) {
  console.log("YEAH: if all are true");
} else {
  console.log("NOPE: if any is wrong");
}