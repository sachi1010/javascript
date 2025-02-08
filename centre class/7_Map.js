// 1. Creating a Map
let myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set("city", "New York");

// Using objects as keys
let objKey = { id: 1 };
myMap.set(objKey, "Object Value");

// Using functions as keys
let funcKey = function() {};
myMap.set(funcKey, "Function Value");

// Using a number as a key
myMap.set(100, "Number Key");

// 2. Getting values
console.log("Name:", myMap.get("name")); 
console.log("Age:", myMap.get("age")); 
console.log("Object Key:", myMap.get(objKey)); 
console.log("Function Key:", myMap.get(funcKey)); 

// 3. Checking if a key exists
console.log("Has 'city' key?", myMap.has("city")); 
console.log("Has 200 key?", myMap.has(200)); 

// 4. Deleting a key
myMap.delete("age");
console.log("After deleting 'age':", myMap);

// 5. Map Size
console.log("Map Size:", myMap.size);

// 6. Iterating over a Map
console.log("\nIterating over a Map:");
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let [key, value] of myMap) {
    console.log(`${key} => ${value}`);
}

// 7. Getting Keys, Values, and Entries
console.log("\nKeys:", [...myMap.keys()]);
console.log("Values:", [...myMap.values()]);
console.log("Entries:", [...myMap.entries()]);

// 8. Converting Map to Object
function mapToObject(map) {
    let obj = {};
    map.forEach((value, key) => {
        if (typeof key !== "object") { // Only convert non-object keys
            obj[key] = value;
        }
    });
    return obj;
}
let objFromMap = mapToObject(myMap);
console.log("Converted Object:", objFromMap);

// 9. Converting Object to Map
let objectToConvert = { brand: "Toyota", model: "Corolla", year: 2023 };
let newMap = new Map(Object.entries(objectToConvert));
console.log("Converted Map:", newMap);

// 10. Clearing a Map
myMap.clear();
console.log("Map after clear():", myMap);
