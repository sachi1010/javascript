// let person={
//     firstname:"alice",
//     lastname:"Bob",
//     get fullName() {
//         return `${this.firstname} ${this.lastname}`;
//     },
//     set fullName(name) {
//         let parts = name.split(" ");
//         if (parts.length === 2) {
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         } else {
//             console.log("Invalid name format. Use 'First Last'.");
//         }
//     }
// }
// console.log(person.fullName);


// class user{
//     constructor(username,email){
//         this._username=username;
//         this._email=email;
//     }
//     get username(){
//         return this._username.touppercase();
//     }
//     set username(name) {
//         if (name.length >= 4) {
//             this._username = name;
//         } else {
//             console.log("Username must be at least 4 characters long.");
//         }
//     }
//     get email(){
//         return this._email
//     }
//     set email(newEmail) {
//         if (newEmail.includes("@gmail")) {
//             this._email = newEmail;
//         } else {
//             console.log("Invalid email format.");
//         }
//     }
// }
// let user1= new user("bob","bobexample23.com");
// console.log(user1._username);
// // console.log(user1._email)
// user1.email="sajdh.com";
// user1._username="bb";
// // console.log(user1.email);



// let product={
//     price:500
// };

// let proxyProduct= new Proxy(product,{
//     get(target,prop){
//         console.log(`${prop}`);
//         return target[prop];
//     },
//     set(target,prop,value){
//         if (prop === "price" && value < 0) {
//             console.log("Price cannot negative.");
//         } else {
//             target[prop] = value;
//             console.log(`Setting ${prop} to ${value}`);
//         }
//         return true;
//     }
// });

// // proxyProduct.price=400;
// proxyProduct.price=-22
// console.log(proxyProduct.price)


class bankaccount{
    #balance;
    
    constructor(initialbal){
        this.#balance=initialbal;
    }
 get balance(){
 return `your account balance is${this.#balance}`;
    }
    set balance(amount){
     if(amount<0){
    console.log("your account balance is negative")
      }else{
    this.#balance=amount;
    }
    }};

let account=new bankaccount(0);
// account.balance=10000;
// console.log(account.balance);
account.balance=0;
console.log(account.balance);