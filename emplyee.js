class Employeemanage{
    #name;
    #emp_id;
    #age;
    #workcategory;

    constructor(name,empid,age,workcategory){
        this.#name=name;
        this.#emp_id=empid;
        this.#age=age;
        this.#workcategory=workcategory;
    }

}

class name{
    constructor(name){
        this.name;
           return name;
    }
    display(){
        console.log(`employee name is ${this.name}`)
    }
}

class employeeid{
    constructor(empid){
        this.empid;
        return empid;
    }
    id(){
        console.log(`employee id is ${this.empid}`)
    }
}

class age{
    constructor(age){
        this.age;
        return age;
    }
Age(){
        console.log(`employee age is ${this.age}`)
    }
}

class workcategory{
    constructor(workcategory){
        this.workcategory;
        return workcategory;
    }
    category(){
        console.log(`your category is ${this.workcategory}`)
    }
}

const emp1=new Employeemanage("aravind",23,154,"manager");
emp1.display();
emp1.id();
emp1.Age();
emp1.category();