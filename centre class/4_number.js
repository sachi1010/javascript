// JavaScript Number Built-in Functions and Properties

console.log("== JavaScript Number Built-in Functions and Properties ==");

// 1. Number.isNaN(value) - Check if the value is NaN
let valueNaN = NaN;
console.log("Is NaN a number?:", Number.isNaN(valueNaN));  // true

// 2. Number.isFinite(value) - Check if the value is a finite number
let finiteValue = 42;
let infiniteValue = Infinity;
console.log("Is 42 finite?:", Number.isFinite(finiteValue));  // true
console.log("Is Infinity finite?:", Number.isFinite(infiniteValue));  // false

// 3. Number.isInteger(value) - Check if the value is an integer
let integerValue = 42;
let floatValue = 42.5;
console.log("Is 42 an integer?:", Number.isInteger(integerValue));  // true
console.log("Is 42.5 an integer?:", Number.isInteger(floatValue));  // false

// 4. Number.isSafeInteger(value) - Check if the value is a safe integer
let safeInteger = 9007199254740991; // Maximum safe integer
let unsafeInteger = 9007199254740992; // One more than the maximum safe integer
console.log("Is 9007199254740991 a safe integer?:", Number.isSafeInteger(safeInteger));  // true
console.log("Is 9007199254740992 a safe integer?:", Number.isSafeInteger(unsafeInteger));  // false

// 5. Number.parseFloat(string) - Parse a string and return a floating-point number
let stringValue = "42.56";
console.log("Parsed '42.56' to float:", Number.parseFloat(stringValue));  // 42.56

// 6. Number.parseInt(string) - Parse a string and return an integer
let integerString = "42px";
console.log("Parsed '42px' to integer:", Number.parseInt(integerString));  // 42

// 7. Number.toString(radix) - Converts a number to a string in the specified base (radix)
let number = 42;
console.log("42 as a string (base 10):", number.toString());  // "42"
console.log("42 as a string (base 2):", number.toString(2));  // "101010"
console.log("42 as a string (base 16):", number.toString(16));  // "2a"

// 8. Number.toFixed(digits) - Format a number to a specified number of decimal places
let decimalValue = 42.56789;
console.log("42.56789 rounded to 2 decimal places:", decimalValue.toFixed(2));  // "42.57"

// 9. Number.toExponential(digits) - Returns the number in exponential (scientific) notation
let scientificValue = 12345;
console.log("12345 in exponential notation:", scientificValue.toExponential(2));  // "1.23e+4"

// 10. Number.toPrecision(digits) - Formats a number to a specified length of significant digits
let preciseValue = 123.456;
console.log("123.456 with 4 significant digits:", preciseValue.toPrecision(4));  // "123.5"

// 11. Number.valueOf() - Returns the primitive value of a Number object
let numObject = new Number(42);
console.log("Primitive value of Number object:", numObject.valueOf());  // 42

// 12. Number.MAX_VALUE - The largest positive number that can be represented in JavaScript
console.log("Max value in JavaScript:", Number.MAX_VALUE);

// 13. Number.MIN_VALUE - The smallest positive number that can be represented in JavaScript
console.log("Min value in JavaScript:", Number.MIN_VALUE);

// 14. Number.NaN - A special value representing "Not-a-Number"
console.log("Number.NaN:", Number.NaN);  // NaN

// 15. Number.NEGATIVE_INFINITY - Represents negative infinity
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);  // -Infinity

// 16. Number.POSITIVE_INFINITY - Represents positive infinity
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);  // Infinity

// 17. Number.EPSILON - The smallest difference between two representable numbers
console.log("Number.EPSILON:", Number.EPSILON);  // Smallest difference between 1 and the next representable number

// 18. Number.isSafeInteger(value) - Determines whether a number is a safe integer
let safeIntegerCheck = 9007199254740991;  // Max safe integer
console.log("Is 9007199254740991 a safe integer?:", Number.isSafeInteger(safeIntegerCheck));  // true

// 19. Check for large number overflow using Number.MAX_VALUE and Number.MIN_VALUE
let overflowNumber = Number.MAX_VALUE * 2;
console.log("Number.MAX_VALUE * 2:", overflowNumber);  // Infinity (Overflow)

let underflowNumber = Number.MIN_VALUE / 2;
console.log("Number.MIN_VALUE / 2:", underflowNumber);  // 5e-324 (approaches 0)

// 20. Checking the range of numbers in JavaScript using Number properties
let withinRange = 1000000;
console.log("Is 1000000 within range:", withinRange < Number.MAX_VALUE && withinRange > -Number.MAX_VALUE);

// 21. Number.prototype.toLocaleString() - Converts number to string using locale-specific formatting
let localeNumber = 1234567.89;
console.log("Formatted number (locale):", localeNumber.toLocaleString('en-US'));  // "1,234,567.89"

console.log("== End of JavaScript Number Built-in Functions and Properties ==");


let num = new Object(123.456);
console.log(Number.isInteger(num));
console.log(Number.parseInt(num));
