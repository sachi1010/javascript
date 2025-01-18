// print hello world to the console
console.log("Hello world")


// JavaScript Data Types
let numb=10
numb=20
float1=27.3
string1="yhf12345"
console.log(numb,"\t\t\t",float1,"\n",string1)
// 1. Number: Represents both integer and floating-point numbers
const integerNumber = 42;
const floatNumber = 3.14;

// 2. BigInt: Represents whole numbers larger than 2^53 - 1
const bigIntNumber = 1234567890123456789012345678901234567890n;

// 3. String: Represents textual data
const singleQuoteString = 'Hello, World!';
const doubleQuoteString = "Hello, World!";
const templateString = `Hello, ${singleQuoteString}`;

// 4. Boolean: Represents logical entities (true or false)
const isJavaScriptFun = true;
const isRaining = false;

// 5. Undefined: A variable declared but not assigned a value
let uninitializedVariable;

// 6. Null: Represents an explicitly empty or unknown value
const emptyValue = null;

// 7. Symbol: Unique and immutable values, often used as object keys
const uniqueSymbol = Symbol("unique");

// 8. Object: Collection of key-value pairs or complex entities
const person1 = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, ${this.name}`;
    }
};

// 9. Array: Ordered collection of values, which can hold any data type
const arrayOfNumbers = [1, 2, 3, 4, 5];
const mixedArray = [42, "Hello", true, { key: "value" }];




// Testing Outputs
console.log(", integerNumber, floatNumber");
console.log("BigInt:", bigIntNumber);
console.log("String:", singleQuoteString, doubleQuoteString, templateString);
console.log("Boolean:", isJavaScriptFun, isRaining);
console.log("Undefined:", uninitializedVariable);
console.log("Null:", emptyValue);
console.log("Symbol:", uniqueSymbol);
console.log("Object:", person1);
console.log("Array:", arrayOfNumbers, mixedArray);




































// JavaScript Variable Declarations

// 1. Using `const`
// `const` declares a constant variable, which cannot be reassigned.
// Block-scoped, meaning it only exists within the block it was declared in.
const constantVariable = "I am constant";
// constantVariable = "New value"; // Error: Assignment to constant variable

// 2. Using `let`
// `let` allows reassigning the variable but is also block-scoped.
let blockScopedVariable = "I am block-scoped with let";
blockScopedVariable = "I can be reassigned";

// Block scope example with `let`
if (true) {
    let insideBlock = "I only exist inside this block";
    console.log("Inside block:", insideBlock);
}
// console.log(insideBlock); // Error: insideBlock is not defined outside the block

// 3. Using `var`
// `var` declares a variable that is function-scoped (or globally scoped if declared outside a function).
var functionScopedVariable = "I am function-scoped with var";
functionScopedVariable = "I can also be reassigned";

// Function scope example with `var`
function testVarScope() {
    var insideFunction = "I only exist inside this function";
    console.log("Inside function:", insideFunction);
}
testVarScope();
// console.log(insideFunction); // Error: insideFunction is not defined outside the function

// 4. Hoisting behavior
// `var` variables are hoisted to the top of their scope, while `let` and `const` are not.
console.log("Hoisted varVariable:", varVariable); // undefined due to hoisting
var varVariable = "I am hoisted";

// console.log("Hoisted letVariable:", letVariable); // Error: Cannot access before initialization
let letVariable = "I am not hoisted with let";

// console.log("Hoisted constVariable:", constVariable); // Error: Cannot access before initialization
const constVariable = "I am not hoisted with const";

// 5. Mutable and Immutable Variables
const person = { name: "Alice", age: 30 }; // Constant reference, but properties can be modified
person.age = 31; // Allowed: changing a property of an object declared with const
// person = { name: "Bob", age: 25 }; // Error: Assignment to constant variable

let counter = 0; // Mutable variable
counter += 1; // Incrementing is allowed with let

// Testing Outputs
console.log("Constant (const):", constantVariable);
console.log("Block Scoped (let):", blockScopedVariable);
console.log("Function Scoped (var):", functionScopedVariable);
console.log("Person Object (const with mutable properties):", person);
console.log("Counter (let):", counter);
