// JavaScript String and String Functions

console.log("== JavaScript String and String Functions ==");

// Sample String
let str = "Hello, JavaScript World!";
console.log("Original string:", str);

// 1. String Creation
let newStr = String("Learning JavaScript Strings!");
console.log("String creation with String():", newStr);

// 2. Accessing Characters
console.log("Character at index 0:", str.charAt(0));
console.log("Character code at index 0:", str.charCodeAt(0));
console.log("Using bracket notation:", str[0]);

// 3. Case Conversion
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// 4. String Length
console.log("String length:", str.length);

// 5. Searching within Strings
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));
console.log("Last index of 'o':", str.lastIndexOf("o"));
console.log("Includes 'World':", str.includes("World"));
console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with 'World!':", str.endsWith("World!"));

// 6. Extracting Substrings
console.log("Substring (index 7 to 17):", str.substring(7, 17));
console.log("Slice (index 7 to 17):", str.slice(7, 17));
console.log("Slice from end (-6 to end):", str.slice(-6));

// 7. Splitting Strings
let splitStr = str.split(" ");
console.log("Split by space:", splitStr);

// 8. Trimming Strings
let spacedStr = "   Trim me!   ";
console.log("Original with spaces:", `[${spacedStr}]`);
console.log("Trimmed:", `[${spacedStr.trim()}]`);
console.log("Trim start:", `[${spacedStr.trimStart()}]`);
console.log("Trim end:", `[${spacedStr.trimEnd()}]`);

// 9. Replacing Text
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));
console.log("Replace all 'o' with '0':", str.replace(/o/g, "0"));

// 10. Repeat and Pad
console.log("Repeat 3 times:", str.repeat(3));
console.log("Pad start (length 30):", str.padStart(30, "*"));
console.log("Pad end (length 30):", str.padEnd(30, "*"));

// 11. Concatenating Strings
let greeting = "Hello";
let name = "Alice";
console.log("Concatenation with +:", greeting + ", " + name + "!");
console.log("Concatenation with concat():", greeting.concat(", ", name, "!"));

// 12. Template Literals
let age = 25;
console.log(`Template literal: ${name} is ${age} years old.`);

// 13. Character Check
console.log("Character at index 1:", str.charAt(1));
console.log("Character code at index 1:", str.charCodeAt(1));
console.log("From char code 65:", String.fromCharCode(65));

// 14. Escaping Characters
let escapedStr = "He said, \"JavaScript is awesome!\"";
console.log("Escaped string:", escapedStr);

// 15. Locale and Unicode Methods
console.log("Locale compare ('a' and 'b'):", 'a'.localeCompare('b'));
console.log("Normalize (NFD form):", "Café".normalize("NFD"));
console.log("Unicode escape:", "\u0041\u0042\u0043"); // ABC

// 16. Match and Search with Regular Expressions
console.log("Match 'Java':", str.match(/Java/));
console.log("Search 'World':", str.search("World"));


// 17. Iterating over Strings
console.log("Using for...of:");
for (let char of str) {
    console.log(char);
}

console.log("== End of JavaScript String and String Functions ==");



/*// JavaScript String Check Operations

console.log("== JavaScript String Check Operations ==");

let str = "Hello, JavaScript World!";
console.log("Sample string:", str);

// 1. Check if a string is empty
console.log("Is the string empty?:", str.length === 0);

// 2. Check if the string contains a substring
console.log("Contains 'JavaScript'?:", str.includes("JavaScript"));

// 3. Check if the string starts with a specific substring
console.log("Starts with 'Hello'?:", str.startsWith("Hello"));

// 4. Check if the string ends with a specific substring
console.log("Ends with 'World!'?:", str.endsWith("World!"));

// 5. Check if the string is uppercase
console.log("Is the string uppercase?:", str === str.toUpperCase());

// 6. Check if the string is lowercase
console.log("Is the string lowercase?:", str === str.toLowerCase());

// 7. Check if the string is numeric
console.log("Is the string numeric?:", !isNaN(str));

// 8. Check if the string contains only letters (alphabetic characters)
console.log("Is alphabetic?:", /^[a-zA-Z]+$/.test(str));

// 9. Check if the string contains only alphanumeric characters
console.log("Is alphanumeric?:", /^[a-zA-Z0-9]+$/.test(str));

// 10. Check if the string is a valid email
let email = "example@example.com";
console.log("Is valid email?:", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

// 11. Check if the string is a valid URL
let url = "https://example.com";
console.log("Is valid URL?:", /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url));

// 12. Check if the string is a palindrome
let palindromeStr = "Madam";
let cleaned = palindromeStr.replace(/[\W_]/g, "").toLowerCase();
console.log("Is palindrome?:", cleaned === cleaned.split("").reverse().join(""));

// 13. Check if the string has any whitespace
console.log("Has whitespace?:", /\s/.test(str));

// 14. Check if the string is valid JSON
let jsonString = '{"name":"John"}';
try {
    JSON.parse(jsonString);
    console.log("Is valid JSON?:", true);
} catch (e) {
    console.log("Is valid JSON?:", false);
}

// 15. Check if the string contains only digits
let digitStr = "12345";
console.log("Contains only digits?:", /^\d+$/.test(digitStr));

// 16. Count vowels and consonants
let vowels = str.match(/[aeiou]/gi) || [];
let consonants = str.match(/[^aeiou\s\d\W]/gi) || [];
console.log("Vowel count:", vowels.length);
console.log("Consonant count:", consonants.length);

// 17. Check if all characters in the string are unique
let charSet = new Set(str);
console.log("All characters are unique?:", charSet.size === str.length);

console.log("== End of JavaScript String Check Operations ==");
 */