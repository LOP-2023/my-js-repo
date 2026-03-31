let sale = {
  customerName: "Dally",
  itemName: "paint",
  itemcost: 30000,
  tax: 0.18,
  isCredit: true,
  contact: ["0745237869", "0789234163"],
};

let sales = {
  customerName: "Hurst",
  itemName: "Timber",
  itemcost: 20000,
  tax: 0.18,
  isCredit: false,
  phoneNumbers: ["0756342590", "0786453902"],
  purchaseDate: new Date(),
};
console.log(sale);
console.log(sales);

console.log(sale.customerName, sale.itemName, sale.tax, sale.contact);
console.log(sales.itemName, sales.customerName, sales.purchaseDate);
console.log(sales);
sales.isCredit = !sales.isCredit;
console.log(sales);

let Team = {
  teamName: "chelsea",
  managerName: "Rosenior",
  captainName: "Reece James",
  stadiumName: "Stamford Bridge",
  townName: "London",
  rivalsName: "Arsenal",
};
console.log(Team);
console.log(Team.teamName, Team.captainName, Team.townName, Team.managerName);

//

function validName() {
  let userName = "meg";
  let phoneNumber = "0789543215";
  password = "12er234hgt7";
  let validName =
    userName.length >= 4 && password.length === 10 && phoneNumber != "";

  if (validName) {
    return true;
  } else {
    return false;
  }
}
console.log(validName());

// loops
let items = ["nails", "timber", "cement", "paint"];
items[2] = "ironsheets";
console.log(items);
console.log(items[2]);
console.log(items.indexOf("timber"));
items.push("drill", "wire");
items.unshift("bulbs");
console.log(items);
let lastIndex = items.length - 1;
console.log(lastIndex);
console.log("pop/push");
items.pop();
items.shift();
console.log(items);

items.reverse();
console.log(items);

//concat() property
let songs = ["good", "interesting"];
let artists = ["her", "him"];
let combined = songs.concat(artists);
console.log(combined);

console.log(artists.indexOf("her"));
console.log(artists[1]);

//switch
let daysOfWeek = "monday";
let customWelcomeMessage = " ";
switch (daysOfWeek) {
  case "monday":
    customWelcomeMessage =
      "this is the first day of the week. it is all interesting";
    break;
  case "Tuesday":
    customWelcomeMessage =
      "this is next to monday. yet another day to eat, sleeep, and live";
    break;
  case "wednesday":
    customWelcomeMessage =
      "it is just a wednesday; likeall other days, nothing different";
    break;
  default:
    customWelcomeMessage = '"all days are good"';
    break;
}
console.log(customWelcomeMessage);

let hasPaid = "cleared";

if (hasPaid == "cleared") {
  console.log(
    "customer has cleared. No debt left to pay, and can get another debt",
  );
} else if (hasPaid == "notSure") {
  console.log("Thoroughly check before granting full customer information");
} else {
  hasPaid == "notSure";
  console.log("can not acquire another debt. needs to pay pending debt");
}

let isAsupplier = "";
if (isAsupplier == "yes") {
  console.log("make records before paying for deliveries");
} else if (isAsupplier == "no") {
  console.log("check visitor's other books to confirm");
} else {
  console.log("call for assistance");
}

let company = {
  location: "Gulu",
  hasStock: true,
  staff: 32,
  manager: "cheche",
};
let querry = "manager";
console.log(company.querry);
console.log(company[querry]);

let branchOne = { attendants: 2 };
branchOne.attendants = 3;
branchOne.priceToSell = 5500;
console.log(branchOne);

let business = { managers: 4 };
business.managers = 5;
business.newManger = "deo";
console.log(business);

let branchTwo = { manager: "peter", hasFarm: true, isCredit: true };
delete branchTwo.hasFarm;
console.log(branchTwo);

if (branchTwo.isCredit == true) {
  branchTwo.isCredit = "duedate soon";
  console.log(branchTwo);
}

let branchThree = { manager: "james", storeKeepers: 2 };
//branchThree.storeAttendants = 6;
branchThree.newManagers = "dan";
delete branchThree.storeKeepers;
console.log(branchThree);

let org = {
  customer: "patima",
  items: "paint",
  payment: "cash",
  location: "petersburg",
  amount: 349000,
  gotDiscount: true,
};
for (const key in org) {
  if (typeof org[key] == "boolean") {
    console.log(org[key]);
  }
}

//methods
//1. object.keys
const user = { name: "gerald", role: "manager" };
const keysArray= Object.keys(user);
console.log(keysArray);

//2. object.values
const users = { name: "pavin", role: "generalManager" };
const valsArray = Object.values(users);
console.log(valsArray);

//3.

let salesRecord = {
  itemName: "Hammer",
  quantityInUnits: 50,
  amountPaid: 400000,
  buyersName: "Greg",
};
console.log(salesRecord);


let age = 25
if(age == 25){
  console.log("age is 25")
};
