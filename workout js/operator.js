let x=10;
console.log(x);
x+=5;
console.log(x);
x-=10;
console.log(x);
x*=20;
console.log(x);
x/=10;
console.log(x);
x%=30;
console.log(x);
x**=20;
console.log(x);

let a=30;
console.log(a==5);
console.log(a===10);
console.log(a!=10);
console.log(a!==5);
console.log(a>10);
console.log(a<10);
console.log(a>=10);
console.log(a<=10);


let r=50, c=25;
console.log(r+c);
console.log(r-c);
console.log(r*c);
console.log(r/c);
console.log(r%c);
console.log(r**c);


let b=35,d=24;
console.log(b&d);
console.log(b|d);
console.log(b^d);
console.log(~b);
console.log(b<<2);
console.log(b>>2);
console.log(b>>>2);

let isgradea=true,isgradeb=false;
console.log(isgradea&&isgradeb);
console.log(isgradea||isgradeb);
console.log(!isgradeb);


// let student1={
//     name:"John",
//     age:20,
//     address:"New York"   
// }
// let student2={
//     name:"Alice",
//     age:22,
//     address:"New York"

// }
// let student3={
//     name:"John",
//     age:35,
// }

let age=16;
console.log(age>=18?"adult":"minor")

let student=[35,67,36,27,89];
console.log("length"in student);
console.log(student instanceof Array);

let str1="hi";str2="hello";
console.log(str1+" "+str2);

let y=1000n;z=100n;
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z);
