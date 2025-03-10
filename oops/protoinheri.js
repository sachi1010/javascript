// Parent constructor function
function Person(name) {
    this.name = name;
}

// Adding method to Person's prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Child object
const person1 = new Person("John");

person1.sayHello();  // Output: Hello, my name is John
console.log(person1.__proto__ === Person.prototype);  // true


try {
    let result = 10 / 0; // No error here
    console.log(result);

    let x = undefinedVar; // This will cause an error
} catch (error) {
    console.log("An error occurred:", error.message);
}
