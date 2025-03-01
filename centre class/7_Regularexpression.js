// 1. Basic Regular Expression Syntax
let regex1 = /hello/; // Matches "hello" anywhere in the string
console.log("Test 'hello world':", regex1.test("hello world")); // true

// 2. [abc] Expression - Matches any one of the characters a, b, or c
let regex2 = /[abc]/;
console.log("Test 'apple':", regex2.test("apple")); // true (contains 'a')
console.log("Test 'xyz':", regex2.test("xyz")); // false (doesn't contain 'a', 'b', or 'c')

// 3. RegExp S Metacharacter - Matches whitespace characters (\s)
let regex3 = /\s/;
console.log("Test 'Hello World':", regex3.test("Hello World")); // true (contains space)
console.log("Test 'HelloWorld':", regex3.test("HelloWorld")); // false (no space)

// 4. RegExp 'm' Modifier - Multi-line match
let regex4 = /^start/m; // '^' normally matches beginning, but 'm' allows it to work on multiple lines
let multilineText = `random text
start of new line
more text`;

console.log("Multiline Test:", regex4.test(multilineText)); // true

// 5. RegExp ?! (Negative Lookahead) - Ensures a string does NOT contain something
let regex5 = /foo(?!bar)/; // Matches "foo" NOT followed by "bar"
console.log("Test 'foobar':", regex5.test("foobar")); // false (because "foo" is followed by "bar")
console.log("Test 'foobaz':", regex5.test("foobaz")); // true ("foo" is not followed by "bar")

// 6. RegExp {X,Y} Quantifier - Matches between X and Y occurrences
let regex6 = /a{2,4}/; // Matches between 2 and 4 occurrences of 'a'
console.log("Test 'aaa':", regex6.test("aaa")); // true (3 times)
console.log("Test 'a':", regex6.test("a")); // false (only 1 time)

// 7. RegExp test() Method - Tests if a string matches a pattern
let regex7 = /\d+/; // Checks for numbers (one or more digits)
console.log("Test 'Number 123':", regex7.test("Number 123")); // true
console.log("Test 'No numbers':", regex7.test("No numbers")); // false

// 8. RegExp [^0-9] Expression - Matches any character that is NOT a digit
let regex8 = /[^0-9]/;
console.log("Test '12345':", regex8.test("12345")); // false (all are digits)
console.log("Test 'abc123':", regex8.test("abc123")); // true (contains non-digit characters)

// 9. Full Example - Extracting and Replacing Data using RegExp
let text = "My phone number is 987654321065.";
let phoneRegex = /\d{10}/; // Match exactly 10 digits
console.log("Extract Phone Number:", text.match(phoneRegex)); // Output: 9876543210

let sanitizedText = text.replace(/\d{10}/, "**********"); // Replace numbers with stars
console.log("Sanitized Text:", sanitizedText); // Output: My phone number is **********.
