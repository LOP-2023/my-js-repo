function sayHello(good){
console.log(`hello my people ${good}`)
}
sayHello("hope you are good")
sayHello("I missed so much my fiends")

function findTotalDistance(speed, time){
let totalDistance = speed * time
console.log(`lets get the total distance ${totalDistance} km`)
}
findTotalDistance(100, 2)

function calcSpeed(distance, time){
let s
totalSpeed = distance/time
console.log(`this is the total speed ${totalSpeed} km/hr`)
}
calcSpeed(250, 2.5)

function greetUser(name = 'Visitor'){
console.log(`welcome ${name}`)
}
greetUser()

function evaluateTotalCost(quantity, unitPrice){
 summation = quantity * unitPrice
    return summation;
}
let totalCostUgx = evaluateTotalCost(1000, 50000)
console.log(totalCostUgx)


//function expression
const acceptItem= function(item){
    return item.length >= 4;
}
let isAccepted = acceptItem('nails')
console.log (isAccepted);

const isGood = function(worthy){
    return worthy.length >= 15;
}
let Good = isGood('respect')
console.log(Good);

//Arrow functions
console.log('Arrow functions')

const isCorrectName = (NAME => NAME.length >= 5)
console.log(isCorrectName ('Spellahranza'));
console.log(isCorrectName('mag'));

const isRightProduct =(product => product.length ===5)
console.log(isRightProduct('cement'))
console.log(isRightProduct('timber'))
