// DOM Document Object Model

// Access id name
const view1 = document.getElementById("view1");
console.log(view1);// 

const view2 = document.querySelector("#view2");
console.log(view2);

view2.style.display = "none"; // Corrected this line

// Access class name
const view = document.getElementsByClassName("view");
console.log(view);




// div
const divs = view1.querySelectorAll("div");
console.log(divs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(even)");
console.log(evenDivs);
 

// Ensure there are enough elements before accessing

evenDivs[4].style.backgroundColor = "red";


for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "Green";
    evenDivs[i].style.width = "150px";
}  