// Sample text
let text = "JavaScript RegExp Example: abc ABC 12123453.\nNew Line starts here!";

// 1. Creating a Regular Expression
let regex = /abc/i; // 'i' flag makes it case-insensitive

// 2. test() - Returns true if match found, else false
console.log("test():", regex.test(text)); // true (matches 'abc' or 'ABC')

// 3. exec() - Returns the first match as an array
let execResult = regex.exec(text);
console.log("exec():", execResult); // Shows match details

// 4. match() - Returns an array of matches
let matchResult = text.match(/abc/gi); // 'g' for global, 'i' for case-insensitive
console.log("match():", matchResult); // ['abc', 'ABC']

// 5. search() - Returns index of first match or -1 if not found
console.log("search():", text.search(/Example/)); // Index of 'Example'

// 6. replace() - Replaces matched pattern with another string
let replacedText = text.replace(/abc/gi, "XYZ");
console.log("replace():", replacedText); // 'abc' and 'ABC' replaced with 'XYZ'

// 7. split() - Splits a string based on a regex pattern
let splitText = text.split(/\s+/); // Splits on spaces
console.log("split():", splitText);

// 8. Using character sets [abc] - Matches 'a', 'b', or 'c'
let regexCharSet = /[abc]/g;
console.log("Character Set [abc]:", text.match(regexCharSet));

// 9. Metacharacters: \d (digits), \w (word characters), \s (whitespace)
console.log("\\d (digit matches):", text.match(/\d/g)); // Finds digits
console.log("\\w (word matches):", text.match(/\w+/g)); // Finds words
console.log("\\s (whitespace matches):", text.match(/\s/g)); // Finds spaces

// 10. Anchors: ^ (start of string) and $ (end of string)
console.log("^ Anchor match:", text.match(/^JavaScript/)); // Matches 'JavaScript' if at the start
console.log("$ Anchor match:", text.match(/here!$/)); // Matches 'here!' if at the end

// 11. Quantifiers: * (0 or more), + (1 or more), ? (0 or 1), {n} (exact count)
console.log("* Quantifier:", text.match(/a*/g)); // Matches 'a', empty matches also
console.log("+ Quantifier:", text.match(/a+/g)); // Matches 'a', 'aa', 'aaa', etc.
console.log("? Quantifier:", text.match(/e?/g)); // Matches 'e' or empty
console.log("{n} Quantifier:", text.match(/\d{3}/)); // Matches exactly 3 digits

// 12. m Modifier - Multiline matching
let multiLineText = "Line1\nLine2\nLine3";
console.log("Multiline match:", multiLineText.match(/^Line/m)); // Finds 'Line' at the start of any line

// 13. Using OR | operator - Matches either pattern
console.log("OR Operator:", text.match(/JavaScript|RegExp/g)); // Matches 'JavaScript' or 'RegExp'

// 14. Grouping () - Capturing groups
let groupRegex = /(\d{3})-(\d{2})-(\d{4})/;
let ssn = "123-45-6789";
console.log("Grouping:", ssn.match(groupRegex)); // Captures different parts of SSN

// 15. Lookaheads & Lookbehinds
console.log("Lookahead (?=):", text.match(/\d(?=.\.)/g)); // Matches digits before a period
console.log("Lookbehind (?<=):", text.match(/(?<=\s)\d/g)); // Matches digits after a space
