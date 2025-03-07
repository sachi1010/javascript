// class person{
//     constructor(name,age){
       
//         this.name=name;
//         this.age=age; 
//     }
//     display(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
    
// }

/* let p1=new person(25,"sachi");
p1.display();

class Employee extends person{
    constructor(name,age,department){
        super(age,name);
        this.department=department;
        }
        display(){
            console.log(`Name:${this.name} Age:${this.age} Department:${this.department}`);
            }
        }
let p2=new person("bob",34);
    let e1=new Employee(30,"Rahul","IT");
      p2.display();
      e1.display() */


      class Person {
        // Private property using # (public fields are accessible outside)
        #name;
        #age;
      
        constructor(name, age) {
          this.#name = name;
          this.#age = age;
        }
      
        // Public method to get name
        getName() {
          return this.#name;
        }
      
        // Public method to set name
        setName(name) {
          this.#name = name;
        }
      
        // Public method to get age
        getAge() {
          return this.#age;
        }
      
        // Public method to increment age
        haveBirthday() {
          this.#age++;
        }
      }
      
      const person = new Person('Alice', 30);
      
      // Accessing public methods
      console.log(person.getName());  // Alice
      console.log(person.getAge());   // 30
      
      // Changing name and age through methods
      person.setName('Bob');
      person.haveBirthday();
      console.log(person.getName());  // Bob
      console.log(person.getAge());   // 31
      
      // Direct access to private properties is not allowed (will throw an error)
      //console.log(person.#name);  // SyntaxError
      
/* class person1{

    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
}

const raj=person1("raj",23)
raj.age=56
raj.name */

class employee {
    #name;
    #age;
    #employeeid;

    constructor(Name,Age,Employeeid){
       this.#name=Name;
        this.#age=Age;
       this.#employeeid=Employeeid;
    }

    getName(){
        return this.#name;
    }
    setName(Name){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    setAge(Age){
        return this.#age++;
    }
    getId()
    {
        return this.#employeeid;
    }
    setId(Employeeid){
        return this.#employeeid;
    }
}

const Employee1=new employee('arun',45,12554)

console.log(Employee1.getName());
console.log(Employee1.getAge());
console.log(Employee1.getId());



class BankAccount {
    // Private property
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && this.#balance >= amount) {
        this.#balance -= amount;
      } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
      }
    }
  
    // Public method to check balance
    getBalance() {
      return this.#balance;
    }
  }
  
  // Example usage
  const myAccount = new BankAccount(1000);
  
  // Deposit money
  myAccount.deposit(500);
  
  // Withdraw money
   myAccount.withdraw(1000);
  
  // Get balance
  console.log("Current Balance: $" + myAccount.getBalance());
  
  // Trying to access private property directly (will throw an error)
  // console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
  