sets
const mySet = new Set();
console.log(mySet)

let availableItems = new Set(["cement", "nails", "timber", "paint", "sand paper", "glass paint"])
availableItems.add("cement")
availableItems.add("timber")
availableItems.add("nails")

console.log(availableItems)


console.log(availableItems.has("cement"))

 availableItems.delete("nails")
 console.log(availableItems)

 console.log(availableItems.size)

 availableItems.clear()
 
 console.log(availableItems)

 