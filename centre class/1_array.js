// JavaScript Array and Array Functions

console.log("== JavaScript Array and Array Functions ==");

// Sample Array
let arr = [10, 20, 30, 40, 50];

// 1. Array Creation
console.log("Original array:", arr);
let newArray = Array.of(1, 2, 3); // Creates a new array
console.log("Array.of:", newArray);
let filledArray = Array(5).fill(0); // Creates an array of 5 elements, filled with 0
console.log("Array.fill:", filledArray);

// 2. Array Access
console.log("Accessing elements:", arr[0], arr[arr.length - 1]); // First and last elements
console.log("Array length:", arr.length); // Array length

// 3. Adding and Removing Elements
arr.push(60); // Adds an element to the end
console.log("Array.push:", arr);
arr.pop(); // Removes the last element
console.log("Array.pop:", arr);
arr.unshift(0); // Adds an element to the beginning
console.log("Array.unshift:", arr);
arr.shift(); // Removes the first element
console.log("Array.shift:", arr);

// 4. Combining and Slicing Arrays
let arr2 = [70, 80, 90];
let combinedArray = arr.concat(arr2); // Combines two arrays
console.log("Array.concat:", combinedArray);
console.log("Array.slice:", combinedArray.slice(2, 5)); // Extracts a section of the array

// 5. Splicing (Adding/Removing Elements)
combinedArray.splice(2, 2, 100, 110); // Replaces elements at index 2 with 100, 110
console.log("Array.splice:", combinedArray);

// 6. Finding Elements
console.log("Array.indexOf:", arr.indexOf(30)); // First occurrence of 30
console.log("Array.lastIndexOf:", combinedArray.lastIndexOf(90)); // Last occurrence of 90
console.log("Array.includes:", arr.includes(20)); // Checks if 20 is in the array
console.log("Array.find:", arr.find(el => el > 20)); // Finds first element greater than 20
console.log("Array.findIndex:", arr.findIndex(el => el > 20)); // Finds index of first element greater than 20

// 7. Filtering and Mapping
let evenNumbers = arr.filter(el => el % 2 === 0); // Filters even numbers
console.log("Array.filter:", evenNumbers);
let doubledArray = arr.map((el) =>{ return el * 2}); // Doubles each element
console.log("Array.map:", doubledArray);

// 8. Reducing and Summing
let sum = arr.reduce((acc, el) => acc + el, 0); // Sums up elements
console.log("Array.reduce (sum):", sum);
let product = arr.reduceRight((acc, el) => acc * el, 1); // Multiplies elements (right to left)
console.log("Array.reduceRight (product):", product);

// 9. Sorting and Reversing
let sortedArray = [...arr].sort((a, b) => a - b); // Sorts in ascending order
console.log("Array.sort (ascending):", sortedArray);
console.log("Array.reverse:", sortedArray.reverse()); // Reverses the array

// 10. Iterating Over Arrays
console.log("Array.forEach:");
arr.forEach((el, index) => console.log(`Index ${index}:`, el)); // Logs each element with index

// 11. Checking Conditions
console.log("Array.some (elements > 20):", arr.some(el => el > 20)); // Checks if any element > 20
console.log("Array.every (elements > 5):", arr.every(el => el > 5)); // Checks if all elements > 5

// 12. Converting Arrays
console.log("Array.join (comma-separated):", arr.join(", ")); // Joins elements as a string
console.log("Array.toString:", arr.toString()); // Converts array to string

// 13. Filling and Copying
let filled = arr.fill(5, 1, 3); // Fills with 5 from index 1 to 3
console.log("Array.fill:", filled);
let copiedArray = arr.copyWithin(1, 3, 4); // Copies element from index 3 to index 1
console.log("Array.copyWithin:", copiedArray);

// 14. Creating Keys, Values, and Entries
console.log("Array.keys:");
for (let key of arr.keys()) console.log(key); // Logs each index
console.log("Array.values:");
for (let value of arr.values()) console.log(value); // Logs each value
console.log("Array.entries:");
for (let [index, value] of arr.entries()) console.log(`Index ${index}:`, value); // Logs each index-value pair

console.log("== End of JavaScript Array and Array Functions ==");





