//this is single line comment
console.log(
  "Hello world",
  "This is my first JS class",
  "I want to learn many things and achieve a lot using JS language",
);
/**
 * this is multiple comments
 */
console.log("hello everyone");
console.log("I am sherry and I love coding");
console.log(`And I love JS, what about you`);
console.log(`Some say it is hard, "but for me it is possible" `);

console.log(343646);
console.log(0.78);
console.log(0.754232);

console.log(true);
console.log(false);

console.log(`mathematics in js`);
console.log(2 + 3);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 ** 2);
console.log(2 - 3);
console.log("js can do BODMAS");
console.log(38 * 2 + (4 - 2));
console.log(3 % 5);

console.log("variables", "let");
let number1 = 1;
let number2 = 4;
console.log(number1 + number2);

console.log("variables", "const");
const gravity = 9.8;
console.log(gravity);

//sphere
const PI = 22 / 7;
let radius = 6;
let areaOfASphere = (4 / 3) * PI * radius * radius * radius;
console.log("the area of a sphere with radius", radius, "is", areaOfASphere);

//rectangle
let length = 8;
let width = 6;
let areaOfARectangle = length * width;
console.log(
  "the area of a rectangle with length",
  length,
  "width",
  width,
  "is",
  areaOfARectangle,
);

//volume of a cylinder
let pi = 22 / 7;
let radii = 13;
let height = 7;
let volumeOfACylinder = pi * radii * radii * height;
console.log(
  "the volume of a cylinder",
  pi,
  "radii",
  radii,
  "height",
  height,
  "is",
  volumeOfACylinder,
);

//parseint
let age = "spe";
console.log(age - 9);
console.log(typeof age);

let spe = parseInt(age);
console.log(spe);
console.log(typeof spe);

let phonenumber = 256754888980;
phonenumber = phonenumber.toString();
console.log(phonenumber);

let address = "0";
let email = null;
console.log(Boolean(email));
console.log(Boolean(address));

let amount = "0";
amount = Number(amount);
console.log(Boolean(amount));

// Declare and initialize firstName and lastName
let firstName = "Spellah";
let lastName = "Sherinah";
let fullName = `This is the well formatted full name: ${firstName} ${lastName}`;
console.log(fullName);

//we can also use the addition operator to create space. (firstName + " " + lastName) = fullName

console.log(`the length of the full name is ${fullName.length}`);
let phoneNumber = "0754888980";
console.log(phoneNumber.length);

//initials of teh user
let initials = `${firstName[0]}.${lastName[0]}`;
console.log(initials);

console.log("this is to Upper case all characters", fullName.toLowerCase());
console.log("this is to lower case all chracters", fullName.toUpperCase());

// we are looking at the boolean operators
//loose equality this detects only values (=)

let AMOUNT = "4000";
let AMOUNTFromDB = 5000;
console.log(AMOUNT === AMOUNTFromDB);
//strict equalty: this detects both values and datatypes (===)
console.log(AMOUNT === AMOUNTFromDB);

let userCredentials = null;
console.log(userCredentials === null);

//loose inequality (!=)
console.log(AMOUNT != AMOUNTFromDB);
console.log(AMOUNT !== AMOUNTFromDB);

//greater operator
console.log(AMOUNT > AMOUNTFromDB);
//less than operator <
console.log(AMOUNT < AMOUNTFromDB);

//greater than or equal to >=
console.log(AMOUNT >= AMOUNTFromDB);
//less than or equal to =<
console.log(AMOUNT <= AMOUNTFromDB);

//logical operators
// And &&
let reportedAge = 17;
let actualAge = 47;
let gender = "M";
let Gender = "F";

let isMan = reportedAge >= 17 && gender === "M";
console.log(isMan);

let isWoman = actualAge <= 37 && Gender === "F";
console.log(isWoman);

//OR operator ||
let isAPublicHoliday = true;
let isAHoliday = false;
console.log(isAPublicHoliday || isAWeekend);

//NOT (!)
let isNotLoggedIn = !userCredentials;
console.log(isNotLoggedIn);

//&& is used when all conditions are true
//OR is used when one condition is false

let stockQuantity = "5000kg";
let newQua = "1000kg";
console.log(stockQuantity >= newQua);
console.log(newQua < stockQuantity);

console.log("SIMPLE ASSIGNMENTS");
//my strict quality is preffered because it detects both datatype and value
let cost = "5000";
let numberCost = 5000;
console.log(cost == numberCost);
console.log(cost === numberCost);

//
console.log(cost != numberCost);
console.log(cost !== numberCost);

console.log("AHHH");
let SupplierName = "Peter";
let COST = 10000;
let isValid = SupplierName.length >= 2 && COST.toString().length ===5;
console.log(isValid);

let isAdmin = false;
if (!isAdmin) {
  console.log("Access denied");
}

let darkMode = false;
console.log("Is dark mode active", darkMode);

console.log("Is darkMode active", darkMode);
console.log('This exe')

