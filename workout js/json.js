let string=`{
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
let object=JSON.parse(string);
console.log(object);
console.log(object.name);

let newstring=JSON.stringify(string);
console.log(newstring)

let pretty=JSON.stringify(string,null,4)
console.log(pretty);


let person = { name: "Bob" };
person.self = person; // Circular reference
try {
    JSON.stringify(person);
} catch (error) {
    console.error( error.message);
}
let filteredJson = JSON.stringify(string, ["name", "age"]);
console.log( filteredJson);

let jsonArrayString = `[
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Charlie"}
]`;
let jsonArray=JSON.parse(jsonArrayString);
console.log(jsonArray);

let modifiedJson = JSON.parse(string, (key, value) => {
    if (key === "age") return value  + 10; // Modify age while parsing
    return value;
});
console.log( modifiedJson);

let newJsonString = JSON.stringify(object);
console.log("Stringified JSON:", newJsonString);

let prettyJson = JSON.stringify(object, null, 4);
console.log("Pretty Printed JSON:\n", prettyJson);

let person = { name: "Bob" };
person.self = person; // Circular reference
try {
    JSON.stringify(person);
} catch (error) {
    console.error("Error Stringifying Circular JSON:", error.message);
}

