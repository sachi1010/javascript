
  class Employeemanage{
    #name;
    #age;
    #salary;
  
    constructor(name, age, salary) {
      this.#name = name;
      this.#age = age;
      this.#salary = salary;
    }

    getName() {
        return this.#name;
      }
    
      setName(name) {
        this.#name = name;
      }
    
      getAge() {
        return this.#age;
      }
    
      setAge(age) {
        this.#age = age;
      }
    
      getSalary() {
        return this.#salary;
      }

      setSalary(salary) {
        this.#salary = salary;
      }

      displayInfo() {
        console.log(`employee name is ${this.#name} \n Age is ${this.#age} \n Salary: ${this.#salary}`);
      }
  }

  class Manager extends Employeemanage {
    #department;
  
    constructor(name, age, salary, department) {
      super(name, age, salary);
      this.#department = department;
    }
  
    getDepartment() {
        return this.#department;
      }

      setDepartment(department) {
        this.#department = department;
      }
      displayInfo() {
        super.displayInfo();
        console.log(`Department: ${this.#department}`);
      }
    }
console.log("employee list :");
const employee=new Employeemanage("babu", 40, 50000);
employee.displayInfo();
const manager = new Manager('John Doe', 30, 50000, 'HR');
manager.displayInfo();