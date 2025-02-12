// 1. WeakMap - Only accepts objects as keys (no primitive values)
let weakMap = new WeakMap();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, "User Data 1");
weakMap.set(obj2, "User Data 2");

// Getting values
console.log("WeakMap Value for obj1:", weakMap.get(obj1));

// Checking if a key exists
console.log("Has obj2?", weakMap.has(obj2));

// Deleting a key
weakMap.delete(obj1);
console.log("After deletion, has obj1?", weakMap.has(obj1));

// 2. Automatic Garbage Collection - Objects removed from memory automatically
obj2 = null; // obj2 is now eligible for garbage collection
setTimeout(() => {
    console.log("Is obj2 still in WeakMap?", weakMap.has(obj2)); // Likely false
}, 1000);

// 3. WeakSet - Only stores objects (No primitive values)
let weakSet = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

weakSet.add(user1);
weakSet.add(user2);

// Checking if an object is in WeakSet
console.log("Has user1?", weakSet.has(user1));

// Deleting an object
weakSet.delete(user2);
console.log("After deletion, has user2?", weakSet.has(user2));

// 4. Automatic Garbage Collection in WeakSet
user1 = null; // Removed from memory automatically
setTimeout(() => {
    console.log("Is user1 still in WeakSet?", weakSet.has(user1)); // Likely false
}, 1000);

// 5. Use Case: Caching Data with WeakMap
let cache = new WeakMap();

function fetchData(user) {
    if (cache.has(user)) {
        console.log("Returning cached data for", user.name);
        return cache.get(user);
    } else {
        let data = { info: `Data for ${user.name}` };
        cache.set(user, data);
        console.log("Fetching new data for", user.name);
        return data;
    }
}

let userA = { name: "John" };
fetchData(userA);
fetchData(userA); // Cached data is used

userA = null; // User is removed, cache entry is garbage collected

// 6. Use Case: Tracking Active Users
let activeUsers = new WeakSet();

function login(user) {
    activeUsers.add(user);
    console.log(`${user.name} logged in.`);
}
function logout(user) {
    activeUsers.delete(user);
    console.log(`${user.name} logged out.`);
}

let userB = { name: "Emma" };
login(userB);
console.log("Is Emma active?", activeUsers.has(userB));
logout(userB);
console.log("Is Emma active?", activeUsers.has(userB));

