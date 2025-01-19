// JavaScript Expressions and Operators

console.log("== JavaScript Expressions and Operators ==");

// 1. Assignment Operators
let x = 10;
console.log("Assignment (=):", x);
x += 5; // x = x + 5
console.log("Addition assignment (+=):", x);
x -= 3; // x = x - 3
console.log("Subtraction assignment (-=):", x);
x *= 2; // x = x * 2
console.log("Multiplication assignment (*=):", x);
x /= 4; // x = x / 4
console.log("Division assignment (/=):", x);
x %= 3; // x = x % 3
console.log("Remainder assignment (%=):", x);
x **= 2; // x = x ** 2
console.log("Exponentiation assignment (**=):", x);

// 2. Comparison Operators
console.log("Equal (==):", 5 == "5");
console.log("Strict equal (===):", 5 === "5");
console.log("Not equal (!=):", 5 != "5");
console.log("Strict not equal (!==):", 5 !== "5");
console.log("Greater than (>):", 10 > 5);
console.log("Less than (<):", 10 < 5);
console.log("Greater than or equal (>=):", 10 >= 5);
console.log("Less than or equal (<=):", 10 <= 5);

// 3. Arithmetic Operators
let a = 10, b = 3;
console.log("Addition (+):", a + b);
console.log("Subtraction (-):", a - b);
console.log("Multiplication (*):", a * b);
console.log("Division (/):", a / b);
console.log("Remainder (%):", a % b);
console.log("Exponentiation (**):", a ** b);

// 4. Bitwise Operators
console.log("Bitwise AND (&):", 5 & 1);
console.log("Bitwise OR (|):", 5 | 1);
console.log("Bitwise XOR (^):", 5 ^ 1);
console.log("Bitwise NOT (~):", ~5);
console.log("Left Shift (<<):", 5 << 1);
console.log("Right Shift (>>):", 5 >> 1);
console.log("Zero-fill Right Shift (>>>):", 5 >>> 1);

// 5. Logical Operators
let isTrue = true, isFalse = false;
console.log("Logical AND (&&):", isTrue && isFalse);
console.log("Logical OR (||):", isTrue || isFalse);
console.log("Logical NOT (!):", !isTrue);

// 6. BigInt Operators
let bigA = 100n, bigB = 50n;
console.log("BigInt Addition (+):", bigA + bigB);
console.log("BigInt Subtraction (-):", bigA - bigB);
console.log("BigInt Multiplication (*):", bigA * bigB);
console.log("BigInt Division (/):", bigA / bigB);
console.log("BigInt Remainder (%):", bigA % bigB);

// 7. String Operators
let str1 = "Hello", str2 = "World";
console.log("String Concatenation (+):", str1 + " " + str2);

// 8. Ternary Operator
let age = 18;
console.log("Ternary Operator:", age >= 18 ? "Adult" : "Minor");

// 9. Relational Operators
let arr = [1, 2, 3];
console.log("in operator:", "length" in arr); // checks if 'length' property exists in arr
console.log("instanceof operator:", arr instanceof Array); // checks if arr is an instance of Array

console.log("== End of JavaScript Operators ==");
