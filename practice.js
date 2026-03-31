console.log(typeof "mas");
console.log(typeof 33);
console.log(typeof false);
console.log(typeof null);
console.log(undefined);

//data casting(changing on datatype to another)

let currentStock = 1000;
let newEntry = 200;
let finalStock = currentStock + newEntry;
console.log(finalStock);

console.log("data casting");
console.log(
  "parseInt, used to convert a string to a number for only whole numbers",
);
let string = "56";
let number = parseInt(string);
console.log(typeof number);

let friend = "100";
let num = parseInt(friend);
console.log(typeof num);

let age = "19";
let NUmber = parseInt(age);
console.log(typeof NUmber);

console.log(
  "parseFloat, used for converting a string to a number where decimals are important",
);

let Str = "44.89";
let Num = parseFloat(Str);
console.log(typeof Num);

let sTr = "4.7";
let nUM = parseFloat(sTr);
console.log(typeof nUM);

console.log(
  "using a number constructor, this also preserves a decimal if it is there",
);
let str = "90";
let NUM = Number(str);
console.log(NUM);

console.log("Now lets convert number to text");
console.log("using String");
let total = 50000;
let totalText = String(total);
console.log(typeof totalText);

let sum = 35;
let sumOfItems = String(sum);
console.log(sumOfItems);

console.log("using .toString");
let Total = 56;
let words = Total.toString();
console.log(typeof words);

console.log("conversion to Boolean");
console.log(Boolean("mine")); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean(0)); //false

console.log("string concatenation, joining two or more strings together");

let greeting = "hello" + " " + "students";
console.log(greeting);

console.log("using template literals");
let favoriteName = "spellah";
let surName = "sherinah";
let fullName = `${favoriteName} ${surName}`;
console.log(fullName);

console.log(
  "String interpolation, here you can inject variables directly into the string by wrapping them in ${...}",
);

let Name = `meghan`;
let logos = `welcome, ${Name}!`;
console.log(logos);

const supplier = `mike`;
const item = `cement`;
const record = `Dealer: ${supplier} procured ${item}.`;
console.log(record);

console.log("String,Length");
console.log("here we use the .length property");

let WORD = "property";
console.log(WORD.length);

let NUMERO = "sheisgood";
console.log(NUMERO.length);

console.log(
  "Name Validation",
  "students name must not not be lessthan 9 characters",
);

let student = "nanyodo";
if (student.length > 5) {
  console.log("name is too long");
}

console.log(
  "Month validation,",
  "months name must not be lessthan 6 characters",
);
let month = "may";
if (month.length < 6) {
  console.log("Name is too SHORT");
}

console.log(
  "Accessing characters",
  "strings are are index-based",
  "this means every character has a specific numerical position.",
  "we can extract specific letters",
);

console.log(
  "zero-based indexing",
  "in programming, we start counting at 0 not one",
  "the first character is always at index 0",
);

console.log("bracket notation[]", "we access characters using these brackets");

let myString = "success";
console.log(myString[0]);

let forever = "withYou";
console.log(forever[5]);

console.log("lets find the last character", "here we use -1");
let football = "wonderful";
let lastChar = football[football.length - 1];
console.log(lastChar);

console.log('commmon string methods', 'methods allow us to quickly manipulate and format text', 'we access them using dot notation');

let message = "how are you";
console.log(message.toUpperCase());

let yes = 'I AM ALRIGHT';
console.log(yes.toLowerCase());

console.log("NGH Context", 'lets normalize our data', 'we use casing methods to normalize input before saving');

console.log('lets start by using the subString() Concept');

console.log('syntax: subString(startIndex, endIndex', 'it stops before the end index');

let StR = 'good';
console.log(StR.substring(0, 2));

let trs = "exactly";
console.log(trs.substring(0, 2));

console.log('.split() Concept', 'useful for breaking sentences into words and passing CSV data');

let Nome = "sherry spelly";
console.log(Nome.split(' '));

let promise = "i will";
console.log(promise.split(' '));

console.log('lets have a look at .trim() concept', "this removes leading and trailing spaces but not spaces in the middle", `it is essential for cleaning user input`);

//why it matters: some times spaces are automatically added when copying and pasting

let input = " eccpscholar@2025 ";
console.log(input.trim());

let output = '@spencyforver';
console.log(output.trim());

console.log('A glimpse at the .includes ()', 'this checks if a substring exists with the main string. it returns a boolean; true or false');

let country = 'uganda';
console.log(country.includes('ug'));

let mother = 'beautiful';
console.log(mother.includes('ful'));

console.log(`lets dive into the .replace(), lets go: this simply replaces what you don't want with what you want`);

let txt = "i support liverpool";
console.log(txt.replace('liverpool', 'chelsea'));

let team = 'i like football';
console.log(team.replace('like', 'love'));

console.log(`NGH Data Formatting`, 'lets combine concepts to clean up messy input for a procurement record');


// variable declaration, string methods (.trim, .toLowerCase, template literals....)

console.log('raw input', 'we receive messy data from an HTML form');

let dealerNameInput = 'james Bond';
// lets then clean it up

let cleanName = dealerNameInput.trim().toUpperCase();
console.log(cleanName);

console.log(`New record created by: ${cleanName}`);


let newManager = 'Liam Rosenior'
let newInput = newManager.toUpperCase();
console.log(`chelsea newManager is ${newInput}`);

let givenName = 'her name is Pavin';
let countrie = 'she is from jamaica';
//let sentence = ` ${givenName} ${countrie}`;
let sentence = (givenName + " " + countrie);
console.log(sentence);

console.log(typeof sentence); //string

let itemType = 'maize';
console.log(itemType.toUpperCase()); //MAIZE

let quantityString = '1200';
let nombre = parseInt(quantityString);
console.log(nombre);
console.log(typeof nombre);

//CONTROL FLOW
let light = 'green'
if (light= 'green'){
  console.log('GO!');
}

let color ='blue'
if(color === 'green'){
  console.log('we are good to go')
}
else if(color==='purple')
{
  console.log('DONT STOP')
}
else{
  console.log('it is not blue, start over');
}

let school = 'blesco'
if(school === 'blesco'){
  console.log('dont write');
}
else if (school ==="KRSS"){
  console.log('please wait');
}
else{
  console.log('leave it blank');
}

let availableStock =500;
let requestedStock =600;
if (availableStock >= requestedStock){
  console.log('sales recorded. stock reduced');
}
else{
  console.log('product out of stock. manager notified');
}

let supplySource = 'localSupplier';
let quantity = 2000;
if (supplySource === 30000) {
  console.log('from local supply point')
}
if (quantity >= 3000)
{
  console.log('valid local supplier')
}
else{
  console.log('ERROR: quantity too high')
}

//SWITCH (here we use case: forexample)
let monthOfYear = 'paint'
switch(monthOfYear){
  case '0': console.log('this is january, the first month of the year')
  break;
  case '1': console.log('this is february, the second month of the year')
  break;
  case '2': console.log('this is march, the third month')
  break;
  default: console.log('every month is a month of the year')
  break;
  case 'nails': console.log('procuring items: nails.')
  break;
  case 'cement': console.log('procuring items: cement.')
  break;
  case 'paint': console.log('procuring item: paint.')
  break;
}



