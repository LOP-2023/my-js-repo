// RegEx is used for searching, matching, and manipulating text based on complex, mathematical rules.

//constructor ('pattern')
// literal /pattern/

//searching using RegEx: const pattern = /kampala/i or const pattern = ('kampala', 'i')

//FLAGS  g, i, m


//g: global flag e.g const globalPattern = (Apples)g;

//i: insensitive flag:  e.g const casePattern = /apples/i or /APPLES/i

//m: multiline flag: const multiline = /apples/m

//PATTERN SYNTAX AND ASSERTIONS

//the caret ^: placed at the beginning(indicates the starting point)
//the dallar sign $: placed at the end (indicates the exact end of a string)

//EXACT MATCHING e.g
//const exactPattern = ^admin$ allows only admin

//QUALIFIERS   : specifying occurances
// * => zero or more times
// + => one or more times
// ? zero or one time
// {n} exactly n times
// {n,}  at least n times
// {n,m} between n and m times

// length of an item should be exactly 5 letters
// const length = /^length{5}$/

//CHARACTER CLASS ESCAPES
//1. the digit \d (for only numbers)
//2. the word \w(for alphabets and alphanumeric)
//3. the whitespace\s (single spaced etc)

//customizing sets
//[...] allows to specify what you want e.g [a-zA-Z] for only letters i.e const typePattern = / ^[a-zA-Z]+$/
 // negate class[^...] it disables the ones specified in the brackets e.g [^0-9] can't accept numbers

 //assignments  validation of cost price
 
 //NO.1
const costValidation = /^\d{5,}$/
let cost = "14000"
console.log(costValidation.test(cost))
//validate only when cost is more than 5 digits

//NO.2
const produceType = /^[a-zA-Z]+$/
let item = 'Nails'
console.log(produceType.test(item))
//only validates is only letters

//NO3. 
const phoneNumber = /^07\d{8}$/
let number = "0783456710"
let num = "0678965392"
console.log(phoneNumber.test(number))// true
console.log(phoneNumber.test(num)) // false
