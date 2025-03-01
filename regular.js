// \d----any digit charcter ;
// \w----an alphanumeric CharacterData;
// \s----any whitespace Character;
// \D----a character that is not a digit;
// \W----a nonalphanumeric character;
// \S----a nonwhitespace character;


// function checkmail(email){
//     const emailp=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

// if(emailp.test(email)){
// return true;
// }
// else{
//     return false;
// }

// }

// let email="sachigmail.com";
// console.log(checkmail(email));


// let text="hi how are you";
// console.log(text.match(/[o]/i));

// let text1="sachi45"
// console.log(text1.match(/[d]/));

let date=/^\d{2}-\d{2}-\d{4}$/;
console.log(date.test("12-01-2024"));

// let text2="hello this is sachi";
// console.log(text2.match(/[s]\w/));
// console.log(text2.match(/(\s)/));
// console.log(text2.match(/(\D)/));
// console.log(text2.match(/(\W)/));



// let text3 ="hi this is javascript";
// console.log(text3.match(/javascript/));

// let text4="this is the javascript and react";
// console.log(text4.match(/javascript|react/gi));
// console.log(text4.search(/a/i));
// console.log(text4.replace(/javascript/ ,"js"));

// let text5=/[^0-9]/;
// console.log(text5.test("79809"))
// console.log(text5.test("dbj2h3g678"));


// let text6="216584321644565465454";
// console.log(text6.match(/\d{10}/));


// let text7="hi this is the javascript coding 38467354."
// console.log(text7.match(/\d(?=.\.)/g));
// console.log(text7.match(/(?<=.\s)\d/g));


// let text8=/v{2,7}/;
// console.log(text8.test("v"));
// console.log(text8.test("vvvvvv"))

// let text9=/\d+/;
// console.log(text9.test("78"));
// console.log(text9.test("jhji"))

let text10=/^hi/m;
let multi=`hi this is 
hello how are you
hi this is sachi`;

console.log(text10.test(multi))