//allows to unpack values from arrays, unpack properties of objects
const numbers = [1, 2, 3];
//traditional method
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])

//destructuring method
const [a, b, c] = numbers;
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3
//you can print them all at once
console.log(a, b, c);

//NGH
let sale = ["maria", "cement", 50, 35_000, 0.18, true];
//const [customer, item, quantity, price, tax, isCredit] = sale

//skipping an element: we skip by leving a blankspaceusing commas

const [customer, , quantity, , ,] = sale;
console.log(customer);
console.log(sale);

//default values, incase something is missing, you can equate it to 0 in order to avoid the undefined error
let procurement = ["nails", 50];
const [item, productQuantity, costPrice = 0] = procurement;
console.log(item);
console.log(productQuantity);
console.log(costPrice);
//console.log(procurement)

//destructuring objects
//here we use keys to destructure elements

const user = { Name: "john", age: "34", email: "john@gmail.com" };
const { Name: firstName, age, email: userEmail, gender= "F"} = user;
console.log(firstName, age, userEmail, gender);

//Aliasing helps to rename variable e.g Name: firstName; it prevents name collissions
let userInformation ={
    name: "paul",
    age: 25,
    email: "EMAIL_ADDRESS",
    loading: false
}
//let {loading: userLoading} = userInformation

let branchInformation ={
    branchName: "Nairobi",
    branchCode: "NB",
    loading: false

}


//let {loading: branchLoading}= branchInformation
console.log(branchInformation)
console.log(userInformation)