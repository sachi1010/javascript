// let age=22;
// if(age>=18){
//     console.log("you are a adult");
// }
// else{
//     console.log("you are a child");
// }

// let age=23;
// if(age<=18){
//     console.log("you are a child");
// }
// else{
//     console.log("you are a adult");
//     }

// let mark=40;
// if(mark>=90){
//     console.log("grade A");
// }
// else if(mark>=80){
//     console.log("grade B");
// }
// else if(mark>=70){
// console.log("grade C")
// }
// else{
//     console.log("you are fail");
//     }

// let age=22;
// let hasID=true;
// if(age>=18){
//     if(hasID){
//     console.log("you got a lisence");
//     }else{
//         console.log("you can't got a lisence");
//         }     
//     }
//     else{
//         console.log("you are a child");
//     }

// let month=5;
// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("Febrary");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("Apirl");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("august");
//         break;
//     case 9:
//         console.log("september");
//         break;
//     case 10:
//         console.log("october");
//         break;
//     case 11:
//         console.log("november");
//         break;
//     case 12:
//         console.log("december");
//         break;
//     default:
//         console.log("invalid month");
//         break;
// }

// try {
//     let result=49/10;
//     if(!isFinite(result)) throw "cannot divide by nine";
//         console.log("Your Result is",result);
// }catch(error){
//     console.log("error",result);
// }


let role="manager";
switch(role){
    case "admin":
        console.log("you are a full access");
        break;
        case"investigator":
        console.log("you are a not full access");
        break;
        case"manager":
        console.log("you are only access a workers details");
        break;
        case"workers":
        console.log("you are access only a your details");
        break;
        default:
            console.log("you are not access any details");
}

// let student1={
//     name:"john",
//     age:20,
//     grade:90
//     }
// let student2={
//     name:"jane",
//     age:21,
//     grade:85
// }
// let student3={
//     name:"jim",
//     age:22,
//     grade:95
// }
// console.log(student1,student2,student3)
// switch(student1.grade,student2.grade,student3.grade){
//     case 90:
//         console.log("john is a good student");
//         break;
//         case 85:
//             console.log("jane is a good student");
//             break;
//             case 95:
//                 console.log("jim is a good student");
//                 break;
//                 default:
//                     console.log("no one is a good student");
function calculator(operator, num1, num2) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case'%':
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}
let operator = '%';
let num1 = 100;
let num2 = 15;
let calculationResult = calculator(operator, num1, num2);

console.log(`The result of ${num1} ${operator} ${num2} is ${calculationResult}`);
