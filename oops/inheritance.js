// class person{
//     constructor(name,age){
       
//         this.name=name;
//         this.age=age; 
//     }
//     display(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
    
// }

// let p1=new person(25,"sachi");
// p1.display();

// class Employee extends person{
//     constructor(name,age,department){
//         super(age,name);
//         this.department=department;
//         }
//         display(){
//             console.log(`Name:${this.name} Age:${this.age} Department:${this.department}`);
//             }
//         }
// let p2=new person("bob",34);
//         let e1=new Employee(30,"Rahul","IT");
//       p2.display();
//       e1.display()

// class product{
//     constructor(name,price,quantity){
//         this.name=name;
//         this.price=price;
//         this.quantity=quantity;
//     }
//     display(){
//         console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`)

//     }
// }
// class electronic extends product{
// constructor(name,price){
//     super(name,price);
//     this.category="Electronics";
//     }
//     display(){
//         console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`)
//     }
// }
// class toys extends product{
//     constructor(name,price){
//         super(name,price);
//         this.category="toys";
//     }
//     display(){
//         console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`)
//     }
//     }

// let p=new product("Laptop",1000,10);
// p.display();
// let e=new electronic("Mobile",500);
// e.display();
// let t=new toys("Car",200);
// t.display();


class bankingsystem{
    constructor(accountnumber,accountbalance){
        this.accountnumber=accountnumber;
        this.accountbalance=accountbalance;
        }
      deposit(amount){
        this.accountbalance+=amount;
        console.log(`your deposited amount is ${amount} your new balance is ${this.accountbalance}`);
      }
      withdraw(amount){
        if(amount>this.accountbalance){
            console.log("insufficient balance");
        }else{
            this.accountbalance-=amount;
            console.log(`your withdrawn amount is ${amount} your new balance is ${this.accountbalance}`);
                }
}
}

class savings extends bankingsystem{
    constructor(accountnumber,accountbalance,interestrate){
        super(accountnumber,accountbalance);
        this.interestrate=interestrate;
    }
    addinterest(){
        let interest=(this.accountbalance*this.interestrate)/100;
        this.accountbalance+=interest;
        console.log(`your interest is ${interest} your new balance is ${this.accountbalance}`);
    }
}

class current extends bankingsystem{
    constructor(accountnumber,accountbalance,currentbalance){
        super(accountnumber,accountbalance);
        this.currentbalance=currentbalance;
    }
    withdraw(){
        if(this.amount>this.accountbalance+this.currentbalance){
            console.log("your limit is exceeded");
        }else{
            this.accountbalance-= amount;
            console.log(`your withdrawn amount is ${this.amount} your new balance is ${this.accountbalance}`);
        }

        }    }

    let savingsaccount=new savings("12345",10000);
    savingsaccount.deposit(1000);
    let currentaccount=new current("67890",5000);
    currentaccount.deposit(500);
    currentaccount.withdraw(1000)