// let i=0;
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

// let sum=72;
// for(s=0;s<15;s++){
//     sum/=2;
//     if(s===10) continue;
//     console.log(`sum:${sum}`);
// }

// function helo(a,b){
//     console.log(a*b);
// }
// helo(48,90);


let a=123;
let c=0
 while(a>0)
    {
        b=a%10;
        c=(c*10)+b;
        a=Math.floor(a/10);
    }
console.log(c)


// let i=123456789;
// let j=0;
// while(i>0);
// {
//     k=i%10;
//     j=(j*10)+k;
//     z=Math.floor(i/10);
// }
// console.log(j)