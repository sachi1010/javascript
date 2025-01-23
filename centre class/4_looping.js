// JavaScript Loops and Control Statements

console.log("== JavaScript Loops and Control Statements ==");

// 1. JS for Loop
// The `for` loop repeats a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log("for loop:", i);
}

// 2. JS do...while Loop
// The `do...while` loop executes the code block once, then repeats it as long as the condition is true.
let j = 0;
do {
    console.log("do...while loop:", j);
    j++;
} while (j < 5);

// 3. JS while Loop
// The `while` loop repeats a block of code as long as the condition is true.
let k = 0;
while (k < 5) {
    console.log("while loop:", k);
    k++;
}

// 4. JS for...in Loop
// The `for...in` loop iterates over the properties of an object.
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log("for...in loop:", key, "=", person[key]);
}

// 5. JS for...of Loop
// The `for...of` loop iterates over iterable objects (like arrays).
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("for...of loop:", color);
}

// 6. JS labeled Statement
// A label allows us to name a loop and use `break` or `continue` with it.
outerLoop:
for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        if (n === 1) break outerLoop; // Exits both loops
        console.log("labeled statement:", `m=${m}, n=${n}`);
    }
}

// 7. JS break Statement
// The `break` statement exits a loop early.
for (let p = 0; p < 5; p++) {
    if (p === 3) break; // Exit loop when p is 3
    console.log("break statement:", p);
}

// 8. JS continue Statement
// The `continue` statement skips the current iteration and proceeds to the next.
for (let q = 0; q < 5; q++) {
    if (q === 2) continue; // Skip when q is 2
    console.log("continue statement:", q);
}

console.log("== End of JavaScript Loops and Control Statements ==");
