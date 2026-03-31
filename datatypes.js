//typeof of each variable

console.log(typeof "firstName"); //string
console.log(typeof 7); //number
console.log(typeof "lastName"); //string
console.log(typeof null); //null
console.log(typeof isbeautiful); //boolean

//declare values (firstName, lastName, maritalStatus, country, and age)
let firstName = "spellah";
let lastName = "sherinah";
let maritalStatus = "single";
let age = 25;
let isgood = true;
let favoritedish;
let Country = "England";

//this time in the same line
let firstname = "spellah",
  lastname = "sherinah",
  maritalstatus = "single",
  country = "Uganda",
  Age = 27;

//final task

let myage = 19;
let yourage = 33;

console.log("my age =19");
console.log("your age = 33");

//some little work of myself
console.log(
  "did you know that I did arts?",
  "but I am here doing software engineering!",
  "isnt it amazing, I used to admire being a scientist. its a dream come true.",
);
console.log(
  "oh yes I just love studying js, that kind of motivation to be a web developer.",
  "how do you see when you are playing a game on your phone invented by me?",
  `i guess you will be surprised, but the truth is, it is what I am doing`,
);
console.log(
  "welcome to my world. A place of solutions, relaxation, and fulfillment. It is simply; Sherryz world",
);

console.log("I love you all@ SHERRY LOVERS");

let yrs = "twenty";
let numbre = parseInt(yrs);
console.log(typeof numbre);

let forever = 68;
let ever = String(forever);
console.log(typeof ever);

let est = 23;
let asha = est.toString();
console.log(typeof asha);

let call = 543;
let nom = Number(call);
console.log(typeof nom);

let year = 2005;
let month = "august";
console.log(Boolean(2005));
console.log(Boolean("august"));

//lodical operators
//loose equality

let spe = 10;
let her = "100";
console.log(spe > her);
console.log(her == spe); //loose equality
console.log(spe === her); //strict equality
console.log(her <= spe);
console.log(her >= spe);

//loose inequality
let neg = 34;
let pos = "78";
console.log(neg != pos); //loose inequality
console.log(pos !== neg); //strict inequality

console.log("OR operator");
let isTodayBusy = false;
let isTomorrowFree = true;
console.log(isTodayBusy || isTomorrowFree);

let isAllGood = false;
let isQuiteOkay = false;
console.log(isQuiteOkay || isAllGood);

console.log('AND operator');
let myBirthDay = true;
let myBirthMonth = false;
console.log(myBirthDay && myBirthMonth);

let him = true;
let Her = true;
console.log(him && Her);

console.log('NOT operator');
let i = false;
let u = !i;
console.log(u);

let bigBrother = 'serStuart';
let isInvalid = !(bigBrother.length >=5);
console.log(isInvalid);

let mum = 'veryKind';
let isBetter = !(mum.length == 9);
console.log(isBetter);

