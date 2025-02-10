// 1. Getters and Setters in Objects
let person = {
    firstName: "Alice",
    lastName: "Johnson",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        let parts = name.split(" ");
        if (parts.length === 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            console.log("Invalid name format. Use 'First Last'.");
        }
    }
};

console.log("Full Name (getter):", person.fullName);
person.fullName = "Bob Smith"; // Using setter
console.log("Updated Name:", person.fullName);

// 2. Getters and Setters in Classes
class User {
    constructor(username, email) {
        this._username = username;
        this._email = email;
    }

    get username() {
        return this._username.toUpperCase(); // Example: Convert to uppercase
    }

    set username(name) {
        if (name.length >= 3) {
            this._username = name;
        } else {
            console.log("Username must be at least 3 characters long.");
        }
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        if (newEmail.includes("@")) {
            this._email = newEmail;
        } else {
            console.log("Invalid email format.");
        }
    }
}

let user1 = new User("johnDoe", "john@example.com");
console.log("Username (getter):", user1.username);
user1.username = "Jo"; // Will trigger validation
user1.username = "Johnny";
console.log("Updated Username:", user1.username);
user1.email = "invalidEmail"; // Invalid email
console.log("User Email:", user1.email);


// 3. Computed Getters
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 9/5 + 32; // Convert to Fahrenheit
    }

    set fahrenheit(f) {
        this.celsius = (f - 32) * 5/9; // Convert back to Celsius
    }
}

let temp = new Temperature(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit (getter):", temp.fahrenheit);
temp.fahrenheit = 98.6; // Using setter
console.log("Updated Celsius:", temp.celsius);

// 4. Using Getters and Setters in Proxy Objects
let product = {
    price: 100
};

let proxyProduct = new Proxy(product, {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === "price" && value < 0) {
            console.log("Price cannot be negative.");
        } else {
            target[prop] = value;
            console.log(`Setting ${prop} to ${value}`);
        }
        return true;
    }

});

console.log("Product Price:", proxyProduct.price);
proxyProduct.price = 120; // Valid update
proxyProduct.price = -50; // Invalid update

// 5. Using Private Fields with Getters and Setters (ES6+)
class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get balance() {
        return `Your balance is $${this.#balance}`;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
        } else {
            this.#balance = amount;
        }
    }
}

let account = new BankAccount(500); 
console.log(account.balance);
account.balance = 1000; // Updating balance using setter
console.log(account.balance);
account.balance = -200; // Invalid update

