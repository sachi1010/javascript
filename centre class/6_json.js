// 1. JSON Data Example (Object & Array)
let jsonString = `{
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "skills": ["JavaScript", "Python", "React"],
    "isEmployed": true,
    "address": {
        "street": "123 Main St",
        "zipcode": "10001"
    }
}`;

// 2. Parsing JSON (String to Object)
let jsonObject = JSON.parse(jsonString);
console.log("Parsed JSON Object:", jsonObject);
console.log("Name:", jsonObject.name);
console.log("Skills:", jsonObject.skills.join(", "));

// 3. Stringifying JSON (Object to String)
let newJsonString = JSON.stringify(jsonObject);
console.log("Stringified JSON:", newJsonString);

// 4. Pretty Print JSON
let prettyJson = JSON.stringify(jsonObject, null, 4);
console.log("Pretty Printed JSON:\n", prettyJson);

// 5. Handling Circular References (Deep Clone)
let person = { name: "Bob" };
person.self = person; // Circular reference
try {
    JSON.stringify(person);
} catch (error) {
    console.error("Error Stringifying Circular JSON:", error.message);
}

// 6. Filtering Properties while Stringifying
let filteredJson = JSON.stringify(jsonObject, ["name", "age"]);
console.log("Filtered JSON:", filteredJson);


// 7. Modifying Values in JSON.parse()
let modifiedJson = JSON.parse(jsonString, (key, value) => {
    if (key === "age") return value + 5; // Modify age while parsing
    return value;
});
console.log("Modified JSON:", modifiedJson);

// 8. Converting JSON Array to Object
let jsonArrayString = `[
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Charlie"}
]`;
let jsonArray = JSON.parse(jsonArrayString);
console.log("JSON Array Parsed:", jsonArray);

// 9. Fetch JSON from API (Using Fetch)
async function fetchJson() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("Fetched JSON Data:", data);
    } catch (error) {
        console.error("Error Fetching JSON:", error);
    }
}
fetchJson();

// 10. Convert JavaScript Object to JSON File (Download)
function downloadJsonFile(jsonData, filename = "data.json") {
    let blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
downloadJsonFile(jsonObject);

// 11. Deep Copy JSON Object (Alternative to structuredClone)
let deepCopy = JSON.parse(JSON.stringify(jsonObject));
deepCopy.name = "Updated Name";
console.log("Original JSON:", jsonObject);
console.log("Deep Copied JSON:", deepCopy);

// 12. Validate JSON Syntax
function isValidJson(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}
console.log("Is JSON valid?", isValidJson(jsonString)); // true
console.log("Is JSON valid?", isValidJson("{invalid json}")); // false
