function cleanDatabase(recordIds) {
// Requirement: Remove all odd numbers from the array
for (let i = 0; i < recordIds.length; i++) {
if (recordIds[i] % 2 !== 0) {
recordIds.splice(i, 1);
}
}
return recordIds;
}
// Test Case
const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);

//console.log("Final Array:", cleaned);
// EXPECTED: [4, 6, 10]
// ACTUAL: [3, 4, 6, 9, 10]


function cleanDatabase(recordIds) {
  // FIX OPTION 1: Loop backwards to safely splice
  for (let i = recordIds.length - 1; i >= 0; i--) {
    if (recordIds[i] % 2 !== 0) {
      recordIds.splice(i, 1);
    }
  }
  return recordIds;
}
// Test Case
const data1 = [1, 3, 4, 6, 7, 9, 10];
const cleaned1 = cleanDatabase(data);

console.log("Final Array:", cleaned1);

/**
 * FIX 3: Using an Empty Array and .push()
 */
function letsPush(recordIds) {
    const evensOnly = []; // 1. Start with an empty "bucket"
    
    for (let i = 0; i < recordIds.length; i++) {
        if (recordIds[i] % 2 === 0) {
            evensOnly.push(recordIds[i]);
        }
    }
    
    return evensOnly; 
}

// Test Case 
// Expected Output: [4, 6, 10]

const data2 = [1, 3, 4, 6, 7, 9, 10];
function cleanWithFilter(recordIds) {
    // We check each 'id': if id % 2 is 0 (even), it's kept in the new array.
    return recordIds.filter(id => id % 2 === 0);
}
// Call the function 'cleanWithFilter' and pass it 'data2'
console.log("Result (Filter Method):", cleanWithFilter(data2));

/**
 * TASK 2: EXPLANATION
 * 
 * 1. The Observation: At index i=0, '1' was removed, shifting '3' into index 0. 
 *    The loop then moved to i=1, completely skipping the '3'.
 * 
 * 2. The "Why": When you splice an item, the array length shrinks and remaining 
 *    items shift left. A forward-moving pointer becomes "blind" to whatever 
 *    slid into its current position.
 * 
 * 3. The Fixes: 
 *    - Way 1: A reverse loop (i--) ensures that shifts happen to items we 
 *      already checked.
 *    - Way 2: Creating a new list (immutability) avoids the problem by not 
 *      modifying the original array while reading it.
 */
