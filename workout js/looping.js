// et i=0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<5);

// for(i=1;i<5;i++){

//     console.log(i);
// }
// let student= { name: "john", age: 25, city: "New York" };
// for (let key in student) {
//     console.log( key, "=", student[key]);
// }
// outerLoop:
// for (let m = 0; m < 3; m++) {
//     for (let n = 0; n < 3; n++) {
//         if (n === 1) break outerLoop; // Exits both loops
//         console.log("labeled statement:", `m=${m}, n=${n}`);
//     }
// }


// looping:
// for(let a=0;a<7;m++){
//     for(let b=0;b<6;b++){
//         if(b===4)break looping;
//         console.log(`a=${a},b=${b}`);
//     }
// }

// const colors = ["red", "green", "blue"];
// for (let color of colors) {
//     console.log( color);
// }

// for(let a = 0; a < 9; a++){
//     if(a === 2) break;
//     console.log(a);
// }

// let l=0;
// while(l<20){
//     console.log(l);
//     l++;
// }

// let f=0;
// do{
//     console.log(f);
//     f++;
// }
// while(f<10);

let sum=72;
for(s=0;s<15;s++){
    sum/=2;
    if(s===10) continue;
    if(s===7) break;
    console.log(`sum:${sum}`);
}
