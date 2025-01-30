// let currentDate= new Date();
// console.log(currentDate);

// let validDate = new Date("2024-11-1");
// let invalidDate = new Date("invalid-date");
// console.log( !isNaN(validDate));
// console.log( !isNaN(invalidDate));


// let futureDate= new Date("2024-11-1");
// let pastDate= new Date("2020-11-1");
// console.log(futureDate>pastDate);

// function isLeapYear(year){
//     if(year%4===0 && (year%100!==0 || year%400===0)){
//         console.log(" is a leap year");
//     }
//     else{
//         console.log(" is not a leap year");
//     }
// }
// let year=2002;
// isLeapYear(year);

// console.log(currentDate.getMonth());

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log("Full month name:", monthNames[currentDate.getMonth()]);


// console.log(currentDate.getDay());
// console.log(currentDate.getTime());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getHours());




function calculatenextbirthdate(birthdate){
    let today = new Date();
    let BirthDate=new Date(birthdate);
    let nextbirthdate=new Date(today.getFullYear(),BirthDate.getMonth(),BirthDate.getDate());
    let days =getdaysInnextbirthdate(nextbirthdate.getDate(),nextbirthdate.getMonth());
    if(today>nextbirthdate){
        nextbirthdate.setFullYear(today.getFullYear());
    }
    
    console.log("your next birthday is: " + nextbirthdate);
     console.log("Days in current month:", days);

}
let birthdate="2002-03-16";
calculatenextbirthdate(birthdate);
