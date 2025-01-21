// JavaScript Control Flow Statements

console.log("== JavaScript Control Flow Statements ==");

// 1. JS if Statement
// The `if` statement executes code only if a condition is true.
let age = 20;
if (age >= 18) {
    console.log("if statement: You are an adult.");
}

// 2. JS if...else Statement
// The `if...else` statement executes one block if the condition is true and another if it is false.
let isRaining = true;
if (isRaining) {
    console.log("if...else statement: Take an umbrella.");
} else {
    console.log("if...else statement: Enjoy the sunny day.");
}

// 3. JS if...else if Statement
// The `if...else if` statement checks multiple conditions in sequence.
let score = 85;
if (score >= 90) {
    console.log("if...else if statement: Grade A");
} else if (score >= 80) {
    console.log("if...else if statement: Grade B");
} else if (score >= 70) {
    console.log("if...else if statement: Grade C");
} else {
    console.log("if...else if statement: Fail");
}
    
// 4. JS Nested if Statement
// An `if` statement inside another `if` is called a nested `if`.
let age2 = 25;
let hasID = true;
if (age2 >= 18) {
    if (hasID) {
        console.log("Nested if statement: You can enter the club.");
    } else {
        console.log("Nested if statement: Please show your ID.");
    }
} else {
    console.log("Nested if statement: You are too young to enter.");
}

// 5. JS switch Statement
// The `switch` statement allows you to execute different code blocks based on different values of a variable.
let day = 3;
switch (day) {
    case 1:
        console.log("switch statement: Monday");
        break;
    case 2:
        console.log("switch statement: Tuesday");
        break;
    case 3:
        console.log("switch statement: Wednesday");
        break;
    case 4:
        console.log("switch statement: Thursday");
        break;
    case 5:
        console.log("switch statement: Friday");
        break;
    case 6:
        console.log("switch statement: Saturday");
        break;
    case 7:
        console.log("switch statement: Sunday");
        break;
    default:
        console.log("switch statement: Invalid day");
}

// 6. JS try...catch Statement
// The `try...catch` statement handles errors. Code in the `try` block runs, and if an error occurs, it jumps to the `catch` block.
try {
    let result = 10 / 2; // Division by zero example
    if (!isFinite(result)) throw "Cannot divide by zero!";
    console.log("try...catch statement: Result is", result);
} catch (error) {
    console.log("try...catch statement: Error -", error);
}

console.log("== End of JavaScript Control Flow Statements ==");
