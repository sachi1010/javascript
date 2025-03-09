function person(name){
this.name=name;
}
person.prototype.sayhello=function(){
console.log(`hello this is ${this.name}`)
}

const p=new person("aravind");
p.sayhello();
console.log(p.__proto__===person.prototype);



// ///////////////////////////////////////////////////////////////
// // chatgpt  examplefor prototype inheritance



// // Parent (Base) class
// function Animal(name) {
//     this.name = name;
//   }
  
//   Animal.prototype.sayHello = function() {
//     console.log(`Hello, I am a ${this.name}!`);
//   };
  
//   // Child class that inherits from Animal
//   function Dog(name, breed) {
//     // Call the parent constructor to initialize name
//     Animal.call(this, name); // Inherit the properties from Animal
//     this.breed = breed;
//   }
  
//   // Set Dog's prototype to an instance of Animal
//   Dog.prototype = Object.create(Animal.prototype);
  
//   // Set the constructor property of Dog's prototype back to Dog
//   Dog.prototype.constructor = Dog;
  
//   // Add more methods to Dog
//   Dog.prototype.bark = function() {
//     console.log(`${this.name} says woof!`);
//   };
  
//   // Create an instance of Dog
//   const myDog = new Dog('Buddy', 'Golden Retriever');
  
//   // Access methods from both Animal and Dog
//   myDog.sayHello(); // Inherited from Animal: Output: Hello, I am a Buddy!
//   myDog.bark();     // Defined in Dog: Output: Buddy says woof!
  


//   // Parent (Base) class: Vehicle
// function Vehicle(make, model) {
//     this.make = make;
//     this.model = model;
//   }
  
//   // Adding methods to the prototype of Vehicle
//   Vehicle.prototype.startEngine = function() {
//     console.log(`Starting the engine of ${this.make} ${this.model}...`);
//   };
  
//   Vehicle.prototype.stopEngine = function() {
//     console.log(`Stopping the engine of ${this.make} ${this.model}...`);
//   };
  
//   // Child class: Car that inherits from Vehicle
//   function Car(make, model, doors) {
//     // Inheriting properties from Vehicle
//     Vehicle.call(this, make, model); // Call Vehicle constructor to set 'make' and 'model'
//     this.doors = doors;
//   }
  
//   // Set Car's prototype to an instance of Vehicle
//   Car.prototype = Object.create(Vehicle.prototype);
  
//   // Set the constructor back to Car (to avoid pointing to Vehicle)
//   Car.prototype.constructor = Car;
  
//   // Add methods specific to Car
//   Car.prototype.openDoors = function() {
//     console.log(`Opening the ${this.doors} doors of the ${this.make} ${this.model}...`);
//   };
  
//   // Create an instance of Car
//   const myCar = new Car('Toyota', 'Corolla', 4);
  
//   // Access methods from both Vehicle and Car
//   myCar.startEngine(); // Inherited from Vehicle: Output: Starting the engine of Toyota Corolla...
//   myCar.openDoors();   // Defined in Car: Output: Opening the 4 doors of the Toyota Corolla...
//   myCar.stopEngine();  // Inherited from Vehicle: Output: Stopping the engine of Toyota Corolla...
  
// /////////////////////////////////////////////////////////////

function employee(name,salary,dept){
    this.name=name;
    this.salary=salary;
    this.dept=dept;
}

employee.prototype.details=function(){
console.log(`the employee name is ${this.name} salary is ${this.salary} and dept is ${this.dept}`)

}

const emp1=new employee("bob",55000,"it")
emp1.details();


function car(name,modal){
    this.name=name;
    this.modal=modal;
}

car.prototype.start=function(){
    console.log(`engine is ${this.name} started sucessfully`)
}

car.prototype.stop=function(){
    console.log(`enigne is ${this.modal} stoped `)
}

const c1=new car("toyato","crista");
c1.start();
c1.stop();
