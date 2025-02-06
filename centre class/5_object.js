// 1. Creating Objects in Different Ways

// Object Literal
let obj1 = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

// Object Constructor
let obj2 = new Object();
obj2.name = "Bob";
obj2.age = 30;
obj2.greet = function() {
    return `Hello, I am ${this.name}`;
};
let mergedObj = Object.assign({}, obj1, obj2); // Merge objects
console.log(mergedObj);
// Using Object.create()
let proto = { type: "Person" };
let obj3 = Object.create(proto);
obj3.name = "Charlie";

// Using Class (ES6)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, I am ${this.name}`;
    }
}
let obj4 = new Person("David", 40);

// Using Function Constructor
function Employee(name, position) {
    this.name = name;
    this.position = position;
}
Employee.prototype.getInfo = function() {
    return `${this.name} works as a ${this.position}`;
};
let obj5 = new Employee("Eve", "Manager");

// 2. Object Properties and Methods
let obj6 = {
    name: "Frank",
    age: 35,
    details: {
        city: "New York",
        country: "USA"
    },
    sayHello() {
        return `Hi, I'm ${this.name}`;
    }
};

// 3. Object Built-in Methods
console.log(Object.keys(obj6));       // Get all keys
console.log(Object.values(obj6));     // Get all values
console.log(Object.entries(obj6));    // Get key-value pairs

let objCopy = Object.assign({}, obj6); // Copy object
console.log(objCopy);



console.log(Object.getOwnPropertyNames(obj6)); // Get property names
console.log(Object.hasOwn(obj6, "name")); // Check property existence

// 4. Object.freeze() and Object.seal()
let obj7 = { name: "George" };
Object.freeze(obj7); // Prevents modification
// obj7.name = "Not allowed"; // This won't work

let obj8 = { name: "Hannah" };
Object.seal(obj8); // Allows modifying properties but not adding or removing
obj8.name = "Updated";
console.log(obj8);


// 7. Object Destructuring
let { name, age } = obj1;
console.log(name, age);

// 8. Object Spread Operator
let obj10 = { ...obj1, city: "Los Angeles" };
console.log(obj10);

// 9. Object Prototypes
let obj11 = {
    greet() {
        return "Hello from Prototype!";
    }
};
let obj12 = Object.create(obj11);
console.log(obj12.greet());

// 10. Object.entries() and Object.fromEntries()
let entries = Object.entries(obj11);
console.log(entries);

let objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);
