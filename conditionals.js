let colorOfLight = "red";
if (colorOfLight === "green") {
  console.log("The traffic light is currently green");
} // here the code doesn't show in the terminal. if it is the declaration is the same as the cobndition then it runs in the terminal. Or you can use the "not" in order for it to run.

if (colorOfLight === "yellow") {
  console.log("The traffic light is currently yellow, please move");
} else if (colorOfLight === "green") {
  console.log("Get ready to move");
} else {
  console.log("The traffic light is red, please stop");
}

let dayOfWeek = 0;
switch (dayOfWeek) {
  case 0:
    console.log("today is monday");
    break;
  case 1:
    console.log("today is tuesday");
    break;
  case 2:
    console.log("today is wednesday");
    break;
  default:
    console.log("today is not known");
    break;
}

let timeOfDay = "1200";

switch (timeOfDay) {
  case "1000":
    customWelcomeMessage = "welcome, you night owl";
    break;
  case "0800":
    customWelcomeMessage =
      "its not true that an early bird catches the early worm";
    break;
  case "1200":
    customWelcomeMessage = "good afternoon, hope you have lunch money";
    break;
  default:
    console.log("anytime is a good time");
}
console.log(customWelcomeMessage);

//customWelcomeMessage = "1200" ?  "Good morning, I hope you have a great day": "Have a wonderful evening"
//console.log(customWelcomeMessage)

let gender = "M";

let discount = gender === "M" ? 0.1 : 0.4;
if (gender === "M") {
  discount = 0.1;
} else {
  discount = 0.4;
}
let priceOfCurtains = 45000;
console.log(priceOfCurtains * discount);

//``, $, {}//
let hisName = "harry";
let herWife = "meghan";
let them = `wecome, ${hisName} and ${herWife}!`;
console.log(them);

let team = "chelsea";
let coach = "maresca";
let game = "saturday";
let rivals = "psg";
let all = `everything you need to know: the team is ${team} , then, ${coach} is the coach. They play mostly on ${game}, and their great rival is ${rivals}.`;
console.log(all);

console.log(Boolean(0)); //false
console.log(Boolean("tes"));

let many = "girl";
console.log(many.replace("girl", "sex"));

let PIN = " 667789 ";
console.log(PIN.trim());

let me = "pretty";
console.log(me.includes("her"));

let words = "i like doing everything right and perfect";
console.log(words.toUpperCase());

let namba = 3000;
let str = namba.toString()
console.log(str);
console.log(typeof str);

let she = 23;
let he = String(she);
console.log(typeof he);

let boy = 'strange';
let number = parseInt(boy);
console.log(typeof number);

